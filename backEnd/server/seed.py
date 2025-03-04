from app import app, db
from models import User, Subscription, Goal, Event, Challenge, Review, Exercise, Game, Profile
from werkzeug.security import generate_password_hash
from datetime import datetime

def seed_database():
    with app.app_context():  # ✅ Ensure application context is active
        # Drop & recreate tables to start fresh
        db.drop_all()
        db.create_all()

        # Create Users
        user1 = User(name="John Doe", email="john@example.com", password=generate_password_hash("password123"))
        user2 = User(name="Jane Smith", email="jane@example.com", password=generate_password_hash("password123"))
        user3 = User(name="Alice Brown", email="alice@example.com", password=generate_password_hash("password123"))

        db.session.add_all([user1, user2, user3])
        db.session.commit()

        # Create Subscriptions
        sub1 = Subscription(user_id=user1.id, stripe_customer_id="cus_123abc", stripe_subscription_id="sub_123abc", plan="premium", status="active", start_date=datetime.utcnow())
        sub2 = Subscription(user_id=user2.id, stripe_customer_id="cus_456def", stripe_subscription_id="sub_456def", plan="basic", status="active", start_date=datetime.utcnow())

        db.session.add_all([sub1, sub2])
        db.session.commit()

        # Create Goals
        goal1 = Goal(title="Run 5K", frequency="Weekly", created_at=datetime.utcnow().isoformat(), user_id_fk=user1.id)
        goal2 = Goal(title="Meditate 10 min", frequency="Daily", created_at=datetime.utcnow().isoformat(), user_id_fk=user2.id)

        db.session.add_all([goal1, goal2])
        db.session.commit()

        # Create Events
        event1 = Event(title="Yoga Retreat", description="A relaxing weekend of yoga", date="2024-04-20", location="Bali", user_id_fk=user3.id)
        event2 = Event(title="Marathon Training", description="Train for a half marathon", date="2024-06-10", location="NYC", user_id_fk=user1.id)

        db.session.add_all([event1, event2])
        db.session.commit()

        # Create Challenges
        challenge1 = Challenge(title="Push-up Challenge", description="Do 100 push-ups per day", progress="50%", rewards="Badge", user_id_fk=user1.id)
        challenge2 = Challenge(title="Plank Challenge", description="Hold a plank for 5 minutes", progress="30%", rewards="Certificate", user_id_fk=user2.id)

        db.session.add_all([challenge1, challenge2])
        db.session.commit()

        # Create Reviews
        review1 = Review(comment="Great challenge, very engaging!", challenge_id_fk=challenge1.id)
        review2 = Review(comment="Hard but worth it!", challenge_id_fk=challenge2.id)

        db.session.add_all([review1, review2])
        db.session.commit()

        # Create Exercises
        exercise1 = Exercise(name="Push-ups", reps=50, challenge_id_fk=challenge1.id)
        exercise2 = Exercise(name="Plank Hold", reps=3, challenge_id_fk=challenge2.id)

        db.session.add_all([exercise1, exercise2])
        db.session.commit()

        # Create Games
        game1 = Game(title="Fitness Trivia", description="Answer fitness-related questions", rules="Get 10 correct answers to win!", rewards="Trophy", user_id_fk=user3.id)

        db.session.add(game1)
        db.session.commit()

        print("✅ Database successfully seeded!")

if __name__ == "__main__":
    seed_database()
