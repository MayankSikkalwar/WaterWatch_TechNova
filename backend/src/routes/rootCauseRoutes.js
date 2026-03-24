import express from 'express';
import { getRootCause } from '../controllers/rootCauseController.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/:wardId', asyncHandler(getRootCause));

export default router;
