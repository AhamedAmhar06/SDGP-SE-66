// src/components/QuestionList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleSaveClick = async (id, updatedQuestion) => {
    try {
      await axios.put(`http://localhost:8000/questions/${id}`, updatedQuestion);
      setEditingId(null);
      // Refresh the questions after editing
      const response = await axios.get('http://localhost:8000/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/questions/${id}`);
      // Refresh the questions after deletion
      const response = await axios.get('http://localhost:8000/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div>
      <h2>Questions:</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Difficulty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question._id}>
              <td>
                {editingId === question._id ? (
                  <input
                    type="text"
                    value={question.question}
                    onChange={(e) => setQuestions(questions.map(q => q._id === question._id ? { ...q, question: e.target.value } : q))}
                  />
                ) : (
                  question.question
                )}
              </td>
              <td>
                {editingId === question._id ? (
                  <input
                    type="text"
                    value={question.answer}
                    onChange={(e) => setQuestions(questions.map(q => q._id === question._id ? { ...q, answer: e.target.value } : q))}
                  />
                ) : (
                  question.answer
                )}
              </td>
              <td>
                {editingId === question._id ? (
                  <input
                    type="text"
                    value={question.difficulty}
                    onChange={(e) => setQuestions(questions.map(q => q._id === question._id ? { ...q, difficulty: e.target.value } : q))}
                  />
                ) : (
                  question.difficulty
                )}
              </td>
              <td>
                {editingId === question._id ? (
                  <button onClick={() => handleSaveClick(question._id, question)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(question._id)}>Edit</button>
                    <button onClick={() => handleDeleteClick(question._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;
