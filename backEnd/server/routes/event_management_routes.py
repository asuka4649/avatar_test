from flask import Blueprint, request, jsonify
import random  # ✅ Import the random module

event_management_bp = Blueprint("event_management", __name__)  # ✅ Make sure the name is unique

# Create a new event
@event_management_bp.route("/", methods=["POST"])
def create_event():
    data = request.json
    return jsonify({"message": f"Event '{data.get('title')}' created!", "event_id": data.get("event_id")})

# Fetch all events
@event_management_bp.route("/", methods=["GET"])
def get_events():
    return jsonify([
        {"event_id": 1, "title": "Marathon Training", "date": "2024-04-10"},
        {"event_id": 2, "title": "Yoga Retreat", "date": "2024-05-01"}
    ])

# Join an event
@event_management_bp.route("/<int:event_id>/join", methods=["POST"])
def join_event(event_id):
    return jsonify({"message": f"Successfully joined event {event_id}"})

# Get event progress
@event_management_bp.route("/<int:event_id>/progress", methods=["GET"])
def get_event_progress(event_id):
    return jsonify({
        "event_id": event_id,
        "progress": f"{random.randint(10, 100)}% completed"  # ✅ Random module now correctly defined
    })
