const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the questions
let questions = [
  { question: "username ", response: "" },
  { question: "questions from which topic? ", response: "" },
  { question: "Q1: Define OOP ", response: "" },
];

// Function to ask questions
function askQuestion(questionObject, callback) {
  rl.question(questionObject.question, (response) => {
    questionObject.response = response;
    callback();
  });
}

// Function to start the questionnaire
function startQuestionnaire(index = 0) {
  if (index === questions.length) {
    rl.close();
    //displayResponses();
    saveResponses(); // save the responses 
    return;
  }

  askQuestion(questions[index], () => startQuestionnaire(index + 1));
}

// Function to display the responses
function displayResponses() {
  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i].question} ${questions[i].response}`);
  }
}

// Function to save responses to a file
function saveResponses() {
  fs.writeFile('responses.json', JSON.stringify(questions, null, 2), (err) => {
    if (err) throw err;
    console.log('Responses saved to responses.json');
    
  });
}


// Start the questionnaire
startQuestionnaire();