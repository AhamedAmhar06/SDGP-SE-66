import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizTaker = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Check if the selected answer is correct and update the score
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // Reset selected answer
    setSelectedAnswer('');
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold text-center my-8'>Quiz</h2>
      {currentQuestionIndex < questions.length ? (
        <div className='max-w-screen-md mx-auto my-4 border border-gray-300 rounded-lg p-4 hover:shadow-md'>
          <p className='text-lg font-semibold'>Question:</p>
          <p className='text-gray-800'>{questions[currentQuestionIndex].question}</p>
          <div className='flex flex-wrap'>
            <div className='w-full'>
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <div key={index} className='my-2'>
                  <input
                    type='radio'
                    id={`answer${index}`}
                    name='answer'
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => handleAnswerSelection(answer)}
                  />
                  <label htmlFor={`answer${index}`} className='ml-2'>{answer}</label>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-4 flex justify-end'>
            <button onClick={handleNextQuestion} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Next</button>
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizTaker;
