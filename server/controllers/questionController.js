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
pull
exports.createQuestion = async (req, res) => {
  const question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    difficulty: req.body.difficulty
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer, difficulty } = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(id, { question, answer, difficulty }, { new: true });
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