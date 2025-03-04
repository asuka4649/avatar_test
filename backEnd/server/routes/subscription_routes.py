from flask import Blueprint, request, jsonify
import stripe
from models import db, User, Subscription

subscription_bp = Blueprint("subscription", __name__)

# Stripe API Key
stripe.api_key = "your-stripe-secret-key"

@subscription_bp.route("/subscribe", methods=["POST"])
def create_subscription():
    data = request.json
    user_id = data["user_id"]
    plan_id = data["plan_id"]  # e.g., "price_1JXYZ" from Stripe Dashboard

    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    try:
        # Create Stripe Customer
        customer = stripe.Customer.create(email=user.email)

        # Create Stripe Subscription
        subscription = stripe.Subscription.create(
            customer=customer.id,
            items=[{"price": plan_id}],
            payment_behavior="default_incomplete",
            expand=["latest_invoice.payment_intent"],
        )

        # Store Subscription in Database
        new_subscription = Subscription(
            user_id=user.id,
            stripe_customer_id=customer.id,
            stripe_subscription_id=subscription.id,
            plan=plan_id,
            status="pending"
        )
        db.session.add(new_subscription)
        db.session.commit()

        return jsonify({"message": "Subscription created", "subscription_id": subscription.id})
    except stripe.error.StripeError as e:
        return jsonify({"error": str(e)}), 400

@subscription_bp.route("/cancel", methods=["POST"])
def cancel_subscription():
    data = request.json
    user_id = data["user_id"]

    subscription = Subscription.query.filter_by(user_id=user_id).first()
    if not subscription:
        return jsonify({"error": "Subscription not found"}), 404

    try:
        stripe.Subscription.modify(subscription.stripe_subscription_id, cancel_at_period_end=True)
        subscription.status = "canceled"
        db.session.commit()
        return jsonify({"message": "Subscription canceled successfully"})
    except stripe.error.StripeError as e:
        return jsonify({"error": str(e)}), 400

@subscription_bp.route("/history/<int:user_id>", methods=["GET"])
def get_subscription_history(user_id):
    subscription = Subscription.query.filter_by(user_id=user_id).first()
    if not subscription:
        return jsonify({"error": "No subscription found"}), 404

    return jsonify(subscription.serialize())
