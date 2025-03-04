from flask import Blueprint, request, jsonify

live_workout_bp = Blueprint('live_workout', __name__)

# Schedule a new live workout session
@live_workout_bp.route("/", methods=["POST"])
def create_live_workout():
    data = request.json
    session_id = f"session_{data.get('title')}_{data.get('date')}"
    return jsonify({"message": "Live workout scheduled!", "session_id": session_id})

# Join an existing live session
@live_workout_bp.route("/<string:session_id>/join", methods=["POST"])
def join_live_workout(session_id):
    return jsonify({"message": f"Joined live session {session_id}!"})

# List all upcoming live workout sessions
@live_workout_bp.route("/", methods=["GET"])
def get_live_workouts():
    return jsonify([
        {"session_id": "session_1", "title": "Morning Yoga", "date": "2024-03-05"},
        {"session_id": "session_2", "title": "HIIT Blast", "date": "2024-03-06"},
    ])
