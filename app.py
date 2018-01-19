from flask import Flask, flash, redirect, render_template, request, session, abort, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("main.html")

@app.route("/events")
def hello():
    return render_template("events.html")

@app.route("/sponser")
def sponser_page():
    return render_template("sponser.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
