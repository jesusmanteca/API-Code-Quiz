// **********************************************
// **connecting a variable to an object on html**
// **********************************************

// * connecting to the start button
var startButtonEl = document.querySelector("#startButton");

// connecting to the quiz container
var quizDivEl = document.querySelector("#quiz");

// connecting to the welcome container
var welcomeContainerEl = document.querySelector("#welcomeContainer");

// * connecting to the results screen div
var resultsDivEl = document.querySelector("#resultsDiv");

// connecting to timer in quiz
var timerEl = document.querySelector("#timer");

var answerBtnA = document.querySelector("answerBtnA")
var answerBtnB = document.querySelector("answerBtnB")
var answerBtnC = document.querySelector("answerBtnC")
var answerBtnD = document.querySelector("answerBtnD")

// **********************************************
// ************* initializing values ************
// **********************************************

// giving the timer an initial value, a starting point
var timer = 25;

// quiz section
var quizContent = [
    {
       question: "What is javascript?",
        correctAnswer: [
            "A programming language."
        ],
        possibleAnswers: [
            "A cup of coffee.", 
            "A type of play.",
            "A vibe.",
        ]
    },
    {
        question: "What is css?",
        correctAnswer: [
            "A programming language."
        ],
        possibleAnswers: [
            "A cup of coffee, duh brah.", 
            "A type of play.",
            "A vibe.",
        ]
    }
]


console.log(quizContent[1].possibleAnswers[0])

// **********************************************
// *********** initializing functions ***********
// **********************************************

// the quiz ends: choices div dissappears and the results appear
var endQuiz = function () {

    // ending the quiz will make the quiz div disappear and make the results div appear
    quizDivEl.style.display = "none";
    resultsDivEl.style.display = "initial";

    // ending the quiz also stops and records timer
    clearInterval(timerId);
};



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
                endQuiz();
            }
        },
        // second argument: how often to run this function above? in this case, once every 1000ms or 1 sec
        1000
    )
}

// accesss the start button so that the welcome message goes away and the quiz appears and you can begin to take it
var startQuiz = function () {
    // changed the property of the display to show the quiz Div
    quizDivEl.style.display = "initial";
    // change the property of the welcome display to hide (none)
    welcomeContainerEl.style.display = "none";

    console.log("The Quiz has begun.");
    startTimer();

}

// **********************************************
// ************* initializing Quiz **************
// **********************************************

//adding an eventListener to the start button so that when it's clicked, it does something, in this case, it runs the function "startQuiz". Don't open or close the () if the function called is in an existing accessible variable. It's implied. 
startButtonEl.addEventListener(
    "click",
    startQuiz
);


    //once all questions are answered, make the #submit div appear



// timer begin
// questions: list of questions in an array
// question, choices, answer
// question array with object with question, choices, and answer



