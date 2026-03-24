import express from 'express';
import { generatePrediction, getPredictions } from '../controllers/predictionController.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.post('/generate', asyncHandler(generatePrediction));
router.get('/', asyncHandler(getPredictions));

export default router;
