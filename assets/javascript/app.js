$(document).ready();

// we have to create a count variable that itterates every time a question gets renderd. So we can set a score.

var questionArray = [
  {
    question: "What is a string?",
    choices: [
      "a number",
      "a list of items",
      "a sequence of characters used for text"
    ]
  },
  {
    question: "What is a not a boolean state?",
    choices: ["True", "False", "Maybe"]
  },
  {
    question: "How many strings can there be inside of an array?",
    choices: ["200", "1000", "infinite"]
  },
  {
    question: "How much?",
    choices: ["a flower", "a stone"]
  }
];

// Globally initialized variables
var intervalId;
var clockRunning = false;
var time = 0;

// A random number to itterate the questions through
// learn how to build a randomizer for the entire array
var randomQuestion = Math.floor(Math.random() * questionArray.length);
console.log("I'm random question number", randomQuestion);

console.log("this is the questions array", questionArray[0].choices);

// I'm using the randomized number to itterate through the questions array
var question = $("<h2>").text(questionArray[randomQuestion].question);
for (let i = 0; i < questionArray.length; i++) {
  var answers = $("<p>");
  answers.addClass("option");
  var checker = questionArray[randomQuestion].choices[i];
  console.log(checker);
  answers.append(checker);
}

var count = 0;
// var time = 3000;
// function timer() {
//   count++;
//   // count increments everytime the timer starts.
//   // There are 5 rounds to every game

//   // I have to build the timer inside of this that has a stopwatch
//   $("#timer").text("00:30");

//   setInterval();
// }

// if (time === 0) {
//   timer();
// }
// // this will run when the 5 games have been played
// // if(count === 5){
// //   $("#gameOver").show()
// // }

// console.log("I am something", questionArray);

$("#start").on("click", function() {
  $("#startscreen").hide();
  $("#questionscreen").show();
  $("#question").append(question, answers);
  // timer();
});

// Here we have to build a timer that has a set minute count. Its build into a function so it can be called back everytime the timer runs out
