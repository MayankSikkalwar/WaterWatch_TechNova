import { getPrediction, getRootCause } from './src/ml/mlClient.js';

async function testMLService() {
  console.log('--- Testing Backend to ML Service Integration ---');
  
  try {
    const features = {
      population: 50000,
      supply_hours: 4.5,
      complaints: 120,
      rainfall: 15.2
    };
    
    console.log('\n1. Testing /predict endpoint...');
    console.log('Sending features:', features);
    const prediction = await getPrediction(features);
    console.log('-> Response:', prediction);

    console.log('\n2. Testing /root-cause endpoint...');
    const wardData = {
      wardId: 'W001',
      population: 50000,
      avg_supply_hours: 4.5,
      complaint_count: 120,
      water_quality_index: 85,
      leakage_reports: 5,
      rainfall: 15.2
    };
    console.log('Sending ward data:', wardData);
    const rootCause = await getRootCause(wardData);
    console.log('-> Response:', rootCause);

    console.log('\n--- Test Completed Successfully ---');
  } catch (error) {
    console.error('\nTest Failed:', error.message);
  }
}

testMLService();
