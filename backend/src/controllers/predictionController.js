import * as predictionService from '../services/predictionService.js';
import { successResponse } from '../utils/apiResponse.js';

export const generatePrediction = async (req, res) => {
  const { wardId } = req.body;
  if (!wardId) return res.status(400).json({ success: false, message: 'wardId is required' });

  const prediction = await predictionService.generatePredictionForWard(wardId);
  return res.status(200).json(successResponse(prediction, 'Prediction generated successfully'));
};

export const getPredictions = async (req, res) => {
  const predictions = await predictionService.getAllPredictions();
  return res.status(200).json(successResponse(predictions, 'Predictions retrieved successfully'));
};
