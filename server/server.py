# Import the new CORS library along with the others
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import util

app = Flask(__name__, template_folder="../client", static_folder="../client")

# --- THE FIX ---
# Apply CORS to your app. This will allow your website to make
# requests to your API routes from the browser.
CORS(app)


# The rest of your file remains exactly the same.
@app.route("/")
def home():
    return render_template("app.html")


@app.route("/get_location_names", methods=["GET"])
def get_location_names():
    response = jsonify({"locations": util.get_location_names()})
    # You no longer need to add headers manually, CORS handles it.
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route("/predict_home_price", methods=["POST"])
def predict_home_price():
    total_sqft = float(request.form["total_sqft"])
    location = request.form["location"]
    bhk = int(request.form["bhk"])
    bath = int(request.form["bath"])

    response = jsonify(
        {"estimated_price": util.get_estimated_price(location, total_sqft, bhk, bath)}
    )
    # You no longer need to add headers manually, CORS handles it.
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()
