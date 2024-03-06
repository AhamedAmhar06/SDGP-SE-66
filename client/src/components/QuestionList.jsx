// src/components/QuestionList.js
import React, { useState, useEffect } from 'react';
import { getAllQuestions } from '../services/questionService.jsx';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getAllQuestions();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map(question => (
          <li key={question._id}>
            <strong>{question.title}</strong>: {question.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
