$(document).ready();

// this is the questions array, this holds all the questions and choices for the game
var questionArray = [
  {
    question: "What is the capital of Burkina Faso?",
    choices: ["Bloemfontein", "Ouagadougou", "Gitega", "Cape Town"],
    validAnswer: 1
  },
  {
    question: "What country is a neighbouring country to Thailand?",
    choices: ["China", "Vietnam", "Brunei"],
    validAnswer: 1
  },
  {
    question: "What is the capital of Ecuador?",
    choices: ["Bogota", "Caracas", "Quito"],
    validAnswer: 2
  },
  {
    question: "What country did Colombus think he was travelling to?",
    choices: ["America", "India", "Indonesia"],
    validAnswer: 1
  },
  {
    question:
      "Which of these is not a neighbouring country to The Netherlands?",
    choices: ["Belgium", "France", "Germany"],
    validAnswer: 1
  },
  {
    question: "In what country does the meridian start?",
    choices: ["France", "Spain", "England"],
    validAnswer: 2
  },
  {
    question: "What is the capital of Bulgaria?",
    choices: ["Sofia", "Boekarest", "Skopje"],
    validAnswer: 0
  },
  {
    question: "What is the birthplace of Freddy Mercury?",
    choices: ["England", "India", "Zimbabwe", "Tanzania"],
    validAnswer: 3
  }
];
// this sets the number of the question
var incorrectAnswer = 0;
var correctAnswer = 0;
var timerCount = 30;
var count = 0;
var countArray = [];
var choicesArray = [];
var winingAnswer = $("<p>").text("Correct!!!");
var losingAnswer = $("<p>").text("Wrong Answer!");

// this gives me the total amount of questions that I have
var lengthOfQuestion = questionArray.length;
// this gives me the total amount of choices I have on any particular question
var lengthOfChoices = questionArray[count].choices.length;

// These are variables to check the correct answer
var rightAnswer;
var check;

// this will start the game once you click on the start button
$("#start").on("click", function() {
  $("#startscreen").hide();
  $("#questionscreen").show();
  timer();
  counter = setInterval(timer, 1000);
  displayTrivia();
});

// This function makes the timer run until it hits zero.
function timer() {
  timerCount--;
  if (timerCount <= 0) {
    clearInterval(counter);
    // If the time runs out and you didn't answer you get an incorrect answer
    incorrectAnswer++;
    check = questionArray[count].validAnswer;
    rightAnswer = questionArray[count].choices[check];
    showTimesUp();
    reset();
  }

  $("#timer").html("00:" + timerCount + " secs");
}
//  This holds the logic for the entire game
function displayTrivia() {
  // This is the div all the answers will be appended to
  questionDiv = $("<div class='question'/>");
  // This is holds the question
  questions = $("<h3>").append(questionArray[count].question);

  // this appends the questions to the newly created div
  questionDiv.append(questions);

  //   This sets up the choices and appends them to the questionDiv
  for (let j = 0; j < lengthOfChoices; j++) {
    choicesArray = $("<h4>")
      .addClass("option")
      .append(questionArray[count].choices[j]);
    countArray = questionArray[count].choices[j];
    questionDiv.append(choicesArray);
  }
  // Here both the questions and the choices are appended to the HTML document
  $("#question").append(questionDiv);

  //   This is the function that will run the users pick
  $(".option").on("click", function() {
    userPick = $(this).text();
    check = questionArray[count].validAnswer;
    rightAnswer = questionArray[count].choices[check];
    if (userPick != rightAnswer) {
      $("#answer").append(losingAnswer);
      incorrectAnswer++;
      showAnswerIncorrect();
      reset();
    } else if (userPick === rightAnswer) {
      showAnswerCorrect();
      correctAnswer++;
      reset();
    }
    // this is the game over statement. When there are no more questions left.
    if (count === questionArray.length) {
      $("#questionscreen").hide();
      $("#gameover").show();
      $("#correct-answers").html(
        "You had " + correctAnswer + " correct answers"
      );
      $("#incorrect-answers").html(
        "You had " + incorrectAnswer + " incorrect answers"
      );
    }
  });
}

$("#retry").on("click", function() {
  $("#gameover").hide();
  timerCount = 30;
  count = 0;
  $("#questionscreen").show();
  $("#question").empty();
  $("#answer").empty();
  setTimeout(displayTrivia, timer, 3000);
});
// this is the function that resets the game
function reset() {
  count++;
  timerCount = 30;
  $("#question").empty();
  $("#answer").empty();
  setTimeout(displayTrivia, timer, 3000);
}

function showAnswerCorrect() {
  $("#questionscreen").hide();
  $("#show-answer").show();
  $("#show-incorrect").hide();
  $("#show-correct").show();
  $("#times-up").hide();
  setTimeout(resetAnswer, 2000);
}

function showAnswerIncorrect() {
  $("#questionscreen").hide();
  $("#show-answer").show();
  $("#show-correct").hide();
  $("#show-incorrect").show();
  $("#times-up").hide();
  $("#incorrected").text(rightAnswer);
  setTimeout(resetAnswer, 2000);
}
function resetAnswer() {
  $("#questionscreen").show();
  $("#show-answer").hide();
}

function showTimesUp() {
  $(".correct").text(rightAnswer);
  $("#questionscreen").hide();
  $("#show-answer").show();
  $("#show-correct").hide();
  $("#show-incorrect").hide();
  $("#times-up").show();
  timercount = 30;
  counter = setInterval(timer, 1000);
  setTimeout(resetAnswer, 2000);
}
