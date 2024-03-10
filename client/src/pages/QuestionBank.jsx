import React from 'react';
import QuestionList from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';


const QuestionBank = () => {
  return (
    <div>
      <h1>Quiz App</h1>

      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default QuestionBank;
