from flask import Blueprint, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route("/locations", methods=["GET"])
def get_locations():
    sample_locations = [
        {"name": "Golden Gate Bridge", "latitude": 37.8199, "longitude": -122.4783},
        {"name": "Statue of Liberty", "latitude": 40.6892, "longitude": -74.0445},
        {"name": "Central Park", "latitude": 40.7851, "longitude": -73.9683},
    ]
    return jsonify(sample_locations)
