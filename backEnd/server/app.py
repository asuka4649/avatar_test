from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from server.models import db, User, Goals, Profile, Notification, Schedule, Event, Challenge, Reviews, Exercise

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

# 1. Home Route
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Flask API!"})

# 2. CRUD for Users
@app.route("/users", methods=["POST"])
def create_user():
    data = request.json
    new_user = User(
        name=data.get("name"),
        email=data.get("email"),
        password=data.get("password"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": f"User {new_user.name} created!", "user": new_user.serialize()}), 201

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.serialize())

@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.json
    user.name = data.get("name", user.name)
    user.email = data.get("email", user.email)
    user.password = data.get("password", user.password)
    db.session.commit()
    return jsonify({"message": "User updated", "user": user.serialize()})

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": f"User {user.name} deleted!"})

# 3. CRUD for Goals
@app.route("/goals", methods=["POST"])
def create_goal():
    data = request.json
    new_goal = Goals(
        date=data.get("date"),
        title=data.get("title"),
        frequency=data.get("frequency"),
        created_at=data.get("created_at"),
        user_id_fk=data.get("user_id_fk")
    )
    db.session.add(new_goal)
    db.session.commit()
    return jsonify({"message": "Goal created", "goal": new_goal.serialize()}), 201

@app.route("/goals", methods=["GET"])
def get_all_goals():
    goals = Goals.query.all()
    return jsonify([goal.serialize() for goal in goals])

@app.route("/goals/<int:goal_id>", methods=["DELETE"])
def delete_goal(goal_id):
    goal = Goals.query.get(goal_id)
    if not goal:
        return jsonify({"error": "Goal not found"}), 404
    db.session.delete(goal)
    db.session.commit()
    return jsonify({"message": "Goal deleted!"})

# 4. CRUD for Challenges
@app.route("/challenges", methods=["POST"])
def create_challenge():
    data = request.json
    new_challenge = Challenge(
        user_id_fk=data.get("user_id_fk"),
        progress=data.get("progress"),
        rewards=data.get("rewards")
    )
    db.session.add(new_challenge)
    db.session.commit()
    return jsonify({"message": "Challenge created", "challenge": new_challenge.serialize()}), 201

@app.route("/challenges", methods=["GET"])
def get_all_challenges():
    challenges = Challenge.query.all()
    return jsonify([challenge.serialize() for challenge in challenges])

@app.route('/api/locations', methods=['GET'])
def get_locations():
    sample_locations = [
        {"name": "Golden Gate Bridge", "latitude": 37.8199, "longitude": -122.4783},
        {"name": "Statue of Liberty", "latitude": 40.6892, "longitude": -74.0445},
        {"name": "Central Park", "latitude": 40.7851, "longitude": -73.9683},
    ]
    return jsonify(sample_locations)

if __name__ == "__main__":
    app.run(debug=True)
