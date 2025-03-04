from flask import Blueprint, request, jsonify

wearables_bp = Blueprint('wearables', __name__)

# Sync wearable data
@wearables_bp.route("/data", methods=["POST"])
def sync_wearable_data():
    data = request.json
    return jsonify({"message": "Wearable data synced!", "data": data})

# Retrieve user's wearable data
@wearables_bp.route("/data/<int:user_id>", methods=["GET"])
def get_wearable_data(user_id):
    return jsonify({"user_id": user_id, "heart_rate": 75, "steps": 10000, "sleep_hours": 7})
