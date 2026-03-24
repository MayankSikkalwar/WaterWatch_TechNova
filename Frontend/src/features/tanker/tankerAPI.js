import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const getTankerRecommendations = async (params) => {
  const response = await apiClient.get(ENDPOINTS.TANKERS.GET_RECOMMENDATIONS, { params });
  return response.data;
};
