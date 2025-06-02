from flask import Flask
from flask_graphql import GraphQLView
from flask_cors import CORS # Import CORS
from .schema import schema

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Enable CORS for all domains on all routes
    # For production, you might want to restrict this to specific origins
    CORS(app)

    app.add_url_rule(
        '/graphql',
        view_func=GraphQLView.as_view(
            'graphql',
            schema=schema,
            graphiql=True
        )
    )

    return app
