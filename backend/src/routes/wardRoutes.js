import express from 'express';
import { getWards, getWard } from '../controllers/wardController.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/', asyncHandler(getWards));
router.get('/:id', asyncHandler(getWard));

export default router;
