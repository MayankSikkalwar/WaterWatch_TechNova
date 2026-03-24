import axios from 'axios';
import env from '../config/env.js';

export const fetchWeatherData = async (location) => {
  try {
    // Note: Free OpenWeather API logic
    // Replace with real geo coords if available
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    
    // Return mock data if API key is not set to prevent crashes
    if (!process.env.WEATHER_API_KEY) {
      console.warn('OpenWeather API Key not configured. Using mock data.');
      return { rainfall: 0, temperature: 30 };
    }

    const response = await axios.get(url);
    return {
      rainfall: response.data.rain ? response.data.rain['1h'] || 0 : 0,
      temperature: response.data.main.temp,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return { rainfall: 0, temperature: 30 }; // fallback mock data
  }
};
