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
    'Arms': { // This is my own API I had created. This API can be seen in post man under localhost:8000/api/workout 
        muscleGroup : ['bicep', ' forearm', ' triceps'],
        muscleDescription : 'Biceps are the large muscles located in your upper arm, extending from the shoulder to just above the elbow',
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : ['Bicep Curl', 'Pull-up', 'Chin-up', 'Concentration curl', 'Bent-over row'],
        exerciseDescription : 'DESCRIPTION OF EXERCISE',
        exerciseGif : 'PLACE EXERCISE GIF HERE'
    },
    'Legs': {
        muscleGroup : ['quads', 'calves', 'hamstrings'],
        muscleDescription : ['The anterior deltoid, or front deltoid, is one of the three heads of the deltoid muscle group, located on the front of the shoulder. It helps move your arms forward.',
                            'The lateral deltoid, or side deltoid, the second head of the deltoid located right in the middle of your shoulder. It helps move your arm up and down as well as side to side.',
                            'The posterior deltoid, or rear deltoid, is located at the back of the shoulder. It contributes to shoulder stability, shoulder extension and external rotation.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : ['Front Arm Raises', 'Military Press', 'Upright Rows'],
        exerciseDescription : ['Front arm raises could be done with or without weight. Starting with your arms at your sides, raise them until they are parallel to the ground.',
                                'A military press involves pressing a weight from a resting position on your shoulders and pushing up to a fully extended overhead position, all while maintaining a stable and upright stance. ',
                                'An upright row is a weight training exercise where you lift a weight vertically towards your chin or collarbone, using an overhand grip, with your elbows leading the movement.'],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Back':{
        muscleGroup : ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid'],
        muscleDescription : ['The anterior deltoid, or front deltoid, is one of the three heads of the deltoid muscle group, located on the front of the shoulder. It helps move your arms forward.',
                            'The lateral deltoid, or side deltoid, the second head of the deltoid located right in the middle of your shoulder. It helps move your arm up and down as well as side to side.',
                            'The posterior deltoid, or rear deltoid, is located at the back of the shoulder. It contributes to shoulder stability, shoulder extension and external rotation.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : ['Front Arm Raises', 'Military Press', 'Upright Rows'],
        exerciseDescription : ['Front arm raises could be done with or without weight. Starting with your arms at your sides, raise them until they are parallel to the ground.',
                                'A military press involves pressing a weight from a resting position on your shoulders and pushing up to a fully extended overhead position, all while maintaining a stable and upright stance. ',
                                'An upright row is a weight training exercise where you lift a weight vertically towards your chin or collarbone, using an overhand grip, with your elbows leading the movement.'],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Chest':{
        muscleGroup : ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid'],
        muscleDescription : ['The anterior deltoid, or front deltoid, is one of the three heads of the deltoid muscle group, located on the front of the shoulder. It helps move your arms forward.',
                            'The lateral deltoid, or side deltoid, the second head of the deltoid located right in the middle of your shoulder. It helps move your arm up and down as well as side to side.',
                            'The posterior deltoid, or rear deltoid, is located at the back of the shoulder. It contributes to shoulder stability, shoulder extension and external rotation.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : ['Front Arm Raises', 'Military Press', 'Upright Rows'],
        exerciseDescription : ['Front arm raises could be done with or without weight. Starting with your arms at your sides, raise them until they are parallel to the ground.',
                                'A military press involves pressing a weight from a resting position on your shoulders and pushing up to a fully extended overhead position, all while maintaining a stable and upright stance. ',
                                'An upright row is a weight training exercise where you lift a weight vertically towards your chin or collarbone, using an overhand grip, with your elbows leading the movement.'],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Shoulders':{
        muscleGroup : ['Anterior Deltoid', 'Lateral Deltoid', 'Posterior Deltoid'],
        muscleDescription : ['The anterior deltoid, or front deltoid, is one of the three heads of the deltoid muscle group, located on the front of the shoulder. It helps move your arms forward.',
                            'The lateral deltoid, or side deltoid, the second head of the deltoid located right in the middle of your shoulder. It helps move your arm up and down as well as side to side.',
                            'The posterior deltoid, or rear deltoid, is located at the back of the shoulder. It contributes to shoulder stability, shoulder extension and external rotation.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : ['Front Arm Raises', 'Military Press', 'Upright Rows'],
        exerciseDescription : ['Front arm raises could be done with or without weight. Starting with your arms at your sides, raise them until they are parallel to the ground.',
                                'A military press involves pressing a weight from a resting position on your shoulders and pushing up to a fully extended overhead position, all while maintaining a stable and upright stance. ',
                                'An upright row is a weight training exercise where you lift a weight vertically towards your chin or collarbone, using an overhand grip, with your elbows leading the movement.'],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    }
}

//CRUD API 

//Setting up app to listen on port 7777
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})