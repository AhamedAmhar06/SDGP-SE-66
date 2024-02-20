// Define the questions
let questions = [
    { question: "What is your name?", response: "" },
    { question: "What is your age?", response: "" },
    { question: "What is your favorite programming language?", response: "" },
  ];
  
  // Function to ask questions
  function askQuestion(questionObject) {
    let response = prompt(questionObject.question);
    questionObject.response = response;
  }
  
  // Function to start the questionnaire
  function startQuestionnaire() {
    for (let i = 0; i < questions.length; i++) {
      askQuestion(questions[i]);
    }
  }
  
  // Function to display the responses
  function displayResponses() {
    for (let i = 0; i < questions.length; i++) {
      console.log(`${questions[i].question} ${questions[i].response}`);
    }
  }
  
  // Start the questionnaire
  startQuestionnaire();
  
  // Display the responses
  displayResponses();