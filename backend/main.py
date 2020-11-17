from flask import Flask, request
app = Flask("__main__")


@app.route("/")
def index():
    if request.method == "GET":
        return "Hello World, this is a GET request"
    else:
        return "Hello World, this isn't a GET request"
