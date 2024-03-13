// src/components/QuestionList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState({});
  const [categories, setCategories] = useState(['Category 1', 'Category 2', 'New Category']);

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

  const handleCategoryChange = (event) => {
    if (event.target.value === 'New Category') {
      setEditingValue({...editingValue, category: ''});
    } else {
      setEditingValue({...editingValue, category: event.target.value});
    }
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(`http://localhost:8000/questions/${id}`, editingValue);
      setEditingId(null);
      setEditingValue({});
      const response = await axios.get('http://localhost:8000/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/questions/${id}`);
      const response = await axios.get('http://localhost:8000/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div className='flex-[.33]'>
      <h2>Questions:</h2>
      <table border="1" className='bg-red-50'>
        <thead>
          <tr>
            <th className='border-b border-black'>Question</th>
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
              <td>{question.type}</td>
              <td>{question.type === 'open_ended' ? question.answers[0] : question.answers.join(', ')}</td>
              <td>{question.correctAnswer}</td>
              <td>
                {editingId === question._id ? (
                  <>
                    <select name="category" value={editingValue.category || ''} onChange={handleCategoryChange}>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                    {editingValue.category === '' && <input type="text" name="category" value={editingValue.category || ''} onChange={handleInputChange} />}
                  </>
                ) : question.category}
              </td>
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
