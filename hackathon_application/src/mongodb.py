import os
# from dotenv import load_dotenv
from pymongo import MongoClient
import sys 

class Data:
        
    def __init__(self):
        # load_dotenv()
        self.client = MongoClient("mongodb+srv://<username>:<password>@cluster0.dyy6gju.mongodb.net/?retryWrites=true&w=majority")
        # uncomment to make sure your connection is working 
        # print(self.client.get_database)

    @property
    def reports(self):
        return self.client.reports.user_reports

# print(Data().reports.insert_one({'location': 'Menlo Park'}))