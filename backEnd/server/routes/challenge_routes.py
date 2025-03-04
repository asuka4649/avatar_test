from flask import Blueprint, request, jsonify
from models import db, Challenge

challenge_bp = Blueprint('challenges', __name__)

@challenge_bp.route("/", methods=["GET"])
def get_all_challenges():
    challenges = Challenge.query.all()
    return jsonify([challenge.serialize() for challenge in challenges])

@challenge_bp.route("/", methods=["POST"])
def create_challenge():
    data = request.json
    new_challenge = Challenge(user_id_fk=data.get("user_id_fk"), progress=data.get("progress"), rewards=data.get("rewards"))
    db.session.add(new_challenge)
    db.session.commit()
    return jsonify({"message": "Challenge created", "challenge": new_challenge.serialize()}), 201
