from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

print("🔥 APP.PY STARTED 🔥")

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["marketminds"]
users_collection = db["users"]

@app.route("/")
def home():
    return jsonify({"status": "Flask running"})

# 🔥 TEST INSERT ROUTE
@app.route("/test-insert")
def test_insert():
    users_collection.insert_one({
        "username": "testuser",
        "email": "test@gmail.com",
        "password_hash": "dummy"
    })
    return "Inserted"

if __name__ == "__main__":
    app.run(debug=True)
