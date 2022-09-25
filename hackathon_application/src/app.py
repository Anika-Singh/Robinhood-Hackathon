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

@app.route("/user_reports", methods=["GET", "POST"])
def set_answers():
    if request.method == "POST":
        args = request.get_json(force = True)
        location = args['location']
        category = args['category']
        description = args['description']
        print('location', location)
        print('category', category)
        print('description', description)

        result_dict = {
            'location': location,
            'category': category,
            'description': description
        }
        Data().reports.insert_one(result_dict)

    return {}


@app.route("/feed", methods=["GET", "POST"])
def get_feed():
    if request.method == "GET":
        cursor = Data().reports.find({})
        projects = []
        for document in cursor:
            projects.append(document)
    print(projects)
    return jsonify(projects)
        # args = request.get_json(force = True)
        # location = args['location']
        # category = args['category']
        # description = args['description']
        # description = args['title']
        # print('location', location)
        # print('category', category)
        # print('description', description)

        # result_dict = {
        #     'location': location,
        #     'category': category,
        #     'description': description,
        #     'title': title
        # }

    # return result_dict

if __name__ == "__main__":
    app.run(host="0.0.0.0")