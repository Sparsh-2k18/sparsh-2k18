from flask import Flask, flash, redirect, render_template, request, session, abort

app = Flask(__name__)

@app.route("/")
def index():
    return "Flask App!"

@app.route("/hello")
def hello(name):
    return "Hello World!"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
