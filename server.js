// const express = require('express')
// const app = express()
// const MongoClient = require('mongodb').MongoClient
// require('dotenv').config()
// const PORT = 7777

//Database Setup 
// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'projects' 

// MongoClient.connect(dbConnectionStr)
//     .then(client =>{
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

// //Middleware/Application Set Up
// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

//Workout API

let workout = { //AKA Express API
    'Arms': { // This is my own API I had created. This API can be seen in post man under localhost:7777/api/workout 
        muscleGroup : ['Bicep','Triceps',' Forearm'],
        muscleDescription : ['Biceps are the large muscles located in your upper arm, extending from the shoulder to just above the elbow',
                            'Triceps are the large, thick muscle locate on the side and back of th arm, typically in the arm.',
                            'The forearm is the portion of the arm that is located between the elbow and the wrist.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : [
                        ['Dumbbell Curl','Pull Up','Barbell Curl'], 
                        ['Tricep Pushdown','Tricep Dip','Tricep Kickback'], 
                        ['Hammer Curl','Reverse Grip Curl','Farmers Walk']
                    ],  
        exerciseDescription : [
                                ['A dumbbell curl is an exercise where you hold a dumbbell in each hand and lift them by bending your elbows, bringing the weights up toward your shoulders to work your biceps.',
                                'A pull-up is an exercise where you hang from a bar with your palms facing away from you and pull your body up until your chin is above the bar, mainly working your back and arm muscles.',
                                'A barbell curl is a strength exercise where you hold a barbell with both hands and lift it by bending your elbows, bringing the bar up toward your chest to work your biceps.'], 
                                ['A tricep pushdown is an exercise where you use a cable machine to push a bar or rope attachment down toward your thighs, straightening your arms to work the triceps on the back of your upper arms.',
                                'A tricep dip is an exercise where you lower and raise your body using your arms while your hands are placed on a bench, chair, or parallel bars, targeting the triceps at the back of your upper arms.',
                                'A tricep kickback is an exercise where you bend forward slightly, hold a dumbbell in each hand, and straighten your arms behind you, working the triceps at the back of your upper arms.'], 
                                ['A hammer curl is a bicep exercise where you hold dumbbells with your palms facing your body (thumbs up) and curl the weights upward, targeting both the biceps and forearms.',
                                'A reverse grip curl is a bicep and forearm exercise where you hold a barbell or dumbbells with your palms facing down (overhand grip) and curl the weight up by bending your elbows.',
                                'The farmers walk is an exercise where you hold a heavy weight in each hand, keep your back straight, and walk for a certain distance or time. It helps to strengthen your grip, core, and overall body stability.']
                            ],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Legs': {
        muscleGroup : ['Quads', 'Calves', 'Hamstrings'],
        muscleDescription : ['The quad muscle, short for quadriceps, is a group of four muscles located at the front of your thigh. These muscles work together to help you straighten your knee and are essential for walking, running, jumping, and squatting.',
                            'The calf muscle is the large muscle at the back of your lower leg. It helps you stand on your toes, walk, run, and jump. ',
                            'The hamstring muscles are a group of three muscles located at the back of your thigh. They help you bend your knee and move your leg backward. These muscles are important for walking, running, and jumping.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : [['Squat','Leg Extension','Lunge'], ['Calf Raises','Calf Press','Seated Heel Raise'], ['Leg Curl','Dead Lift','Split Squat']],
        exerciseDescription : [["A squat is an exercise where you bend your knees and lower your hips down, like you're sitting in an invisible chair, then stand back up. It works your leg muscles—especially your quads, hamstrings, glutes, and calves—and helps build strength and balance.",
                                'A leg extension is an exercise where you sit on a machine and lift your lower legs by straightening your knees. It mainly works the quadriceps (the muscles at the front of your thighs).',
                                ' lunge is an exercise where you step forward (or backward), bend both knees, and lower your body, then return to standing. It mainly works your quads, hamstrings, and glutes, and helps improve balance and strength.'], 
                                ["A calf raise is an exercise where you lift your heels off the ground so you're standing on your toes, then lower them back down. It strengthens the calf muscles at the back of your lower legs.",
                                'A calf press is an exercise where you push through the balls of your feet to lift your heels while using a leg press machine. It targets and strengthens your calf muscles, similar to a calf raise but with added weight.',
                                'A seated heel raise is an exercise where you sit down with your feet flat on the floor or on a machine, then lift your heels while keeping your toes on the ground. It targets the soleus, one of the main calf muscles.'], 
                                ['A leg curl is an exercise where you lie face down on a machine and bend your knees to bring your heels toward your glutes. It targets the hamstring muscles at the back of your thighs.',
                                'A deadlift is a strength exercise where you lift a weighted barbell (or other object) from the ground to hip level by bending at your hips and knees, then standing up straight. It works multiple muscles, including your hamstrings, glutes, lower back, and core.',
                                'A split squat is a single-leg exercise where you stand in a lunge position, lower your body by bending both knees, then return to standing. It targets the quads, hamstrings, and glutes of the front leg']
                            ],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Back':{
        muscleGroup : ['Trapezius', 'Latissimus Dorsi', 'Rhomboid'],
        muscleDescription : ['The trapezius (or traps) is a large muscle in your upper back and neck. It looks like a triangle and helps with movements like shrugging your shoulders, tilting your head, and supporting your neck and spine.',
                            'The latissimus dorsi (or lats) is a large muscle in your back, stretching from your mid and lower back up to your shoulders. It helps with movements like pulling your arms down and back, and is important for actions like rowing and pulling.',
                            'The rhomboids are two muscles located in your upper back, between your shoulder blades. They help pull your shoulder blades together and are important for posture and upper back movement.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : [['Shoulder Shrug','Face Pull','Upright Row'], ['Pull Down','Row','Straight Arm Pulldown'], ['Reverse Fly','Pull Up','Cable Row']],
        exerciseDescription : [['A shoulder shrug is an exercise where you lift your shoulders up towards your ears, hold for a moment, then lower them back down. It mainly works the trapezius muscles in your upper back and neck.',
                                'A face pull is an exercise where you pull a rope or resistance band towards your face, keeping your upper arms parallel to the ground. It targets the rear deltoids (shoulders), rhomboids, and other upper back muscles, helping improve posture and shoulder health.',
                                'An upright row is an exercise where you pull a barbell, dumbbells, or resistance band straight up towards your chin while keeping your elbows higher than your wrists. It mainly works the shoulders (especially the traps and deltoids) and can also engage the upper back.'], 
                                ['A pulldown is an exercise where you pull a bar or handle down towards your chest while sitting, using a cable machine. It primarily targets the lat muscles in your back and helps improve upper body strength.',
                                'A row is an exercise where you pull a weight towards your torso, usually while bending at the hips and keeping your back straight. It targets muscles in your back, especially the lats, rhomboids, and traps, and also engages the biceps.',
                                'A straight arm pulldown is an exercise where you pull a bar or rope down towards your thighs with your arms straight, while keeping your torso still. It primarily targets the lat muscles in your back, as well as your shoulders and core.'], 
                                ['A reverse fly is an exercise where you bend forward slightly at the hips and extend your arms out to the sides while holding weights, like dumbbells. It targets the rear deltoids (shoulders) and the muscles in your upper back, helping improve posture and shoulder strength.',
                                'A pull-up is an exercise where you hang from a bar and pull your body up until your chin is above the bar. It mainly works the muscles in your back, shoulders, and arms, especially the latissimus dorsi (lats) and biceps.',
                                'A cable row is an exercise where you pull a handle towards your torso while sitting, using a cable machine. It targets the muscles in your back, especially the lats, rhomboids, and traps, as well as your biceps.']
                            ],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    },
    'Chest':{
        muscleGroup : ['Clavicular Head', 'Sternal Head', 'Abdominal Head'],
        muscleDescription : ["The clavicular head refers to the upper portion of the pectoralis major muscle, which is located in the chest. It's the part of the chest muscle that attaches to the clavicle (collarbone).",
                            'The sternal head is the lower portion of the pectoralis major muscle in the chest. It attaches to the sternum (breastbone)',
                            'The abdominal head refers to a part of the pectoralis major muscle, specifically the lower portion that connects to the abdominal area. It plays a role in certain movements, particularly when the arms are lowered or pressed downward in exercises.'],
        muscleWorkedPic : ['PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE',
                            'PLACE IMAGE OF MUSCLE WORKED HERE'],
        exercise : [['Incline Bench Press','Cable Fly','Dip'], ['Flat Bench Press','Cable Crossover', 'Dumbell Fly'], ['Decline Bench Press','Incline Push Up','Decline Cable Fly']],
        exerciseDescription : [
                                ['An incline bench press is a variation of the traditional bench press where you lie on an incline bench and press a barbell or dumbbells upward. It primarily targets the upper chest, but also works the shoulders and triceps.',
                                'A cable fly is an exercise where you stand between two cable machines, holding the handles with your arms outstretched, then bring your arms together in front of you in a wide arc. It primarily targets the chest muscles and helps improve chest strength and definition.',
                                'A dip is an exercise where you lower your body down between two parallel bars or on a dip station, then push yourself back up. It primarily targets the triceps, but also works the chest and shoulders.'], 
                                ['A flat bench press is an exercise where you lie flat on a bench and press a barbell or dumbbells upward, extending your arms. It primarily targets the chest muscles, but also works the shoulders and triceps.',
                                'A cable crossover is an exercise where you stand between two cable machines, grab the handles, and pull them together in front of your body in a wide arc. It primarily targets the chest muscles, helping to improve chest definition and strength.',
                                'A dumbbell fly is an exercise where you lie on a flat, incline, or decline bench and hold a dumbbell in each hand. With a slight bend in your elbows, you lower the dumbbells out to the sides of your chest, then bring them back together. It primarily targets the chest muscles.'], 
                                ['A decline bench press is a variation of the bench press where you lie on a bench that is tilted downward. You press a barbell or dumbbells upward, targeting the lower chest more than the flat or incline version. It also works the shoulders and triceps.',
                                'An incline push-up is a variation of the traditional push-up where your hands are placed on an elevated surface, like a bench or step. This makes the movement easier and shifts more focus to the lower chest and shoulders, while still working the triceps and core.',
                                'A decline cable fly is an exercise where you stand between two cable machines set at a low position, holding the handles. You then bring the cables upward and together in a wide arc, mimicking the motion of a fly. This targets the lower chest more than other types of flys.']
                            ],
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
        exercise : [['Front Arm Raises', 'Military Press', 'Upright Rows'],['Arnold Press','Overhead Press','Dumbbell Laterl Raise'],['Read Delt Fly','Dumbbell Reverse Fly','Close Grip Lat Pulldown']],
        exerciseDescription : [['Front arm raises could be done with or without weight. Starting with your arms at your sides, raise them until they are parallel to the ground.',
                                'A military press involves pressing a weight from a resting position on your shoulders and pushing up to a fully extended overhead position, all while maintaining a stable and upright stance. ',
                                'An upright row is a weight training exercise where you lift a weight vertically towards your chin or collarbone, using an overhand grip, with your elbows leading the movement.'],
                                ['The Arnold press is a shoulder exercise that combines a rotation with a traditional overhead press. You start with your palms facing your shoulders, then as you press the dumbbells upward, you rotate your wrists so that your palms face forward at the top.',
                                'An overhead press is an exercise where you press a barbell or dumbbells from shoulder height to overhead, extending your arms fully. It primarily targets the deltoid muscles, but also works the triceps and upper chest.',
                                "A dumbbell lateral raise is an exercise where you hold a dumbbell in each hand and raise your arms out to the sides until they’re parallel to the ground. This targets the middle part of your deltoid muscles, helping to build shoulder width and strength."],
                                ['A rear delt fly is an exercise where you hold dumbbells or use a machine to extend your arms out to the sides while bent over, focusing on the rear deltoid muscles (the back part of your shoulders). This exercise helps strengthen the upper back and shoulders, improving posture and shoulder stability.',
                                'A dumbbell reverse fly is an exercise where you bend forward at the hips while holding a dumbbell in each hand. With a slight bend in your elbows, you raise your arms out to the sides, squeezing your shoulder blades together. This targets the rear deltoids and upper back muscles.',
                                'A closed grip lat pulldown is an exercise where you sit at a cable machine, grab a bar with your hands close together (palms facing toward you), and pull the bar down toward your chest. It primarily targets the lat muscles (lats) in your back, with a focus on the lower lats and biceps.']
                            ],
        exerciseGif : ['PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE', 'PLACE EXERCISE GIF HERE']
    }
}
console.log(workout.Arms.muscleGroup[0])
document.querySelector('h4').innerText = workout.Arms.muscleGroup[0] //THIS SHOWS BICEP
document.querySelector('p').innerText = workout.Arms.muscleDescription[0]
document.querySelector('h3').innerText = workout.Arms.muscleDescription[1]

//CRUD API 

//Setting up app to listen on port 7777
// app.listen(process.env.PORT || PORT, ()=> {
//     console.log(`Server running on port ${PORT}`)
// })