var question = 0;
var listOfQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        multipleChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    }, {
        question: "The condition in an if/else statement is enclosed within ________.",
        multipleChoice: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    }, {
        question: "Arrays in JavaScript can be used to store ________.",
        multipleChoice: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    }, {
        question: "String values must be enclosed within ________ when being assigned to variances.",
        multipleChoice: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "4. parentheses"

    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        multipleChoice: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];

var questionText = document.querySelector(".questionText");
var timerEl = document.querySelector(".timer");
var timer = document.querySelector("#secondsLeft");
var startBtn = document.querySelector("#buttonStart");
var submit_btn = document.querySelector("#submit_btn");
var viewHighscoreBtn = document.querySelector(".highscore_pg");
var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

var quizPage = document.querySelector(".quizFramework");
var infoPage = document.querySelector(".challenge");
var highscorePage = document.querySelector(".highscorePage");
var initialPage = document.querySelector(".initialPage");

var check = document.querySelector(".answer");
var userInitials = document.querySelector("#userInitials");

let scoreData = JSON.parse(localStorage.getItem("score"));

var correct = 0;
var userChoice;
let finalScore = 0;
var secondsLeft = 75;

startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    setTimer();
    startQuiz();
});

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (question === 4 || secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};

function startQuiz() {
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
};

function checkAnswer(event) {
    if (event.target.innerHTML === listOfQuestions[question].answer) {
        correct++;
        check.style.display = "block";
        check.textContent = "Correct! :)";
        nextQuestion();
    } else {
        check.style.display = "block";
        check.textContent = "Incorrect! :(";
        secondsLeft -=10;
        nextQuestion();
    };
};

function nextQuestion() {
    if (question < 4) {
        var btn1 = document.querySelector("#button1");
        var btn2 = document.querySelector("#button2");
        var btn3 = document.querySelector("#button3");
        var btn4 = document.querySelector("#button4");

        quizPage.style.display = "block";
        btn1.style.display = "block";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn4.style.display = "block";

        question++;
        questionText.textContent = listOfQuestions[question].question;
        btn1.textContent = listOfQuestions[question].multipleChoice[0];
        btn2.textContent = listOfQuestions[question].multipleChoice[1];
        btn3.textContent = listOfQuestions[question].multipleChoice[2];
        btn4.textContent = listOfQuestions[question].multipleChoice[3];
    } else {
        finalScore = secondsLeft;
        quizPage.style.display = "none";
        initialPage.style.display = "block";

        var score_para = document.querySelector("#user_score");
        score_para.textContent = `Your final score is ${finalScore}.`

        submit_btn.addEventListener("click", function (event) {
            var username = document.getElementById("user_initials").value;
            save_localStorage(username);
        })
    };

    function save_localStorage(username) {
        var user_score_details = {
            username: username,
            score: finalScore
        }
        if (scoreData === null) {
            scoreData = [];
            scoreData.push(user_score_details);
        } else {
            scoreData.push(user_score_details);
        };

        localStorage.setItem("score", JSON.stringify(scoreData));

        highscore();
    };

    function highscore() {
        document.getElementsByClassName("initialPage")[0].style.display = "none";
        infoPage.style.display = "none";
        highscorePage.style.display = "block";
        var ol = document.createElement("ol");
        ol.style.listStyleType = "none";

        for (let i = 0; i < scoreData.length; i++) {
            var li_div = document.createElement("div");
            li_div.style.display = "flex";
            var name_li = document.createElement("li");
            name_li.textContent = scoreData[i].username;
            var score_li = document.createElement("li");
            score_li.textContent = scoreData[i].score; 

            li_div.append(name_li, score_li);
            ol.append(li_div);
        };

        document.getElementById("final_scores").append(ol);

        clearBtn.addEventListener("click", function(event){
            ol.remove();
            localStorage.clear(scoreData);
        });
    };

    viewHighscoreBtn.addEventListener("click", function(event) {
        highscorePage.style.display = "block";
        infoPage.style.display = "none";
    });
};
