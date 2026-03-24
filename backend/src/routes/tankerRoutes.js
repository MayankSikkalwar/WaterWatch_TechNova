import express from 'express';
import { allocateTankers, getTankers } from '../controllers/tankerController.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.post('/allocate', asyncHandler(allocateTankers));
router.get('/', asyncHandler(getTankers));

export default router;
