import Prediction from '../models/Prediction.js';
import { RISK_LEVELS } from '../config/constants.js';

export const getAlerts = async () => {
  const highRiskWards = await Prediction.find({ riskLevel: RISK_LEVELS.HIGH });
  
  return highRiskWards.map(ward => ({
    wardId: ward.wardId,
    alertLevel: 'CRITICAL',
    message: `High risk of water scarcity detected in Ward ${ward.wardId}. Immediate action required.`,
    timestamp: new Date()
  }));
};
