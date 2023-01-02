var readLinesync = require('readline-sync');

var score = 0;

welcome();
playgame();
scoredisplay();


function welcome() {
  var username = readLinesync.question("What is your name ? ");
  console.log("\n");
  console.log("Welcome to the Quiz", username, " ! ")
  console.log("\n");
}

function playgame() {
  var QuestionOne = {
    question: "What is the capital of India ? ",
    answer: "Delhi",
  }

  var QuestionTwo = {
    question: "Who is Prime Minister of India ? ",
    answer: "Narendra Modi",
  }

  var QuestionThree = {
    question: "What is the capital of Uttar Pradesh ? ",
    answer: "Lucknow",
  }

  var QuestionFour = {
    question: "Who is the Chief Minister of Uttar Pradesh ? ",
    answer: "Yogi",
  }

  var QuestionFive = {
    question: "What is the national bird of India ? ",
    answer: "Peacock",
  }

  var quiz = [QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive]

  // var score = 0 ;


  for (var i = 0; i < quiz.length; i++) {
    var useranswer = readLinesync.question(quiz[i].question);

    if (useranswer == quiz[i].answer) {
      score++;
      console.log("Right answer !")
      console.log("Your current Score : ", score, "/5");
      console.log("------------------------------------------------")
    }
    else {
      score--;
      console.log("Wrong answer !")
      console.log("Your current Score : ", score, "/5");
      console.log("------------------------------------------------")
    }
  }

}

function scoredisplay() {
  console.log("\n")
  console.log("Your total Score : ", score, "/5");
}

