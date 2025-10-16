# 1. Import 'render_template' in addition to the others
from flask import Flask, request, jsonify, render_template
import util

# 2. Tell Flask where your website files are (the 'client' folder)
#    Since 'server.py' is in the 'server' folder, '../client' goes up one level
#    and then into the 'client' folder.
app = Flask(__name__, template_folder="../client", static_folder="../client")


# 3. Add a new route to serve the app.html file on the main URL
@app.route("/")
def home():
    return render_template("app.html")


# --- Your existing API routes are perfect, no changes needed here ---
@app.route("/get_location_names", methods=["GET"])
def get_location_names():
    response = jsonify({"locations": util.get_location_names()})
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


@app.route("/predict_home_price", methods=["GET", "POST"])
def predict_home_price():
    total_sqft = float(request.form["total_sqft"])
    location = request.form["location"]
    bhk = int(request.form["bhk"])
    bath = int(request.form["bath"])

    response = jsonify(
        {"estimated_price": util.get_estimated_price(location, total_sqft, bhk, bath)}
    )
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()
