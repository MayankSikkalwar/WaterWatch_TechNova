import * as wardService from '../services/wardService.js';
import { successResponse } from '../utils/apiResponse.js';

export const getWards = async (req, res) => {
  const wards = await wardService.getAllWards();
  return res.status(200).json(successResponse(wards, 'Wards retrieved successfully'));
};

export const getWard = async (req, res) => {
  const ward = await wardService.getWardById(req.params.id);
  if (!ward) return res.status(404).json({ success: false, message: 'Ward not found' });
  return res.status(200).json(successResponse(ward, 'Ward retrieved successfully'));
};
