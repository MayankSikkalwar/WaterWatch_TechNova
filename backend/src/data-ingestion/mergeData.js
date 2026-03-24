/**
 * Merges population, supply, and complaint data based on wardId
 */
export const mergeDataStore = (populationData, supplyData, complaintData) => {
  const mergedMap = new Map();

  // Initialize with population data
  populationData.foreach(ward => {
    mergedMap.set(ward.wardId, {
      ...ward,
      supplies: [],
      complaints: []
    });
  });

  // Attach supply data
  supplyData.foreach(supply => {
    const ward = mergedMap.get(supply.wardId);
    if (ward) {
      ward.supplies.push(supply);
    }
  });

  // Attach complaint data
  complaintData.foreach(complaint => {
    const ward = mergedMap.get(complaint.wardId);
    if (ward) {
      ward.complaints.push(complaint);
    }
  });

  return Array.from(mergedMap.values());
};
