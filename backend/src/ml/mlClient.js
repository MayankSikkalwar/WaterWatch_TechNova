import axios from 'axios';
import env from '../config/env.js';

export const getPrediction = async (features) => {
  try {
    const response = await axios.post(`\${env.ML_API_URL}/predict`, features);
    return response.data;
  } catch (error) {
    console.error('ML API Prediction Error:', error.message);
    throw new Error('Failed to get prediction from ML service');
  }
};

export const getRootCause = async (wardData) => {
  try {
    const response = await axios.post(`\${env.ML_API_URL}/root-cause`, wardData);
    return response.data;
  } catch (error) {
    console.error('ML API Root Cause Error:', error.message);
    throw new Error('Failed to get root cause from ML service');
  }
};
