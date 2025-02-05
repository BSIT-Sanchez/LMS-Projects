import axios from 'axios';

// Replace with your actual backend URL
const API_URL = 'http://localhost:5000/api';

export const createQuiz = async (quizData) => {
  try {
    const response = await axios.post(`${API_URL}/quizzes/create`, quizData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating quiz');
  }
};

export const getQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching quizzes');
  }
};
export const getQuizById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/subject/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching quizzes');
  }
};

