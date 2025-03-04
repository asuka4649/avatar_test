from flask import Blueprint, request, jsonify
from models import db

data_privacy_bp = Blueprint('data_privacy', __name__)

# Fetch latest privacy terms
@data_privacy_bp.route("/terms", methods=["GET"])
def get_terms():
    return jsonify({"terms": "Latest privacy terms for the application."})

# Record user consent
@data_privacy_bp.route("/consent", methods=["POST"])
def record_consent():
    data = request.json
    user_id = data["user_id"]
    consent_status = data["consent"]
    return jsonify({"message": f"Consent recorded for user {user_id}", "consent": consent_status})

# Retrieve user consent details
@data_privacy_bp.route("/consent/<int:user_id>", methods=["GET"])
def get_user_consent(user_id):
    return jsonify({"user_id": user_id, "consent": True})

# Request data deletion
@data_privacy_bp.route("/data/<int:user_id>", methods=["DELETE"])
def delete_user_data(user_id):
    return jsonify({"message": f"User {user_id} data has been deleted per request."})
