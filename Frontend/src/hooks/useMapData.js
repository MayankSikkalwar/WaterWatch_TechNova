import { useFetch } from './useFetch';
import { ENDPOINTS } from '../services/endpoints';
import { useMemo } from 'react';

// Combines ward data and predictions for realistic geo-map projection
export const useMapData = () => {
  const { data: wards, loading: wardsLoading, error: wardsError } = useFetch(ENDPOINTS.WARDS.GET_ALL);
  const { data: predictions, loading: predLoading, error: predError } = useFetch(ENDPOINTS.PREDICTIONS.GET_LATEST);

  const combinedData = useMemo(() => {
    if (!wards || !predictions) return [];
    
    // Simulating joining spatial ward polygons/points with numeric predictions
    return wards.map(ward => {
      const relatedPred = predictions.find(p => p.wardId === ward.id) || null;
      return {
        ...ward,
        prediction: relatedPred,
        riskLevel: relatedPred?.shortageRisk || 'Low', // high | medium | low
      };
    });
  }, [wards, predictions]);

  return {
    mapData: combinedData,
    loading: wardsLoading || predLoading,
    error: wardsError || predError
  };
};
