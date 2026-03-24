import * as tankerService from '../services/tankerService.js';
import { successResponse } from '../utils/apiResponse.js';

export const allocateTankers = async (req, res) => {
  const allocations = await tankerService.allocateTankers();
  return res.status(200).json(successResponse(allocations, 'Tankers allocated based on risk'));
};

export const getTankers = async (req, res) => {
  const allocations = await tankerService.getTankerAllocations();
  return res.status(200).json(successResponse(allocations, 'Tanker allocations retrieved'));
};
