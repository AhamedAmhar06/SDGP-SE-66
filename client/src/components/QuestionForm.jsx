// src/components/QuestionForm.js

import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/questions', {
        question,
        answer,
        difficulty
      });
      alert('Question submitted successfully!');
      // Clear form fields after submission
      setQuestion('');
      setAnswer('');
      setDifficulty('');
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Failed to submit question. Please try again.');
    }
  };

  return (
    <div>
      <h2>Post a Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input type="text" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <input type="text" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
