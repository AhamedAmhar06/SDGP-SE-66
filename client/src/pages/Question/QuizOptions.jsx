import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizOptions = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('java');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/getAllQuestionsAndCategories'); // replace with your backend endpoint
                const uniqueCategories = [...new Set(response.data.map(question => question.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleCategorySelection = () => {
        navigate(`/quiz/${selectedCategory}`);
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="p-8 bg-white rounded shadow-lg w-64">
                <h1 className="text-3xl font-bold mb-4 text-center">Select a category</h1>
                <div className="mb-4 relative">
                    <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)} 
                        className="w-full p-3 border rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z"/></svg>
                    </div>
                </div>
                <button 
                    onClick={handleCategorySelection} 
                    className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out mb-4"
                >
                    Start Quiz
                </button>
                <button 
                    onClick={handleBack} 
                    className="w-full p-3 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200 ease-in-out"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default QuizOptions;