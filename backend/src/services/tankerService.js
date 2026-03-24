import Prediction from '../models/Prediction.js';
import Tanker from '../models/Tanker.js';
import { RISK_LEVELS } from '../config/constants.js';

export const allocateTankers = async () => {
  // Find wards with HIGH or MEDIUM risk
  const highRiskPredictions = await Prediction.find({ 
    riskLevel: { $in: [RISK_LEVELS.HIGH, RISK_LEVELS.MEDIUM] } 
  }).sort({ riskScore: -1 });

  const allocations = [];

  for (const pred of highRiskPredictions) {
    // Allocate logic - e.g 2 tankers for HIGH, 1 for MEDIUM
    const allocatedCount = pred.riskLevel === RISK_LEVELS.HIGH ? 2 : 1;
    
    // Check if allocation already exists
    let tanker = await Tanker.findOne({ wardId: pred.wardId });
    if (!tanker) {
      tanker = new Tanker({
        wardId: pred.wardId,
        allocatedTankers: allocatedCount,
        status: 'PENDING'
      });
      await tanker.save();
    } else {
      tanker.allocatedTankers = allocatedCount;
      await tanker.save();
    }

    allocations.push(tanker);
  }

  return allocations;
};

export const getTankerAllocations = async () => {
  return await Tanker.find({});
};
