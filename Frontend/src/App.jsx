import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { WardProvider } from './features/wards/wardContext';
import { PredictionProvider } from './features/predictions/predictionContext';
import { AlertProvider } from './features/alerts/alertContext';

const App = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <WardProvider>
          <PredictionProvider>
            <AlertProvider>
              <AppRoutes />
            </AlertProvider>
          </PredictionProvider>
        </WardProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
