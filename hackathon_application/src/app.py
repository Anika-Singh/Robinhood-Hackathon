from flask import Flask, Response, request
from mongodb import Data
from bson import json_util
from flask_cors import CORS
import collections
import pandas as pd

app = Flask(__name__)
CORS(app)

def jsonify(response : dict) -> Response:
    return Response(
        json_util.dumps(response),
        mimetype='application/json'
    )

@app.route("/results", methods=["GET", "POST"])
def set_answers():
    if request.method == "POST":
        args = request.get_json(force = True)
        types = args['types']

        result_dict = {
            'types': types,
        }
        Data().reports.insert_one(result_dict)

    return {}