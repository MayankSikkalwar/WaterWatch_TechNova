import React, { createContext, useContext, useState, useEffect } from 'react';
import { getActiveAlerts } from './alertAPI';

const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getActiveAlerts().then(setAlerts).catch(console.error);
    // Real application might use WebSockets or polling here
    const interval = setInterval(() => {
      getActiveAlerts().then(setAlerts).catch(console.error);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
