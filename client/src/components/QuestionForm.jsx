import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('');
  const [answer, setAnswer] = useState(''); // For open-ended question
  const [answers, setAnswers] = useState(['', '', '', '']); // For multiple choice
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(['java', 'python', 'javascript', 'New Category']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalCategory = category === 'New Category' ? newCategory : category;

    try {
      let formData = {};

      if (type === 'open_ended') {
        formData = {
          question,
          type,
          answers: [answer], // Use the answer provided by the user
          correctAnswer: answer, // Automatically set the answer as the correct answer for open-ended questions
          category: finalCategory
        };
      } else if (type === 'multiple_choice') {
        formData = {
          question,
          type,
          answers,
          correctAnswer: answers[correctAnswerIndex], // Store the correct answer for multiple choice
          category: finalCategory
        };
      }

      await axios.post('http://localhost:8000/questions', formData);
      alert('Question submitted successfully!');
      setQuestion('');
      setType('');
      setAnswer('');
      setAnswers(['', '', '', '']);
      setCorrectAnswerIndex(-1);
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
        {type === 'open_ended' && (
          <div>
            <label htmlFor="openEndedAnswer">Answer:</label>
            <input type="text" id="openEndedAnswer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
          </div>
        )}
        {type === 'multiple_choice' && (
          <div>
            {answers.map((answer, index) => (
              <div key={index}>
                <label htmlFor={`answer${index + 1}`}>Answer {index + 1}:</label>
                <input type="text" id={`answer${index + 1}`} value={answer} onChange={(e) => {
                  const updatedAnswers = [...answers];
                  updatedAnswers[index] = e.target.value;
                  setAnswers(updatedAnswers);
                }} required />
              </div>
            ))}
            <div>
              <label htmlFor="correctAnswer">Correct Answer:</label>
              <select id="correctAnswer" value={correctAnswerIndex} onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value))} required>
                <option value={-1}>Select...</option>
                {answers.map((answer, index) => (
                  <option key={index} value={index}>{`Answer ${index + 1}`}</option>
                ))}
              </select>
            </div>
          </div>
        )}
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
