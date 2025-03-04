from flask import Blueprint, request, jsonify
from routes.auth_routes import token_required
import random

workout_bp = Blueprint('workouts', __name__)

sample_workouts = [
    {"name": "Push-ups", "duration": "10 mins"},
    {"name": "Squats", "duration": "15 mins"},
    {"name": "Running", "duration": "20 mins"}
]

@workout_bp.route("/recommend", methods=["POST"])
@token_required
def recommend_workout(current_user):
    goal = request.json.get("goal")
    recommended_workout = random.choice(sample_workouts)  # Replace with AI-based recommendation
    return jsonify({"goal": goal, "recommended_workout": recommended_workout})
