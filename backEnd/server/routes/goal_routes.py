from flask import Blueprint, request, jsonify
from models import db, Goal

goal_bp = Blueprint('goals', __name__)

@goal_bp.route("/", methods=["GET"])
def get_all_goals():
    goals = Goal.query.all()
    return jsonify([goal.serialize() for goal in goals])

@goal_bp.route("/", methods=["POST"])
def create_goal():
    data = request.json
    new_goal = Goal(title=data.get("title"), frequency=data.get("frequency"), created_at=data.get("created_at"), user_id_fk=data.get("user_id_fk"))
    db.session.add(new_goal)
    db.session.commit()
    return jsonify({"message": "Goal created", "goal": new_goal.serialize()}), 201
