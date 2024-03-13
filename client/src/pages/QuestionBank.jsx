import React from 'react';
import QuestionList from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';


const QuestionBank = () => {
  return (
    <div className='space-y-6'>
      <h1>Quiz App</h1>

      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default QuestionBank;
