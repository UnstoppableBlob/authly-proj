from flask import Flask
import json

app = Flask(__name__)

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
        "pastqrs": []
    }
    
    with open(datafile, "w") as file:
        json.dump(data, file)
    
    # with open(datafile, "r") as file:
    #     return file.read()
    
    return "user created"


    
if __name__ == "__main__":
    app.run(debug=True)