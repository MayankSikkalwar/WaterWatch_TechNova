import React, { createContext, useContext, useState } from 'react';
import { getPredictions } from './predictionAPI';

const PredictionContext = createContext(null);

export const PredictionProvider = ({ children }) => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPredictions = async () => {
    setLoading(true);
    try {
      const data = await getPredictions();
      setPredictions(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PredictionContext.Provider value={{ predictions, loading, loadPredictions }}>
      {children}
    </PredictionContext.Provider>
  );
};

export const usePredictionContext = () => useContext(PredictionContext);
