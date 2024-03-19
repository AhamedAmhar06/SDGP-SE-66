// models/Question.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['multiple_choice', 'open_ended'],
    required: true
  },
  answers: [{
    type: String
  }],
  correctAnswer: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
