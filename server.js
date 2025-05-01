const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 7777

//Database Setup 
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'projects' 

MongoClient.connect(dbConnectionStr)
    .then(client =>{
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

//Middleware/Application Set Up
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Workout API

let workout = { //AKA Express API
    'arm': { // This is my own API I had created. This API can be seen in post man under localhost:8000/api/workout 
        muscleGroup : ['bicep', ' forearm', ' triceps'],
        exercise : ['Bicep Curl', 'Pull-up', 'Chin-up', 'Concentration curl', 'Bent-over row'],
        description : 'Biceps are the large muscles located in your upper arm, extending from the shoulder to just above the elbow'
    },
    'leg': {
        muscleGroup : ['quads', 'calves', 'hamstrings'],
        exercise : ['Leg Extensions', 'Calf Raises', 'Squats'],
        description : 'The quads are a group of five muscles located in your upper leg at the fron of your thigh.'
    },'unknown': {
        muscleGroup : ['unknown','unknown'],
        exercise : 'unknownwww',
        description : 'I am unknown'
    }
}

//CRUD API 

//Setting up app to listen on port 7777
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})