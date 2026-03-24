import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const getActiveAlerts = async () => {
  const response = await apiClient.get(ENDPOINTS.ALERTS.GET_ACTIVE);
  return response.data;
};
