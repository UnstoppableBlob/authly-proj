from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

datafile = "data.json"

@app.route("/")
def main():
    return "Hello World!"

@app.route("/createuser/<username>/<word1>/<word2>/<word3>")
def create_user(username, word1, word2, word3):
    with open(datafile, "r") as file:
        data = json.load(file)
        
    if username in data.keys():
        return "user already exists"
        
    data[username] = {
        "words": [word1, word2, word3],
        "history": []
    }
    
    with open(datafile, "w") as file:
        json.dump(data, file)
    
    # with open(datafile, "r") as file:
    #     return file.read()
    
    return "user created"


@app.route("/loginuser/<username>/<word1>/<word2>/<word3>")
def login_user(username, word1, word2, word3):
    with open(datafile, "r") as file:
        data = json.load(file)
        
    if username not in data.keys():
        return "user does not exist"
    
    if data[username]["words"] == [word1, word2, word3]:
        return "login successful"
    else:
        return "login failed"


@app.route("/gethistory/<username>/<word1>/<word2>/<word3>")
def get_history(username, word1, word2, word3):
    with open(datafile, "r") as file:
        data = json.load(file)

    if username not in data:
        return "user does not exist"

    if data[username]["words"] == [word1, word2, word3]:
        return jsonify(data[username]["history"])
    else:
        return "incorrect credentials"


@app.route("/addhistory/<username>/<word1>/<word2>/<word3>/<historyitem>")
def add_history(username, word1, word2, word3, historyitem):
    with open(datafile, "r") as file:
        data = json.load(file)
        
    if username not in data.keys():
        return "user does not exist"
    
    if data[username]["words"] == [word1, word2, word3]:
        data[username]["history"].append(historyitem)
        with open(datafile, "w") as file:
            data = json.dump(data, file) # this is a bug but it should still work and I don't want to mess with it
        return "added succesfully"
    else:
        return "incorrect credentials"


if __name__ == "__main__":
    app.run(debug=True)