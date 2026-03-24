import Ward from '../models/Ward.js';
import Supply from '../models/Supply.js';
import Complaint from '../models/Complaint.js';
import { getRootCause as getMLRootCause } from '../ml/mlClient.js';
import { fetchWeatherData } from '../external/weatherService.js';

export const analyzeRootCause = async (wardId) => {
  const ward = await Ward.findOne({ wardId });
  if (!ward) throw new Error('Ward not found');

  const supplies = await Supply.find({ wardId });
  const complaints = await Complaint.find({ wardId });
  const weather = await fetchWeatherData(ward.name);

  const avgSupplyHrs = supplies.length 
    ? supplies.reduce((acc, curr) => acc + curr.avgSupplyHours, 0) / supplies.length 
    : 0;

  const totalComplaints = complaints.reduce((acc, curr) => acc + curr.complaintCount, 0);

  const wardData = {
    population: ward.population,
    supply_hours: avgSupplyHrs,
    complaints: totalComplaints,
    rainfall: weather.rainfall
  };

  // Call the external ML logic
  const rootCauseResult = await getMLRootCause(wardData);

  return rootCauseResult;
};
