from flask import Blueprint, request, jsonify

community_bp = Blueprint('community', __name__)

# Create a new group
@community_bp.route("/groups", methods=["POST"])
def create_group():
    data = request.json
    return jsonify({"message": f"Group {data.get('name')} created!"})

# List all groups
@community_bp.route("/groups", methods=["GET"])
def list_groups():
    return jsonify([
        {"group_id": 1, "name": "Running Enthusiasts"},
        {"group_id": 2, "name": "Weightlifting Warriors"},
    ])

# Get group details
@community_bp.route("/groups/<int:group_id>", methods=["GET"])
def get_group(group_id):
    return jsonify({"group_id": group_id, "name": "Example Group", "members": 50})

# Send a message
@community_bp.route("/messages", methods=["POST"])
def send_message():
    data = request.json
    return jsonify({"message": f"Message sent to group {data.get('group_id')}"})

# Retrieve community feed
@community_bp.route("/feed", methods=["GET"])
def get_feed():
    return jsonify([
        {"user": "Alice", "post": "Completed my 10k run today!"},
        {"user": "Bob", "post": "Deadlift PR today - 250lbs!"},
    ])
