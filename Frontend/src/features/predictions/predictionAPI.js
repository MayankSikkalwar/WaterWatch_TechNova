import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const getPredictions = async () => {
  const response = await apiClient.get(ENDPOINTS.PREDICTIONS.GET_ALL);
  return response.data;
};
