// controllers/questionController.js
const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
  
  try {
    const {email}=req.body;
    const questions = await Question.find({email});
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controllers/questionController.js



// controllers/questionController.js

exports.getquiz = async (req, res) => {
  try {
    const { category } = req.params; // get category from URL parameters
    const questions = await Question.find({ category }); // find questions for this category
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





// controllers/questionController.js

exports.createQuestion = async (req, res) => {
  const { question, type, answer, category ,email} = req.body;

  try {
    let newQuestion;

    if (type === 'open_ended') {
      // For open-ended questions, set the provided answer as both the answer and the correct answer
      newQuestion = new Question({
        question,
        type,
        answers: [answer], // Store the provided answer
        correctAnswer: answer, // Set the correct answer to the provided answer
        category,
        email
      });
    } else if (type === 'multiple_choice') {
      newQuestion = new Question({
        question,
        type,
        answers: req.body.answers,
        correctAnswer: req.body.correctAnswer,
        category,
        email
      });
    } else {
      return res.status(400).json({ message: 'Invalid question type.' });
    }

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};









// controllers/questionController.js



exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await Question.findByIdAndDelete(id);
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// category controller


exports.getAllQuestionsAndCategories = async (req, res) => {
  try {
    const questions = await Question.find({}, 'question category'); // Fetch only the question and category fields
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};