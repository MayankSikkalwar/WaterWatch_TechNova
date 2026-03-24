import * as alertService from '../services/alertService.js';
import { successResponse } from '../utils/apiResponse.js';

export const getAlerts = async (req, res) => {
  const alerts = await alertService.getAlerts();
  return res.status(200).json(successResponse(alerts, 'Alerts generated'));
};
