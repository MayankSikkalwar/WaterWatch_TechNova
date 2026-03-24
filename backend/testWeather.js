import { fetchWeatherData } from './src/external/weatherService.js';
import connectDB from './src/config/db.js';

const test = async () => {
  // connectDB is not actually needed since weatherService only uses axios and env
  console.log("Testing Weather API for London...");
  const data = await fetchWeatherData('London');
  console.log("Result:", data);
  process.exit();
}
test();
