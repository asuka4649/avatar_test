from flask import Blueprint, request, jsonify
import stripe
from models import db, Subscription, User
from datetime import datetime

webhook_bp = Blueprint("stripe_webhook", __name__)

STRIPE_SECRET_KEY = "your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET = "your-stripe-webhook-secret"

stripe.api_key = STRIPE_SECRET_KEY

@webhook_bp.route("/stripe-webhook", methods=["POST"])
def stripe_webhook():
    payload = request.get_data(as_text=True)
    sig_header = request.headers.get("Stripe-Signature")

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, STRIPE_WEBHOOK_SECRET)
    except ValueError:
        return jsonify({"error": "Invalid payload"}), 400
    except stripe.error.SignatureVerificationError:
        return jsonify({"error": "Invalid signature"}), 400

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        user = User.query.filter_by(email=session["customer_email"]).first()
        if user:
            subscription = Subscription.query.filter_by(user_id=user.id).first()
            if subscription:
                subscription.status = "active"
                subscription.start_date = datetime.utcnow()
                db.session.commit()

    elif event["type"] == "customer.subscription.deleted":
        subscription = event["data"]["object"]
        user = User.query.filter_by(stripe_customer_id=subscription["customer"]).first()
        if user:
            sub = Subscription.query.filter_by(user_id=user.id).first()
            if sub:
                sub.status = "canceled"
                sub.end_date = datetime.utcnow()
                db.session.commit()

    elif event["type"] == "invoice.payment_failed":
        invoice = event["data"]["object"]
        user = User.query.filter_by(stripe_customer_id=invoice["customer"]).first()
        if user:
            sub = Subscription.query.filter_by(user_id=user.id).first()
            if sub:
                sub.status = "payment_failed"
                db.session.commit()

    return jsonify(success=True)
