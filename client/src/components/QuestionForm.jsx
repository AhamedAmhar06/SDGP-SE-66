// src/components/QuestionForm.js

import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(['java', 'python', 'javascript', 'New Category']); // Add your categories here

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCategory = category === 'New Category' ? newCategory : category;

    try {
      await axios.post('http://localhost:8000/questions', {
        question,
        type,
        answers,
        correctAnswer,
        category: finalCategory
      });
      alert('Question submitted successfully!');
      // Clear form fields after submission
      setQuestion('');
      setType('');
      setAnswers(['']);
      setCorrectAnswer('');
      setCategory('');
      setNewCategory('');
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
          <label htmlFor="type">Type:</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select...</option>
            <option value="open_ended">Open Ended</option>
            <option value="multiple_choice">Multiple Choice</option>
          </select>
        </div>
        <div>
          <label htmlFor="answers">Answers:</label>
          <textarea id="answers" value={answers.join('\n')} onChange={(e) => setAnswers(e.target.value.split('\n'))} required />
        </div>
        <div>
          <label htmlFor="correctAnswer">Correct Answer:</label>
          <input type="text" id="correctAnswer" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select...</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          {category === 'New Category' && (
            <>
              <label htmlFor="newCategory">New Category:</label>
              <input type="text" id="newCategory" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required />
            </>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;