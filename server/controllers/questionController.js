// controllers/questionController.js

const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controllers/questionController.js

// controllers/questionController.js



// controllers/questionController.js

exports.createQuestion = async (req, res) => {
  const { question, type, answers, correctAnswer, category } = req.body;

  try {
    let newQuestion;

    if (type === 'open_ended') {
      newQuestion = new Question({
        question,
        type,
        answers: [question], // For open-ended questions, use the question itself as the answer
        correctAnswer: correctAnswer, // Store the correct answer if needed
        category
      });
    } else if (type === 'multiple_choice') {
      newQuestion = new Question({
        question,
        type,
        answers,
        correctAnswer: answers[correctAnswer], // Store the correct answer for multiple choice
        category
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





exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, type, answers, correctAnswer, category } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(id, { question, type, answers, correctAnswer, category }, { new: true });
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