from flask import Blueprint, request, jsonify
import random

adaptive_ai_feedback_bp = Blueprint('adaptive_ai_feedback', __name__)

# Analyze form and provide real-time feedback
@adaptive_ai_feedback_bp.route("/form", methods=["POST"])
def analyze_form():
    data = request.json
    feedback = random.choice([
        "Maintain a straight back.",
        "Engage your core more.",
        "Keep your knees slightly bent."
    ])
    return jsonify({"exercise": data["exercise"], "feedback": feedback})

# Evaluate workout performance
@adaptive_ai_feedback_bp.route("/performance", methods=["POST"])
def evaluate_performance():
    data = request.json
    score = random.randint(70, 100)
    return jsonify({"user_id": data["user_id"], "performance_score": score})

# Retrieve past feedback
@adaptive_ai_feedback_bp.route("/history/<int:user_id>", methods=["GET"])
def get_feedback_history(user_id):
    return jsonify({
        "user_id": user_id,
        "past_feedback": [
            {"exercise": "Squats", "feedback": "Maintain a straight back."},
            {"exercise": "Push-ups", "feedback": "Keep your core tight."}
        ]
    })
