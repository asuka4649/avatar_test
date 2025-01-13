from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# User Model
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    icon = db.Column(db.LargeBinary)  # Assuming image is stored as binary

    goals = db.relationship('Goals', backref='user', lazy=True)
    profile = db.relationship('Profile', backref='user', lazy=True)
    notifications = db.relationship('Notification', backref='user', lazy=True)
    schedules = db.relationship('Schedule', backref='user', lazy=True)
    events = db.relationship('Event', backref='user', lazy=True)
    challenges = db.relationship('Challenge', backref='user', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "icon": str(self.icon) if self.icon else None
        }

# Goals Model
class Goals(db.Model):
    __tablename__ = 'goals'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    frequency = db.Column(db.String, nullable=False)
    created_at = db.Column(db.String, nullable=False)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "title": self.title,
            "frequency": self.frequency,
            "created_at": self.created_at,
            "user_id_fk": self.user_id_fk
        }

# Profile Model
class Profile(db.Model):
    __tablename__ = 'profile'
    id = db.Column(db.Integer, primary_key=True)
    goals = db.Column(db.String)
    interest = db.Column(db.String)
    rank = db.Column(db.Integer)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "goals": self.goals,
            "interest": self.interest,
            "rank": self.rank,
            "user_id_fk": self.user_id_fk
        }

# Notification Model
class Notification(db.Model):
    __tablename__ = 'notification'
    id = db.Column(db.Integer, primary_key=True)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    type = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id_fk": self.user_id_fk,
            "type": self.type,
            "content": self.content
        }

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
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Challenge Model
class Challenge(db.Model):
    __tablename__ = 'challenge'
    id = db.Column(db.Integer, primary_key=True)
    user_id_fk = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    progress = db.Column(db.String)
    rewards = db.Column(db.String)

    # Relationships
    exercises = db.relationship('Exercise', backref='challenge', lazy=True)
    reviews = db.relationship('Reviews', backref='challenge', lazy=True)

# Reviews Model
class Reviews(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    review_comment = db.Column(db.String, nullable=False)
    challenge_id_fk = db.Column(db.Integer, db.ForeignKey('challenge.id'), nullable=False)

# Exercise Model
class Exercise(db.Model):
    __tablename__ = 'exercise'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    reps = db.Column(db.Integer)
    challenge_id_fk = db.Column(db.Integer, db.ForeignKey('challenge.id'), nullable=False)
