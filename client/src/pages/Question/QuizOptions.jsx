import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuizOptions = () => {
    const [categories, setCategories] = useState([]);
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

    const handleCategorySelection = (category) => {
        navigate(`/quiz/${category}`);
    };

    return (
        <div>
            <h1>Select a category</h1>
            {categories.map((category, index) => (
                <button key={index} onClick={() => handleCategorySelection(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default QuizOptions;