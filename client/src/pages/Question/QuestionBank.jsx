import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import QuestionUploader from './QuestionUploader';
import QuestionList from './QuestionList';

const QuestionBank = () => {
  return (
    <div >
      {/* Card for QuestionUploader */}
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
  );
}

export default QuestionBank;
