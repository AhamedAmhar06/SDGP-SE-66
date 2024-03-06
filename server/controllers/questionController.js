// src/controllers/questionController.js
const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    const question = new Question({ title, description, createdBy });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
