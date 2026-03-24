import React from 'react';
import { useAlertContext } from '../features/alerts/alertContext';
import { AlertOctagon, Info, AlertTriangle } from 'lucide-react';

const Alerts = () => {
  const { alerts } = useAlertContext();

  const mockAlerts = [
    { id: 1, type: 'CRITICAL', title: 'Severe pressure drop detected in Ward 4', time: '10 mins ago', icon: <AlertOctagon size={20} color="var(--danger)" /> },
    { id: 2, type: 'WARNING', title: 'Tanker ETA delayed for Sector 9', time: '1 hr ago', icon: <AlertTriangle size={20} color="var(--warning)" /> },
    { id: 3, type: 'INFO', title: 'Scheduled maintenance complete at Alpha Station', time: '3 hrs ago', icon: <Info size={20} color="var(--primary)" /> },
  ];

  const displayList = alerts && alerts.length > 0 ? alerts : mockAlerts;

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Network Alerts</h1>
        <p className="page-subtitle">System-wide notifications and urgent anomalies</p>
      </div>

      <div className="glass-panel" style={{padding: '0'}}>
        {displayList.map(alert => (
          <div key={alert.id} style={{
            display: 'flex', 
            gap: '16px', 
            padding: '20px 24px', 
            borderBottom: '1px solid var(--border-light)',
            alignItems: 'center'
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%', 
              background: 'rgba(255,255,255,0.05)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {alert.icon || <Info size={20} />}
            </div>
            <div style={{flex: 1}}>
              <h4 style={{fontWeight: '500'}}>{alert.title}</h4>
              <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{alert.time}</span>
            </div>
            <button style={{
              background: 'transparent', border: '1px solid var(--border-light)', 
              color: 'var(--text-main)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer'
            }}>Acknowledge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
