import os
from flask import Flask, render_template, request, redirect, jsonify, flash
from flask import url_for, flash
from flask_compress import Compress

from flask_mail import Mail, Message

# MAIL_PASS = os.environ['MAIL_PASSWORD']

app = Flask(__name__)
# app.secret_key = 'skjdfajsldkjfask'
# mail = Mail(app)


app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'kvncare007@gmail.com'
# app.config['MAIL_PASSWORD'] = MAIL_PASS
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# mail = Mail(app)
Compress(app)


@app.route("/",methods=['GET'])
def index():
    return render_template("index.html")

@app.route("/events")
def event_page():
    return render_template("events.html")

@app.route("/", methods=['POST'])
def contact_page():
    if request.method == 'POST':
        info = 'Name: {0}\nEmail: {1}\nMobile Number:{2}\nQuery:{3}'.format(request.form['name'],request.form['email'],request.form['mobile'],request.form['query'])
        msg = Message('Query', sender='kvncare007@gmail.com',recipients=['sparsh2k18.nitsurat@gmail.com'])
        msg.body = info
        # mail.send(msg)
        flash('Your query is submitted successfully.')
        return redirect(url_for('index'))


@app.route("/web-team",methods = ['GET'])
def webteam_page():
    return render_template("webteam.html")

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000)
