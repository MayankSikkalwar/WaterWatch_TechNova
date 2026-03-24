import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import MapView from '../pages/MapView';
import WardDetails from '../pages/WardDetails';
import Alerts from '../pages/Alerts';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="map" element={<MapView />} />
        <Route path="wards/:id" element={<WardDetails />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
