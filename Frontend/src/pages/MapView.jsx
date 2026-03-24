import React from 'react';
import { useMapData } from '../hooks/useMapData';
import { Map as MapIcon, Layers } from 'lucide-react';

const MapView = () => {
  const { mapData, loading } = useMapData();

  return (
    <div>
      <div className="page-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 className="page-title">Geospatial Analytics</h1>
          <p className="page-subtitle">Interactive map overlaying ward data with shortage predictions</p>
        </div>
        <button className="btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <Layers size={18} /> Toggle Layers
        </button>
      </div>

      <div className="glass-panel" style={{height: 'calc(100vh - 240px)', position: 'relative', overflow: 'hidden'}}>
        {loading && (
          <div style={{position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
            <p style={{fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <MapIcon className="animate-pulse" /> Loading spatial datasets...
            </p>
          </div>
        )}
        
        <div style={{
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(45deg, #0f172a, #1e293b)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <div style={{textAlign: 'center', color: 'var(--text-muted)'}}>
            <MapIcon size={64} style={{marginBottom: '16px', opacity: 0.5}} />
            <p>[MapGL Component Overlay Mounts Here]</p>
            <p style={{fontSize: '0.875rem', marginTop: '8px'}}>Integrating {mapData ? mapData.length : '...'} spatial data points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
