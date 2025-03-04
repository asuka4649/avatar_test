from flask import Blueprint, request, jsonify
from models import db, User
from routes.auth_routes import token_required

user_bp = Blueprint('users', __name__)

@user_bp.route("/", methods=["GET"])
@token_required
def get_users(current_user):
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

@user_bp.route("/<int:user_id>", methods=["GET"])
@token_required
def get_user(current_user, user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.serialize())

@user_bp.route("/<int:user_id>", methods=["PUT"])
@token_required
def update_user(current_user, user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    user.name = data.get("name", user.name)
    user.email = data.get("email", user.email)
    db.session.commit()
    return jsonify({"message": "User updated", "user": user.serialize()})
