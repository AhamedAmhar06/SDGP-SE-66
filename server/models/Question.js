const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['multiple_choice', 'open_ended'], // dropdown for type
    required: true
  },
  answers: [{
    type: String,
    required: function() { return this.type === 'multiple_choice'; } // 4 answers if multiple_choice, 1 answer if open_ended
  }],
  correctAnswer: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['python', 'java', 'javascript'], // dropdown for category
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;