export const calculateAverageRisk = (predictions) => {
  if (!predictions?.length) return 0;
  const sum = predictions.reduce((acc, pred) => acc + (pred.riskScore || 0), 0);
  return sum / predictions.length;
};
