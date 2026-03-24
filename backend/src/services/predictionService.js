import Ward from '../models/Ward.js';
import Supply from '../models/Supply.js';
import Complaint from '../models/Complaint.js';
import Prediction from '../models/Prediction.js';
import { getPrediction } from '../ml/mlClient.js';
import { fetchWeatherData } from '../external/weatherService.js';

export const generatePredictionForWard = async (wardId) => {
  const ward = await Ward.findOne({ wardId });
  if (!ward) throw new Error('Ward not found');

  const supplies = await Supply.find({ wardId });
  const complaints = await Complaint.find({ wardId });
  const weather = await fetchWeatherData(ward.name);

  // Aggregate supply averages
  const avgSupplyHrs = supplies.length 
    ? supplies.reduce((acc, curr) => acc + curr.avgSupplyHours, 0) / supplies.length 
    : 0;

  // Aggregate total complaints
  const totalComplaints = complaints.reduce((acc, curr) => acc + curr.complaintCount, 0);

  // Formatting features for ML API
  const features = {
    population: ward.population,
    supply_hours: avgSupplyHrs,
    complaints: totalComplaints,
    rainfall: weather.rainfall
  };

  // Get prediction from ML service
  const mlResult = await getPrediction(features);

  // Update or insert prediction in DB
  const prediction = await Prediction.findOneAndUpdate(
    { wardId: ward.wardId },
    { 
      riskScore: mlResult.riskScore,
      riskLevel: mlResult.riskLevel 
    },
    { upsert: true, new: true }
  );

  return prediction;
};

export const getAllPredictions = async () => {
  return await Prediction.find({});
};
