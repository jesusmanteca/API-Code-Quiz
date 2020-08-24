function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// giving the timer an initial value, a starting point
var timer = 60;


 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Results</h1>";
    var finalScore = (quiz.score + 1)
    gameOverHTML += "<h2 id='score'> Your score: " + finalScore + " of " + questions.length +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What does Hyper Text Markup Language Stand for?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "Bootstrap"], "CSS"),
    new Question("CSS stands for?", ["Cascading Style Sheet", "Computer Series Style","Code Sheet Style", "Clear Style Syntax"], "Cascading Style Sheet"),
    new Question( "How would you call the object's startup method?",  ["computer.startUp","computerStart.up()", "computer.startUp()", "computer['startUp']"], "computer.startup()"),
    new Question("What is the HTML tag under which one can write the JavaScript code?", ["javascript", "scripted","script","js"], "computer.startup()"),
    new Question("What is the correct syntax for referring to an external script called 'bootcamp.js'?", ["script src='bootcamps.js'", "script href='bootcamps.js'", "script ref='bootcamps.js'","script name='bootcamps.js'",], "script src='bootcamps.js'"),
    new Question("Which built-in method removes the last element from an array and returns that element?", ["last()", "get()", "pop()", "None of these"], "pop()"),
    new Question ("Which of the following code creates an object?", ["var book = Object()", "var book = new Object()", "var book = new OBJECT()", "var book = new Book()"], "var book = new Object()"), 
    new Question ("Which of the following function of Number object returns a string value version of the current number?", ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],),
    new Question ("Which of the following function of String object returns the characters in a string between two indexes into the string?", ["splice()", "split()", "substr()", "substring()"], "substring()")
];
 
var timerEl = document.querySelector("#timer")
 // establishing what a timer does and having it in ready variable form to be called. This will be called in the startQuiz function once the user clicks the button
var startTimer = function () {
    timerId = setInterval(
        // first argument is a function that says, I'm going to do this every... (second argument) ... until instructed otherwise
        function () {
            // first, decrease timer by one
            // when it gets to zero clear the inverval in the variable(this)
            timer--;

            // change the property of the #timer to display what's in the js variable timer
            timerEl.textContent = timer

            // stop the timer at zero
            if (timer === 0) {
                clearInterval(timerId);
                quiz.isEnded();
                showScores();
            }

        },
        // second argument: how often to run this function above? in this case, once every 1000ms or 1 sec
        1000
    )
}

startTimer()
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();