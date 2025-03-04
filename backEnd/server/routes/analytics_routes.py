from flask import Blueprint, request, jsonify

analytics_bp = Blueprint('analytics', __name__)

# Retrieve workout analytics for a user
@analytics_bp.route("/workout/<int:user_id>", methods=["GET"])
def get_workout_analytics(user_id):
    return jsonify({
        "user_id": user_id,
        "total_calories_burned": 1200,
        "total_workouts": 10,
        "average_workout_time": "45 mins"
    })

# Get global workout trends
@analytics_bp.route("/trends", methods=["GET"])
def get_trends():
    return jsonify({
        "most_popular_workout": "HIIT",
        "average_calories_burned_per_session": 350,
        "most_active_time": "6 AM - 9 AM"
    })
