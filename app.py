# app.py
"""Python script for server implementation."""

from flask import Flask, render_template, request, redirect, jsonify
from flask import url_for, flash
from flask_compress import Compress

from sqlalchemy import create_engine, asc, func
from sqlalchemy.orm import sessionmaker
from database.database_setup import Base, Contact
from database.config import get_database_uri

# Connect to Database and create database session
engine = create_engine(get_database_uri())
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

app = Flask(__name__)
Compress(app)


@app.route("/")
def index():
    return render_template("main.html")


@app.route("/index")
def single_page():
    return render_template("new_index.html")


@app.route("/events")
def event_page():
    return render_template("events.html")


@app.route("/sponsor")
def sponsor_page():
    return render_template("sponsor.html")


@app.route("/about")
def about_page():
    return render_template("about.html")


@app.route("/contact", methods=['GET', 'POST'])
def contact_page():
    if request.method == 'POST':
        newContact = Contact(name=request.form['name'],
                             email=request.form['email'],
                             mobile=request.form['mobile'],
                             query=request.form['query'])
        session.add(newContact)
        session.commit()
        return redirect(url_for('contact_page'))
    else:
        return render_template("contact.html")


@app.route("/winter")
def winter_page():
    return render_template("royal.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
