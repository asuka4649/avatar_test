from flask import Blueprint, request, jsonify
import openai

ai_chat_coach_bp = Blueprint('ai_chat_coach', __name__)

# Configure OpenAI API Key
openai.api_key = "your-openai-secret-key"

# AI-Powered Chat Coach
@ai_chat_coach_bp.route("/chat", methods=["POST"])
def ai_chat_coach():
    data = request.json
    user_message = data["message"]

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a fitness AI coach. Answer user questions about workouts, nutrition, and fitness goals."},
                {"role": "user", "content": user_message}
            ]
        )
        return jsonify({"response": response["choices"][0]["message"]["content"]})
    except openai.error.OpenAIError as e:
        return jsonify({"error": str(e)}), 400
