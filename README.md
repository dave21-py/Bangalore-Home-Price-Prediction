<p align="center">
  <img width="400px" src="https://i.imgur.com/your-project-image.png" alt="Woodland Project Logo" />
  <h2 align="center">Woodland - Bangalore Real Estate Price Predictor</h2>
  <p align="center">A sophisticated, full-stack web application that leverages a machine learning model to provide instant, data-driven price predictions for real estate in Bangalore.</p>
</p>

<p align="center">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" />
  <img alt="Flask" src="https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white" />
  <img alt="Scikit-learn" src="https://img.shields.io/badge/scikit--learn-F7931E?logo=scikit-learn&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="Azure" src="https://img.shields.io/badge/Deploy-Azure-0078D4?logo=microsoftazure" />
</p>

<p align="center">
  <a href="https://dave21-bhp-prediction.azurewebsites.net/">View Live Demo</a> ·
  <a href="https://github.com/dave21-py/Bangalore-Home-Price-Prediction/issues">Report Bug</a> ·
  <a href="https://github.com/dave21-py/Bangalore-Home-Price-Prediction/issues">Request Feature</a>
</p>

---

## ✨ Overview

This project is a complete, end-to-end demonstration of a data science and web development workflow. It features a robust machine learning model trained on real-world Bangalore housing data, which is served via a **Flask API**. The front end is a modern, minimalist single-page application with a professional UI, fluid animations, and a seamless user experience.

The application allows users to input key parameters—such as square footage, number of bedrooms (BHK), bathrooms, and location—and receive an instant, AI-powered price estimation. The entire stack is deployed to **Microsoft Azure** using a **CI/CD pipeline** with **GitHub Actions**, ensuring a professional and scalable production environment.

*   **Data-Driven Predictions:** Utilizes a Linear Regression model trained and tested on a comprehensive Bangalore real estate dataset.
*   **RESTful API Backend:** A clean and efficient Flask server exposes the ML model's prediction functionality through well-defined API endpoints.
*   **Modern Front-End UI:** A responsive and visually appealing user interface built with HTML5, CSS3, and JavaScript, featuring a video background and smooth animations powered by the **GSAP library**.
*   **Automated CI/CD Deployment:** The project is configured for automated deployment to Azure App Service. Every `git push` to the `main` branch triggers a GitHub Action that builds, tests, and deploys the latest version of the application.
*   **Production-Ready Server:** The deployed application runs on a **Gunicorn WSGI server**, ensuring stability and performance under real-world traffic.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Python 3.8+
*   pip (Python package installer)
*   A web browser

### Installation & Setup

1.  **Clone the repo**
    ```bash
    git clone https://github.com/dave21-py/Bangalore-Home-Price-Prediction.git
    ```
2.  **Navigate to the project directory**
    ```bash
    cd Bangalore-Home-Price-Prediction
    ```
3.  **Create and activate a virtual environment**
    This isolates the project's dependencies from your system.
    ```bash
    # For macOS/Linux
    python3 -m venv server/venv
    source server/venv/bin/activate

    # For Windows
    python -m venv server\venv
    server\venv\Scripts\activate
    ```
4.  **Install the required Python packages**
    This command reads the `requirements.txt` file and installs all necessary libraries.
    ```bash
    pip install -r requirements.txt
    ```
5.  **Run the Flask server**
    Navigate into the `server` directory and run the application.
    ```bash
    cd server
    python server.py
    ```
6.  **View the application**
    Open your web browser and navigate to **http://127.0.0.1:5000**. You should see the fully functional web application running locally.

---

## 🛠️ Tech Stack

*   **Backend:**
    *   [Python](https://www.python.org/)
    *   [Flask](https://flask.palletsprojects.com/) (for the web server and API)
    *   [Gunicorn](https://gunicorn.org/) (for the production WSGI server)
*   **Machine Learning:**
    *   [Scikit-learn](https://scikit-learn.org/) (for building the Linear Regression model)
    *   [Pandas](https://pandas.pydata.org/) & [NumPy](https://numpy.org/) (for data cleaning and manipulation)
    *   [Jupyter Notebook](https://jupyter.org/) (for model experimentation and training)
*   **Frontend:**
    *   HTML5, CSS3, JavaScript
    *   [jQuery](https://jquery.com/) (for simplified API calls)
    *   [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) (for high-performance animations)
*   **Deployment:**
    *   [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)
    *   [GitHub Actions](https://github.com/features/actions) (for CI/CD)

---

## 📂 Folder Structure

The project is organized into a clean, professional full-stack structure:

-   `/`
    -   `requirements.txt`: Lists all Python dependencies for the project.
    -   `.github/workflows/`: Contains the CI/CD workflow configuration for automated deployment to Azure.
    -   `client/`
        -   `app.html`: The main HTML file (served as a Flask template).
        -   `app.css`: Contains all styles for the front-end application.
        -   `app.js`: Handles all front-end logic, UI animations, and API communication.
    -   `model/`
        -   `banglore_home_prices_model.ipynb`: The Jupyter Notebook containing all data cleaning, feature engineering, and model training steps.
    -   `server/`
        -   `server.py`: The core Flask application that serves the front end and provides the API endpoints.
        -   `util.py`: A helper module containing the core logic for making predictions with the loaded model.
        -   `artifacts/`: Contains the saved machine learning model (`.pickle`) and column information (`.json`) needed for predictions.

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page for this repository.
