import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from "../../context/undergradContext";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState({});
  const [categories, setCategories] = useState(['Category 1', 'Category 2', 'New Category']);
  const [types, setTypes] = useState(['multiple_choice', 'open_ended']);
  const [questionsUploaded, setQuestionsUploaded] = useState(0);

  const[email, setEmail] = useState('');

  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);
  const [ questionLoaded, setQuestionLoaded ] = useState(false);


  useEffect( () => {
    const fetchUndergrad = async () => {
      try {
        if (undergrad && !undergradLoaded) {
          setEmail(undergrad.email);
          setUndergradLoaded(false);
        }
        const response = await axios.post('/getAllQuestions', { email });
        setQuestions(response.data);
        setQuestions(response.data.slice(0, 10)); // Limit to 10 questions
        setQuestionsUploaded(response.data.length);
        console.log(response.data);
        if(response.data){
          setQuestionLoaded(true);
        }
        
      } catch (error) {
        console.error('Error fetching undergrad:', error);
      }
    };
  
    // const fetchQuestions = async () => {
    //   try {
    //     const response = await axios.post('/getAllQuestions', { email });
    //     setQuestions(response.data);
    //     setQuestionLoaded(true);
    //   } catch (error) {
    //     console.error('Error fetching questions:', error);
    //   }
    // };
  
     fetchUndergrad();
  
    if (!questionLoaded) {
      fetchUndergrad();
    }
  }, [undergrad, email, undergradLoaded, questionLoaded]);
  // Adding dependencies to useEffect
  
  // useEffect(() => {
  //   console.log(questions); // Logging questions after it's been updated
  // }, [questions]); // Dependency array ensures it runs after questions has been updated
  

  const handleEditClick = (id, question) => {
    setEditingId(id);
    setEditingValue(question);
  };

  const handleInputChange = (event) => {
    setEditingValue({ ...editingValue, [event.target.name]: event.target.value });
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(`/update/${id}`, editingValue);
      setEditingId(null);
      setEditingValue({});
      const response = await axios.get('/fetchquestion');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
      const response = await axios.get('/fetchquestion');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold text-center my-8'>Questions</h2>
      <p>{`Questions Uploaded: ${questionsUploaded}/10`}</p>
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
