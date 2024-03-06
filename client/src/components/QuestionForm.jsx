// src/components/QuestionForm.js
import React, { useState } from 'react';
import { addQuestion } from '../services/questionService.jsx';

const QuestionForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const createdBy = 'Undergrad'; // Change to the actual user Id
    await addQuestion({ ...formData, createdBy });
    setFormData({ title: '', description: '' });
  };

  return (
    <div>
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default QuestionForm;
