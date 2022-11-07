//questions
var question = -1;
var listOfQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        multipleChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },{
        question: "The condition in an if/else statement is enclosed within ________.",
        multipleChoice: ["1. quotes", "2. curly brackets", "parentheses", "square brackets"],
        answer: "3. parentheses"
    },{
        question: "Arrays in JavaScript can be used to store ________.",
        multipleChoice: ["1. numbers and strings", "2. other arrays", "booleans", "all of the above"],
        answer: "4. all of the above"
    },{
        question: "String values must be enclosed within ________ when being assigned to variances.",
        multipleChoice: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "4. parentheses"

    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        multipleChoice: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
]

var questionText = document.querySelector(".questionText");
var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");
var btn3 = document.querySelector("#button3");
var btn4 = document.querySelector("#button4");

var timerEl = document.querySelector(".timer");
var timer = document.querySelector("#secondsLeft");

function setTimer(){
    var secondsLeft = 76;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
    startQuiz();
}
console.log(secondsLeft);

function startQuiz(){
    quizPage.style.display = "block";
    infoPage.style.display = "none";
    highscorePage.style.display = "none";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    // gameOverPage.style.display = "none";

    question++;
    questionText.textContent = listOfQuestions[question].question;
    btn1.textContent = listOfQuestions[question].multipleChoice[0];
    btn2.textContent = listOfQuestions[question].multipleChoice[1];
    btn3.textContent = listOfQuestions[question].multipleChoice[2];
    btn4.textContent = listOfQuestions[question].multipleChoice[3];
}

var check = document.querySelector(".answer");
var correct = 0;
var incorrect = 0;

function checkAnswer(){
    if (listOfQuestions[question].answer === listOfQuestions[question].multipleChoice){
        correct++;
        check.style.display = "block";
        check.textContent = "Correct! :)";
    } else {
        incorrect++;
        check.style.display = "block";
        check.textContent = "Incorrect! :(";
    }
    nextQuestion();
}

function nextQuestion(){
    quizPage.style.display = "block";
    infoPage.style.display = "none";
    highscorePage.style.display = "none";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";

    question ++;
    questionText.textContent = listOfQuestions[question].question;
    btn1.textContent = listOfQuestions[question].multipleChoice[0];
    btn2.textContent = listOfQuestions[question].multipleChoice[1];
    btn3.textContent = listOfQuestions[question].multipleChoice[2];
    btn4.textContent = listOfQuestions[question].multipleChoice[3];
}

var questionContainer = document.querySelector(".questionContainer");
var answerContainer = document.querySelector(".answerContainer");
var userContainer = document.querySelector("#userContainer");

var quizPage = document.querySelector(".quizFramework");
var infoPage = document.querySelector(".challenge");
var highscorePage = document.querySelector(".highscorePage");
var startBtn = document.querySelector("#buttonStart");
var highscore = document.querySelector(".highscore");

//tell the user if the answer was correct or not
//add or subtract time accordingly
//save user's answer in storage
//once clicked on answer, move to next question
//game over page

var endPage = document.querySelector(".finish");
var endOfGame = document.querySelector(".done");

function gameOver(){
    endPage.style.display = "block";
    infoPage.style.display = "none";

    clearInterval(timerInterval);
    endOfGame.textContent = "Game Over"
}

function enterName(){

}

startBtn.addEventListener("click", function(){
    setTimer();
});

btn1.addEventListener("click", function(){
    checkAnswer();
})

btn2.addEventListener("click", function(){
    checkAnswer();
})

btn3.addEventListener("click", function(){
    checkAnswer();
})

btn4.addEventListener("click", function(){
    checkAnswer();
})

highscore.addEventListener("click", function(){
    highscorePage.style.display = "block";
    timer.style.display = "none";
    infoPage.style.display = "none";
    quizPage.style.display = "none";
    highscore.style.display = "none";
    endPage.style.display = "none";
    //shows previous user's scores, etc.
})