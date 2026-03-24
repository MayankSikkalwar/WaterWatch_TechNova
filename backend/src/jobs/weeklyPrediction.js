import cron from 'node-cron';
import Ward from '../models/Ward.js';
import { generatePredictionForWard } from '../services/predictionService.js';
import { logger } from '../utils/logger.js';

// Run every Sunday at midnight
const weeklyPredictionJob = cron.schedule('0 0 * * 0', async () => {
  logger.info('Starting weekly background job to generate predictions...');
  try {
    const wards = await Ward.find({});
    let count = 0;
    
    for (const ward of wards) {
      try {
        await generatePredictionForWard(ward.wardId);
        count++;
      } catch (err) {
        logger.error(`Error generating prediction for ward ${ward.wardId}`, err.message);
      }
    }
    
    logger.info(`Successfully generated weekly predictions for ${count} wards.`);
  } catch (error) {
    logger.error('Failed to run weekly prediction job', error.message);
  }
});

export default weeklyPredictionJob;
