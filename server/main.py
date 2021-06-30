import time
from random import randint
from flask import Flask

app = Flask(__name__)


@app.route('/now')
def get_time():
    return {'now': time.time()}


@app.route('/rnd')
def get_rand():
    return {'rnd': randint(1, 100)}
