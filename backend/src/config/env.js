import dotenv from 'dotenv';
dotenv.config();

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/waterwatch',
  ML_API_URL: process.env.ML_API_URL || 'http://localhost:8000',
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || '',
};

export default env;
