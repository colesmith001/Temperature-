console.log("Functions");

// create function

function login(){
    console.log("welcome to the system");
    // code for login block
}
// call/trigger/run/execute/use fn
login();
// on the code, on the console, as users

// 
function logout(user){
    console.log(`Goodbye ${user}`)
}
logout("cole");
logout("courtney");
logout("Tim");

// example 3 function with 2 perameters

function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of exam is: ${totalPoints}`);
}
gradeExam("cole",15,0.44)
gradeExam("courtney",11,0.44)
gradeExam("tim",12,0.44)

// Challenge 1: 
// task: 
// Create a function called `doubleScore` that takes one number (the player's score).
// The function should display the score multiplied by 2. (console)
function doubleScore(score){
    let points = score * 2;
    console.log(points);
}
doubleScore(10)