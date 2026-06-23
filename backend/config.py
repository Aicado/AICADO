import os

class Config:
    DEBUG = os.environ.get("FLASK_DEBUG", "false").lower() == "true"
    SECRET_KEY = os.environ.get("FLASK_SECRET_KEY", "aicado_backend_secret_key_!@#$")
    # Add other backend configurations if needed
