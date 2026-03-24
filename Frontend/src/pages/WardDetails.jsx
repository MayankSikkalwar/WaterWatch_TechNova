import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRootCauseById } from '../features/rootCause/rootCauseAPI';
import { Server, Zap, Droplet, Activity } from 'lucide-react';

const CauseItem = ({ title, probability, description, icon }) => (
  <div style={{
    padding: '16px', 
    border: '1px solid var(--border-light)', 
    borderRadius: '12px', 
    marginBottom: '16px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    background: 'var(--bg-card)'
  }}>
    <div style={{padding: '10px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', borderRadius: '8px'}}>
      {icon}
    </div>
    <div style={{flex: 1}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '4px'}}>
        <h4 style={{fontWeight: '600'}}>{title}</h4>
        <span style={{color: probability > 70 ? 'var(--danger)' : 'var(--warning)', fontWeight: 'bold'}}>{probability}% Prob.</span>
      </div>
      <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{description}</p>
    </div>
  </div>
);

const WardDetails = () => {
  const { id } = useParams();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call for root cause given lack of backend
    setTimeout(() => {
      setAnalysis({
        wardName: `Ward Area ${id}`,
        status: 'Critical Shortage',
        causes: [
          { title: 'Pipeline Leakage - Main Arterial', probability: 85, description: 'Pressure drop detected in sector 4B indicating potential major rupture.', icon: <Droplet size={20}/> },
          { title: 'Pump Failure Phase 1', probability: 42, description: 'Irregular voltage spikes affecting pump station beta.', icon: <Zap size={20}/> }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Ward Diagnosis: {analysis?.wardName || `Ward ${id}`}</h1>
        <p className="page-subtitle">AI-driven root cause analysis and contextual deep dive</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 350px', gap: '24px'}}>
        <div className="glass-panel" style={{padding: '24px'}}>
          <h3 style={{marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Activity className="text-primary" /> Diagnosed Causes
          </h3>
          
          {loading ? (
             <p>Running ML analysis models...</p>
          ) : (
            <div>
              {analysis.causes.map((c, idx) => (
                <CauseItem key={idx} {...c} />
              ))}
            </div>
          )}
        </div>

        <div className="glass-panel" style={{padding: '24px'}}>
          <h3 style={{marginBottom: '24px'}}>Remediation Actions</h3>
          <button className="btn-primary" style={{width: '100%', marginBottom: '16px'}}>Dispatch Maintenance</button>
          <button className="btn-primary" style={{width: '100%', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)'}}>Deploy Tankers</button>
        </div>
      </div>
    </div>
  );
};

export default WardDetails;
