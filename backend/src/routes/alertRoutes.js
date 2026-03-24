import express from 'express';
import { getAlerts } from '../controllers/alertController.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/', asyncHandler(getAlerts));

export default router;
