from flask import Blueprint, request, jsonify
from models import db, Event

event_bp = Blueprint('events', __name__)

@event_bp.route("/", methods=["GET"])
def get_all_events():
    events = Event.query.all()
    return jsonify([event.serialize() for event in events])

@event_bp.route("/", methods=["POST"])
def create_event():
    data = request.json
    new_event = Event(title=data.get("title"), description=data.get("description"), date=data.get("date"), location=data.get("location"), user_id_fk=data.get("user_id_fk"))
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Event created", "event": new_event.serialize()}), 201
