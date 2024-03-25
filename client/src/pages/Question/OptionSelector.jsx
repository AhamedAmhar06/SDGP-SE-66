import React from 'react'
import { Link } from 'react-router-dom'

export default function OptionSelector() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to='/questionUploader' className='flex flex-col justify-center items-center m-2 p-8 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out sm:mx-4 w-64 h-64'>
          <h2 className="text-3xl font-bold mb-2 text-center">Edit Question</h2>
          <p className="text-lg text-center">Click here to edit the questions for the quiz.</p>
        </Link>
        <Link to='/questionBank' className='flex flex-col justify-center items-center m-2 p-8 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out sm:mx-4 w-64 h-64'>
          <h2 className="text-3xl font-bold mb-2 text-center">Take a Quiz</h2>
          <p className="text-lg text-center">Click here to take a quiz from the question bank.</p>
        </Link>
    </div>
  )
}