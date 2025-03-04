from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Change to your DB connection
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Follower Relationship (Many-to-Many Self-Referencing)
followers = db.Table(
    'followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('created_at', db.DateTime, default=db.func.current_timestamp())
)

# User Model
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    icon = db.Column(db.LargeBinary)

    goals = db.relationship('Goal', backref='user', lazy=True)
    profile = db.relationship('Profile', backref='user', lazy=True)
    notifications = db.relationship('Notification', backref='user', lazy=True)
    schedules = db.relationship('Schedule', backref='user', lazy=True)
    events = db.relationship('Event', backref='user', lazy=True)
    challenges = db.relationship('Challenge', backref='user', lazy=True)

    # Self-referential Many-to-Many Relationship
    followed = db.relationship(
        'User', 
        secondary=followers, 
        primaryjoin=(followers.c.follower_id == id), 
        secondaryjoin=(followers.c.followed_id == id), 
        backref=db.backref('followers', lazy='dynamic'),
        lazy='dynamic'
    )

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(followers.c.followed_id == user.id).count() > 0

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "icon": str(self.icon) if self.icon else None,
            "following": [user.id for user in self.followed],
            "followers": [user.id for user in self.followers]
        }


class Subscription(db.Model):
    __tablename__ = "subscription"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    stripe_customer_id = db.Column(db.String, unique=True, nullable=False)
    stripe_subscription_id = db.Column(db.String, unique=True, nullable=True)
    plan = db.Column(db.String, nullable=False)  # e.g., "basic", "premium"
    status = db.Column(db.String, default="inactive")  # active, canceled, trialing, etc.
    start_date = db.Column(db.DateTime, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "stripe_customer_id": self.stripe_customer_id,
            "stripe_subscription_id": self.stripe_subscription_id,
            "plan": self.plan,
            "status": self.status,
            "start_date": self.start_date,
            "end_date": self.end_date
        }

# Goal Model
class Goal(db.Model):
    __tablename__ = 'goal'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    frequency = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, nullable=False)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Profile Model
class Profile(db.Model):
    __tablename__ = 'profile'
    id = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.String)
    interests = db.Column(db.String)
    rank = db.Column(db.Integer)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Notification Model
class Notification(db.Model):
    __tablename__ = 'notification'
    id = db.Column(db.Integer, primary_key=True)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    type = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)

# Schedule Model
class Schedule(db.Model):
    __tablename__ = 'schedule'
    id = db.Column(db.Integer, primary_key=True)
    monday = db.Column(db.String)
    tuesday = db.Column(db.String)
    wednesday = db.Column(db.String)
    thursday = db.Column(db.String)
    friday = db.Column(db.String)
    saturday = db.Column(db.String)
    sunday = db.Column(db.String)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Event Model
class Event(db.Model):
    __tablename__ = 'event'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    date = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=True)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Challenge Model
class Challenge(db.Model):
    __tablename__ = 'challenge'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)
    progress = db.Column(db.String)
    rewards = db.Column(db.String)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    game_id_fk = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=True)

    
    exercises = db.relationship('Exercise', backref='challenge', lazy=True)
    reviews = db.relationship('Review', backref='challenge', lazy=True)

# Review Model
class Review(db.Model):
    __tablename__ = 'review'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String, nullable=False)
    challenge_id_fk = db.Column(db.Integer, db.ForeignKey('challenge.id'), nullable=False)

# Exercise Model
class Exercise(db.Model):
    __tablename__ = 'exercise'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    reps = db.Column(db.Integer)
    challenge_id_fk = db.Column(db.Integer, db.ForeignKey('challenge.id'), nullable=False)

# Game Model
class Game(db.Model):
    __tablename__ = 'game'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    rules = db.Column(db.String)
    rewards = db.Column(db.String)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    challenges = db.relationship('Challenge', backref='game', lazy=True)

if __name__ == '__main__':
    db.create_all()
