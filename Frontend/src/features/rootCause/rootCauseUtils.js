export const extractPrimaryCause = (analysisResult) => {
  if (!analysisResult || !analysisResult.causes) return null;
  // Assumes causes is sorted by probability or severity
  return analysisResult.causes[0] || null;
};
