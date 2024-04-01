import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const QuizTaker = () => {
  const { category } = useParams(); // get category from URL
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`/quizget/${category}`); // fetch questions for this category
        const shuffledQuestions = shuffle(response.data); // Shuffle the array of questions
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, [category]); // re-fetch when category changes

  // Function to shuffle array
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = async () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 10);
    }
    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleEndQuiz = () => {
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setQuizCompleted(false);
    fetchQuestions(); // Refetch questions to start a new quiz
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      {quizCompleted ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">Your score: {score}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetQuiz}>
            Try Again
          </button>
          <Link to="/questionBank" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
            Go to Question Bank
          </Link>
        </div>
      ) : (
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}</h2>
          <p className="mb-4">{questions[currentQuestionIndex]?.question}</p>
          {questions[currentQuestionIndex]?.type === 'open_ended' ? (
            <div>
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 mb-4"
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          ) : (
            <ul>
              {questions[currentQuestionIndex]?.answers.map((answer, index) => (
                <li
                  key={index}
                  className={`cursor-pointer py-2 px-4 border border-gray-300 rounded mb-2 ${
                    answer === selectedAnswer ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => handleAnswerSelection(answer)}
                >
                  {answer}
                </li>
              ))}
              {selectedAnswer && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              )}
            </ul>
          )}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleEndQuiz}>
            End Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizTaker;