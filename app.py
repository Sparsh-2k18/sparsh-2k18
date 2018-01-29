from flask import Flask, flash, redirect, render_template, request, session, abort, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("main.html")

@app.route("/index")
def single_page():
    return render_template("index.html")

@app.route("/events")
def event_page():
    return render_template("new_events.html")

@app.route("/detail")
def detail_page():
    return render_template("detail.html")

@app.route("/sponsor")
def sponsor_page():
    return render_template("sponsor.html")

@app.route("/about")
def about_page():
    return render_template("about.html")

@app.route("/contact")
def contact_page():
    return render_template("contact.html")

@app.route("/winter")
def winter_page():
    return render_template("royal.html")

@app.route("/event_demo")
def event__page():
    return render_template("event_demo.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
