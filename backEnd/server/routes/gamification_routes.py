from flask import Blueprint, request, jsonify

gamification_bp = Blueprint('gamification', __name__)

# Reward a user
@gamification_bp.route("/rewards", methods=["POST"])
def award_rewards():
    data = request.json
    user_id = data["user_id"]
    points = data["points"]
    badge = data.get("badge", "Beginner Badge")
    return jsonify({"message": f"User {user_id} awarded {points} points and {badge}"})

# Retrieve user rewards
@gamification_bp.route("/rewards/<int:user_id>", methods=["GET"])
def get_rewards(user_id):
    return jsonify({"user_id": user_id, "points": 500, "badges": ["Beginner", "Intermediate"]})

# Leaderboard
@gamification_bp.route("/leaderboard", methods=["GET"])
def leaderboard():
    return jsonify([
        {"user": "Alice", "points": 1200},
        {"user": "Bob", "points": 1100},
        {"user": "Charlie", "points": 1000}
    ])
