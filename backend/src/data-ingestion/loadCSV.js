import fs from 'fs';
import csv from 'csv-parser';

/**
 * Reads a CSV file and returns a promise with the parsed data
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Array>} - Array of parsed objects
 */
export const loadCSVData = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};
