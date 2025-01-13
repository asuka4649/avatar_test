import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Database URI (switch between SQLite and others like PostgreSQL/MySQL)
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", f"sqlite:///{os.path.join(basedir, 'database.db')}")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY", "your-default-secret-key")  # For JWT or session management
    