# AICADO Company Website

This project is the official company website for AICADO, a software company specializing in AI-powered websites and tools.

## Architecture

The website is built using a modern technology stack:

*   **Frontend:** React.js (using Create React App)
    *   Client-side routing with React Router.
    *   GraphQL communication using `graphql-request`.
*   **Backend:** Python Flask with Graphene-Python
    *   Serves a GraphQL API for data fetching.
    *   Uses Flask-CORS to handle cross-origin requests during development.

## Project Structure

```
/
├── frontend/         # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/ # Reusable UI components (layout, etc.)
│   │   ├── pages/      # Page-level components
│   │   ├── App.css     # Global styles
│   │   ├── App.js      # Main application component with routing
│   │   └── index.js    # Entry point for React app
│   ├── package.json
│   └── ...
├── backend/          # Flask backend application (GraphQL API)
│   ├── app/
│   │   ├── __init__.py # Flask app factory, GraphQL endpoint setup
│   │   ├── schema.py   # GraphQL schema definitions (Graphene)
│   │   └── routes.py   # (Optional) For any RESTful routes
│   ├── config.py     # Flask configuration
│   ├── requirements.txt # Python dependencies
│   ├── run.py        # Script to run the backend server
│   └── ...
├── .gitignore
└── README.md
```

## Prerequisites

*   Node.js (v18.x or higher recommended for frontend, check `frontend/package.json` for specific engine requirements)
*   npm (usually comes with Node.js) or yarn
*   Python (v3.8 or higher recommended)
*   pip (Python package installer)

## Setup and Running the Application

### Backend (Flask/GraphQL API)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a Python virtual environment (recommended):**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    *   On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
    *   On Windows:
        ```bash
        .\venv\Scripts\activate
        ```

4.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the backend server:**
    ```bash
    python run.py
    ```
    The backend server should now be running, typically on `http://localhost:5000`. The GraphQL interface (GraphiQL) will be available at `http://localhost:5000/graphql`.

### Frontend (React App)

1.  **Navigate to the frontend directory (from the project root):**
    ```bash
    cd frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```
    (Or `yarn install` if you prefer yarn and have it installed)

3.  **Run the frontend development server:**
    ```bash
    npm start
    ```
    (Or `yarn start`)

    The frontend development server should now be running, typically on `http://localhost:3000`. It will automatically open in your default web browser.

## Development Notes

*   The frontend communicates with the backend GraphQL API. Ensure both servers are running during development.
*   Styling is primarily managed through global CSS in `frontend/src/App.css`.
*   Placeholder data is used in some areas and will be replaced with dynamic data from the backend as development progresses.
