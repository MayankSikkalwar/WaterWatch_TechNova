/**
 * Cleans and formats raw CSV data into expected model structures
 */
export const transformPopulationData = (rawData) => {
  return rawData.map(row => ({
    wardId: row.wardId,
    name: row.name || `Ward ${row.wardId}`,
    population: Number(row.population) || 0,
    area: row.area || 'Unknown'
  }));
};

export const transformSupplyData = (rawData) => {
  return rawData.map(row => ({
    wardId: row.wardId,
    avgSupplyHours: Number(row.avgSupplyHours) || 0,
    supplyFrequency: row.supplyFrequency || 'Daily',
    totalWaterSupplied: Number(row.totalWaterSupplied) || 0
  }));
};

export const transformComplaintData = (rawData) => {
  return rawData.map(row => ({
    wardId: row.wardId,
    complaintCount: Number(row.complaintCount) || 0,
    complaintType: row.complaintType || 'OTHER'
  }));
};
