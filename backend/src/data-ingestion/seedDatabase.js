import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from '../config/db.js';
import { loadCSVData } from './loadCSV.js';
import { transformPopulationData, transformSupplyData, transformComplaintData } from './transformData.js';
import Ward from '../models/Ward.js';
import Supply from '../models/Supply.js';
import Complaint from '../models/Complaint.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Clearing existing data...');
    await Ward.deleteMany();
    await Supply.deleteMany();
    await Complaint.deleteMany();

    const dataPath = path.join(__dirname, 'data');
    
    // Read and transform data (Add error handling in case files don't exist yet)
    let popData = [];
    let supData = [];
    let compData = [];
    
    try {
      const rawPop = await loadCSVData(path.join(dataPath, 'population.csv'));
      popData = transformPopulationData(rawPop);
    } catch (e) { console.log('Population data not found, skipping...'); }

    try {
      const rawSup = await loadCSVData(path.join(dataPath, 'supply.csv'));
      supData = transformSupplyData(rawSup);
    } catch (e) { console.log('Supply data not found, skipping...'); }

    try {
      const rawComp = await loadCSVData(path.join(dataPath, 'complaints.csv'));
      compData = transformComplaintData(rawComp);
    } catch (e) { console.log('Complaint data not found, skipping...'); }

    console.log('Inserting processed data...');
    if (popData.length) await Ward.insertMany(popData);
    if (supData.length) await Supply.insertMany(supData);
    if (compData.length) await Complaint.insertMany(compData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding database: \${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
