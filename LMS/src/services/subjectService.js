import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Adjust this URL as needed

export const createSubject = async (subjectData) => {
  try {
    const response = await axios.post(`${API_URL}/subjects/create`, subjectData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating subject');
  }
};

export const getSubjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/subjects`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching subjects');
  }
};

export const getSubjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);  // Make API call with dynamic ID
    return response.data;  // Return subject data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching subject');
  }
};
