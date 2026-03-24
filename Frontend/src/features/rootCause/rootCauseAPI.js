import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const getRootCauseById = async (id) => {
  const response = await apiClient.get(ENDPOINTS.ROOT_CAUSE.GET_BY_ID(id));
  return response.data;
};

export const analyzeRootCause = async (data) => {
  const response = await apiClient.post(ENDPOINTS.ROOT_CAUSE.ANALYZE, data);
  return response.data;
};
