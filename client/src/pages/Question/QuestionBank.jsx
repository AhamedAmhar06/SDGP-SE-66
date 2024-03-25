import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import QuestionUploader from './QuestionUploader';
import QuestionList from './QuestionList';
import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { UndergradContext } from "../../context/undergradContext";
import Error404page from "../../components/Error404page"; // Import Error404page from ../Error404page

const QuestionBank = () => {

  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);
  const [email, setEmail] = useState('');
  const [ auth, setAuth ] = useState(false);
  
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
    <div >
      { auth ? (
        <div>

        
      {/* Card for QuestionUploader */}
      <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Previous page
</button>
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Question Uploader</h2>
        <QuestionUploader />
        
        
      </div>

      {/* Card for QuestionList */}
      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Question Preview</h2>
        
        {/* Button to navigate to QuestionList page */}
        <Link to="/questionlist" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 inline-block mt-4">Go to Question List</Link>
      </div>
      </div>
      ) : (<Error404page />)}
    </div>
  );
}

export default QuestionBank;
