from flask import Blueprint, request, jsonify
import random

pose_bp = Blueprint('pose_analysis', __name__)

# Simulated AI-based form correction
@pose_bp.route("/analyze", methods=["POST"])
def analyze_pose():
    data = request.json
    exercise = data.get("exercise")
    form_feedback = random.choice(["Good form!", "Keep your back straight!", "Adjust your knee position."])
    return jsonify({"exercise": exercise, "feedback": form_feedback})

@pose_bp.route("/results/<string:session_id>", methods=["GET"])
def get_pose_results(session_id):
    return jsonify({"session_id": session_id, "feedback": "Your form was 90% accurate!"})
