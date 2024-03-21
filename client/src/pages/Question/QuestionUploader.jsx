import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from "../../context/undergradContext";
import Error404page from "../../components/Error404page"; 

const QuestionUploader = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('');
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const[email, setEmail] = useState('');
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);
  const [categories, setCategories] = useState(['java', 'python', 'javascript', 'New Category']);
  const [auth, setAuth] = useState(false);
  const [questionsUploaded, setQuestionsUploaded] = useState(0); // This is a new state variable for counting the number of questions uploaded

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const finalCategory = category === 'New Category' ? newCategory : category;
  
    try {
      let formData = {};
  
      if (type === 'open_ended') {
        formData = {
          question,
          type,
          answer,
          correctAnswer: answer,
          category: finalCategory,
          email
        };
      } else if (type === 'multiple_choice') {
        formData = {
          question,
          type,
          answers,
          correctAnswer: answers[correctAnswerIndex],
          category: finalCategory,
          email
        };
      }
  
      await axios.post('http://localhost:8000/questions', formData);
      alert('Question submitted successfully!');
      setQuestion('');
      setType('');
      setAnswer('');
      setAnswers(['', '', '', '']);
      setCorrectAnswerIndex(-1);
      setCategory('');
      setNewCategory('');
      setQuestionsUploaded(questionsUploaded + 1);
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Failed to submit question. Please try again.');
    }
    
  };
  useEffect(() => {
    const fetchUndergrad = async () => {
        try {
            if(undergrad){
                setEmail(undergrad.email)
                const { data } = await axios.post('tutorLogin', {email});

                if(data){
                    setAuth(true);
                }
                setUndergradLoaded(true);
            }
            
        } catch (error) {
            console.error(error);
        }
    };
    if(undergradLoaded === false) {
        fetchUndergrad();
    }
  });

  return (
    <div>
      {auth ? (
        <>

        
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Post a Question</h2>
              <div className="text-center">
          <p>{`Questions Uploaded: ${questionsUploaded}/10`}</p>
        </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block font-semibold">Question:</label>
          <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full border rounded px-4 py-2" required />
        </div>
        <div>
          <label htmlFor="type" className="block font-semibold">Type:</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full border rounded px-4 py-2" required>
            <option value="">Select...</option>
            <option value="open_ended">Open Ended</option>
            <option value="multiple_choice">Multiple Choice</option>
          </select>
        </div>
        {type === 'open_ended' && (
          <div>
            <label htmlFor="openEndedAnswer" className="block font-semibold">Answer:</label>
            <input type="text" id="openEndedAnswer" value={answer} onChange={(e) => setAnswer(e.target.value)} className="w-full border rounded px-4 py-2" required />
          </div>
        )}
        {type === 'multiple_choice' && (
          <div>
            {answers.map((answer, index) => (
              <div key={index}>
                <label htmlFor={`answer${index + 1}`} className="block font-semibold">Answer {index + 1}:</label>
                <input type="text" id={`answer${index + 1}`} value={answer} onChange={(e) => {
                  const updatedAnswers = [...answers];
                  updatedAnswers[index] = e.target.value;
                  setAnswers(updatedAnswers);
                }} className="w-full border rounded px-4 py-2" required />
              </div>
            ))}
            <div>
              <label htmlFor="correctAnswer" className="block font-semibold">Correct Answer:</label>
              <select id="correctAnswer" value={correctAnswerIndex} onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value))} className="w-full border rounded px-4 py-2" required>
                <option value={-1}>Select...</option>
                {answers.map((answer, index) => (
                  <option key={index} value={index}>{`Answer ${index + 1}`}</option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div>
          <label htmlFor="category" className="block font-semibold">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded px-4 py-2" required>
            <option value="">Select...</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          {category === 'New Category' && (
            <>
              <label htmlFor="newCategory" className="block font-semibold">New Category:</label>
              <input type="text" id="newCategory" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-full border rounded px-4 py-2" required />
            </>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
    </>
      ) : (null)}
    </div>
  );
};

export default QuestionUploader;
