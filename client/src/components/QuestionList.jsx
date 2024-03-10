// src/components/QuestionList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/questions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleEditClick = (id, question) => {
    setEditingId(id);
    setEditingValue(question);
  };

  const handleInputChange = (event) => {
    setEditingValue({...editingValue, [event.target.name]: event.target.value});
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(`http://localhost:8000/questions/${id}`, editingValue);
      setEditingId(null);
      setEditingValue({});
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
            <th>Type</th>
            <th>Answers</th>
            <th>Correct Answer</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question._id}>
              <td>{editingId === question._id ? <input type="text" name="question" value={editingValue.question || ''} onChange={handleInputChange} /> : question.question}</td>
              <td>{editingId === question._id ? <input type="text" name="type" value={editingValue.type || ''} onChange={handleInputChange} /> : question.type}</td>
              <td>{editingId === question._id ? <input type="text" name="answers" value={editingValue.answers || ''} onChange={handleInputChange} /> : question.answers.join(', ')}</td>
              <td>{editingId === question._id ? <input type="text" name="correctAnswer" value={editingValue.correctAnswer || ''} onChange={handleInputChange} /> : question.correctAnswer}</td>
              <td>{editingId === question._id ? <input type="text" name="category" value={editingValue.category || ''} onChange={handleInputChange} /> : question.category}</td>
              <td>
                {editingId === question._id ? (
                  <button onClick={() => handleSaveClick(question._id)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(question._id, question)}>Edit</button>
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