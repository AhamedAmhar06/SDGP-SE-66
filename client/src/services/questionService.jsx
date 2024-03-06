// src/services/questionService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/questions';

export const addQuestion = async (formData) => {
  try {
    await axios.post(`${API_URL}/add`, formData);
  } catch (error) {
    console.error('Error adding question:', error);
  }
};

export const getAllQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

