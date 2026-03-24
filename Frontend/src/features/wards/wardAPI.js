import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const getWards = async () => {
  const response = await apiClient.get(ENDPOINTS.WARDS.GET_ALL);
  return response.data;
};

export const getWardById = async (id) => {
  const response = await apiClient.get(ENDPOINTS.WARDS.GET_BY_ID(id));
  return response.data;
};
