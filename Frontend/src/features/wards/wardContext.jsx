import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWards } from './wardAPI';

const WardContext = createContext(null);

export const WardProvider = ({ children }) => {
  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWards().then(setWards).finally(() => setLoading(false));
  }, []);

  return (
    <WardContext.Provider value={{ wards, loading }}>
      {children}
    </WardContext.Provider>
  );
};

export const useWardsContext = () => useContext(WardContext);
