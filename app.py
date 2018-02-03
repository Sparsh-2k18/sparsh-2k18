# app.py
"""Python script for server implementation."""
import os
from flask import Flask, render_template, request, redirect, jsonify
from flask import url_for, flash
from flask_compress import Compress

from flask_mail import Mail, Message

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
mail = Mail(app)


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'kvnamipara@gmail.com'
app.config['MAIL_PASSWORD'] = '*****'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)
Compress(app)


@app.route("/")
def index():
    return render_template("main.html")


@app.route("/index")
def single_page():
    return render_template("index.html")


@app.route("/events")
def event_page():
    return render_template("new_events.html")


@app.route("/sponsor")
def sponsor_page():
    return render_template("sponsor.html")


@app.route("/about")
def about_page():
    return render_template("about.html")


@app.route("/winter", methods=['POST'])
def contact_page():
    if request.method == 'POST':
        newContact = Contact(name=request.form['name'],
                             email=request.form['email'],
                             mobile=request.form['mobile'],
                             query=request.form['query'])
        # session.add(newContact)
        # session.commit()
        info = '{0} {1} {2} {3}'.format(request.form['name'],request.form['email'],request.form['mobile'],request.form['query'])
        msg = Message('Query', sender='kvncare007@gmail.com',recipients=['kvnamipara@gmail.com'])
        msg.body = info
        mail.send(msg)
        return redirect(url_for('winter_page'))
    else:
        return render_template("royal.html")


@app.route("/winter",methods = ['GET'])
def winter_page():
    return render_template("royal.html")

@app.route("/rulebook",methods = ['GET'])
def rulebook_page():
    return render_template("rulebook.html")

@app.route("/web-team",methods = ['GET'])
def webteam_page():
    return render_template("webteam.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
