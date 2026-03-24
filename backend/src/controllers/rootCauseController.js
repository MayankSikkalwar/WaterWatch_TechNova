import * as rootCauseService from '../services/rootCauseService.js';
import { successResponse } from '../utils/apiResponse.js';

export const getRootCause = async (req, res) => {
  const { wardId } = req.params;
  const analysis = await rootCauseService.analyzeRootCause(wardId);
  return res.status(200).json(successResponse(analysis, 'Root cause analysis completed'));
};
