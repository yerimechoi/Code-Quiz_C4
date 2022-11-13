var question = 0;
var listOfQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        multipleChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },{
        question: "The condition in an if/else statement is enclosed within ________.",
        multipleChoice: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },{
        question: "Arrays in JavaScript can be used to store ________.",
        multipleChoice: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
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
var timerEl = document.querySelector(".timer");
var timer = document.querySelector("#secondsLeft");
var startBtn = document.querySelector("#buttonStart");

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    setTimer();
    startQuiz();
});

var secondsLeft = 75;
function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(question === 4 || secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
}

function startQuiz(){
    var btn1 = document.querySelector("#button1");
    var btn2 = document.querySelector("#button2");
    var btn3 = document.querySelector("#button3");
    var btn4 = document.querySelector("#button4");

    quizPage.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    infoPage.style.display = "none";

    questionText.innerHTML = listOfQuestions[question].question;
    btn1.textContent = listOfQuestions[question].multipleChoice[0];
    btn2.textContent = listOfQuestions[question].multipleChoice[1];
    btn3.textContent = listOfQuestions[question].multipleChoice[2];
    btn4.textContent = listOfQuestions[question].multipleChoice[3];
}

var check = document.querySelector(".answer");
var correct = 0;
var userChoice;
var userInitials = document.querySelector("#userInitials");
let finalScore = 0;

function checkAnswer(event){
    if (event.target.innerHTML === listOfQuestions[question].answer){
        correct++;
        check.style.display = "block";
        check.textContent = "Correct! :)";
        nextQuestion();
    } else {
        check.style.display = "block";
        check.textContent = "Incorrect! :(";
        nextQuestion();
    }
}

function nextQuestion(){
    console.log(question);

    if (question < 4){
        var btn1 = document.querySelector("#button1");
        var btn2 = document.querySelector("#button2");
        var btn3 = document.querySelector("#button3");
        var btn4 = document.querySelector("#button4");

        quizPage.style.display = "block";
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
    } else {
        finalScore = secondsLeft;
        quizPage.style.display = "none";
        var initialPage = document.querySelector(".initialPage");
        console.log(initialPage);
        initialPage.style.display = "block";
        let score_para = document.createElement("h3");
        score_para.textContent = `Your final score is ${finalScore}.`
        let parentDiv = document.createElement("div");
        parentDiv.style.display = "flex";
        let initial_para = document.createElement("p");
        initial_para.textContent = `Enter initials: `;
        let initial_input = document.createElement("input");
        initial_input.setAttribute("id", "user_initials");
        let save_btn = document.createElement("button");
        save_btn.setAttribute("id", "save_btn");
        save_btn.textContent = "Submit";
        save_btn.addEventListener("click", function(event){
            console.log(event.target);
            console.log(document.getElementById("user_initials").value);
        })
        parentDiv.append(initial_para, initial_input, save_btn);
        initialPage.append(score_para, parentDiv);
    }
}

var quizPage = document.querySelector(".quizFramework");
var infoPage = document.querySelector(".challenge");
var highscorePage = document.querySelector(".highscorePage");
var highscore = document.querySelector(".highscore");

//add or subtract time accordingly
//save user's answer in storage
//once clicked on answer, move to next question
//game over page


var count = document.querySelector(".count");



highscore.addEventListener("click", function(){
    highscorePage.style.display = "block";
    timer.style.display = "none";
    infoPage.style.display = "none";
    quizPage.style.display = "none";
    highscore.style.display = "none";
    endPage.style.display = "none";
    //shows previous user's scores, etc.
})