import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState({});
  const [categories, setCategories] = useState(['Category 1', 'Category 2', 'New Category']);
  const [types, setTypes] = useState(['multiple_choice', 'open_ended']);

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
    setEditingValue({ ...editingValue, [event.target.name]: event.target.value });
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
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold text-center my-8'>Questions</h2>
      {questions.map(question => (
        <div key={question._id} className='max-w-screen-md mx-auto my-4 border border-gray-300 rounded-lg p-4 hover:shadow-md'>
          <p className='text-lg font-semibold'>Question:</p>
          <p className='text-gray-800'>{question.question}</p>
          <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2'>
              <p className='text-lg font-semibold'>
                Type: <span className="font-normal text-gray-800">{question.type}</span>
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-lg font-semibold'>
                Category: <span className="font-normal text-gray-800">{question.category}</span>
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-lg font-semibold'>
                Answer: <span className="font-normal text-gray-800">{question.type === 'open_ended' ? question.correctAnswer : question.answers.join(', ')}</span>
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <p className='text-lg font-semibold'>
                Correct Answer: <span className="font-normal text-gray-800">{question.type === 'open_ended' ? question.correctAnswer : question.correctAnswer}</span>
              </p>
            </div>


          </div>
          <div className='mt-4 flex justify-between'>
            {editingId === question._id ? (
              <button onClick={() => handleSaveClick(question._id)} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Save</button>
            ) : (
              <>
                <button onClick={() => handleEditClick(question._id, question)} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600'>Edit</button>
                <button onClick={() => handleDeleteClick(question._id)} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600'>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
