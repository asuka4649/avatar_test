from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from routes.auth_routes import auth_bp
from routes.user_routes import user_bp
from routes.goal_routes import goal_bp
from routes.challenge_routes import challenge_bp
from routes.event_routes import event_bp
from routes.api_routes import api_bp
from routes.workout_routes import workout_bp
from routes.notification_routes import notification_bp
from routes.pose_analysis_routes import pose_bp
from routes.gamification_routes import gamification_bp
from routes.analytics_routes import analytics_bp
from routes.subscription_routes import subscription_bp
from routes.live_workout_routes import live_workout_bp
from routes.community_routes import community_bp
from routes.wearables_routes import wearables_bp
from routes.data_privacy_routes import data_privacy_bp
from routes.ai_model_routes import ai_model_bp
from routes.adaptive_ai_feedback_routes import adaptive_ai_feedback_bp
from routes.event_management_routes import event_management_bp
from routes.ai_chat_coach_routes import ai_chat_coach_bp
from routes.stripe_webhooks import webhook_bp





app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

# Register Blueprints (Routes)
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(user_bp, url_prefix='/users')
app.register_blueprint(goal_bp, url_prefix='/goals')
app.register_blueprint(challenge_bp, url_prefix='/challenges')
app.register_blueprint(event_bp, url_prefix='/events')
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(workout_bp, url_prefix='/workouts')
app.register_blueprint(notification_bp, url_prefix='/notifications')
app.register_blueprint(pose_bp, url_prefix='/pose')
app.register_blueprint(gamification_bp, url_prefix='/gamification')
app.register_blueprint(analytics_bp, url_prefix='/analytics')
app.register_blueprint(subscription_bp, url_prefix='/billing')
app.register_blueprint(live_workout_bp, url_prefix='/live')
app.register_blueprint(community_bp, url_prefix='/community')
app.register_blueprint(wearables_bp, url_prefix='/wearables')
app.register_blueprint(data_privacy_bp, url_prefix='/privacy')
app.register_blueprint(ai_model_bp, url_prefix='/models')
app.register_blueprint(event_management_bp, url_prefix='/event_managements')
app.register_blueprint(ai_chat_coach_bp, url_prefix='/ai-chat')
app.register_blueprint(adaptive_ai_feedback_bp, url_prefix='/feedback')
app.register_blueprint(webhook_bp, url_prefix="/webhooks")





@app.route("/")
def home():
    return {"message": "Welcome to the Xakary.app Backend!"}

if __name__ == "__main__":
    app.run(debug=True)
