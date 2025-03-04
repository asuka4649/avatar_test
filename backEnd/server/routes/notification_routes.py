from flask import Blueprint, request, jsonify
from models import db, Notification
from routes.auth_routes import token_required

notification_bp = Blueprint('notifications', __name__)

@notification_bp.route("/send", methods=["POST"])
@token_required
def send_notification(current_user):
    data = request.json
    new_notification = Notification(user_id_fk=current_user.id, type=data["type"], content=data["content"])
    db.session.add(new_notification)
    db.session.commit()
    return jsonify({"message": "Notification sent!"}), 201
