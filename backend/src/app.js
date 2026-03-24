import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import wardRoutes from './routes/wardRoutes.js';
import predictionRoutes from './routes/predictionRoutes.js';
import rootCauseRoutes from './routes/rootCauseRoutes.js';
import tankerRoutes from './routes/tankerRoutes.js';
import alertRoutes from './routes/alertRoutes.js';

import { errorHandler } from './middlewares/errorHandler.js';
import weeklyPredictionJob from './jobs/weeklyPrediction.js';
import connectDB from './config/db.js';
import { logger } from './utils/logger.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/wards', wardRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/root-cause', rootCauseRoutes);
app.use('/api/recommendations', tankerRoutes); // Mapped tanker routes here as requested per path setup
app.use('/api/alerts', alertRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('WaterWatch API running 🚀');
});

// Error handling middleware
app.use(errorHandler);

// Start Background Jobs
weeklyPredictionJob.start();
logger.info('Weekly prediction job scheduled.');

export default app;