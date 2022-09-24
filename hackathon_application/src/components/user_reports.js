import React, { useState } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css"
Survey.StylesManager.applyTheme("modern");


export default function Reporting(props)  {
        const json = {
            "title": "User Report",
            "logoPosition": "right",
            "completedHtml": "<h3>Thanks for Reporting!</h3><h5>Thanks for reporting this issue/event</h5>",
            "pages": [
             {
              "name": "page1",
              "elements": [
               {
                "type": "text",
                "name": "location",
                "title": "Please Enter the Location of Your Report"
               },
               {
                "type": "dropdown",
                "name": "category",
                "title": "Report Category",
                "choices": [
                 {
                  "value": "Air Pollution",
                  "text": "Air Pollution"
                 },
                 {
                  "value": "Trash",
                  "text": "Trash"
                 },
                 {
                  "value": "Chemical Exposure",
                  "text": "Chemical Exposure"
                 },
                 {
                  "value": "Recycling Zone",
                  "text": "Recycling Zone"
                 }
                ]
               },
               {
                "type": "text",
                "name": "description",
                "title": "Description"
               },
               {
                "type": "file",
                "name": "question4",
                "title": "Upload Image"
               }
              ]
             }
            ],
            "showQuestionNumbers": "off"
           }

const [location, setLocation] = useState("")
const [category, setCategory] = useState("")
const [description, setDescription] = useState("")


var surveyValueChanged = function (sender, options) {
    console.log(survey.data)
    setLocation(survey.data['location'])
    setCategory(survey.data['category'])
    setDescription(survey.data['description'])
    myAsyncFunction('http://127.0.0.1:5000/user_reports', survey.data['location'], survey.data['category'], survey.data['description'], "POST")
};

let myAsyncFunction = async (url, location, category, description) => {
    console.log(category)
    let dict = {
      method : "POST",
      mode: 'cors',
      body : JSON.stringify({
        location: location,
        category: category,
        description: description,
      })
    }
    let response = await fetch(url, dict)
}


const survey = new Survey.Model(json);

        return (
            <Survey.Survey
                model={survey}
                onComplete={surveyValueChanged}
            />
        );
    }