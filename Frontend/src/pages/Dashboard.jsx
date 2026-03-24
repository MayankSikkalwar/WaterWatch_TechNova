import React from 'react';
import { usePredictionContext } from '../features/predictions/predictionContext';
import { 
  Droplet, TrendingUp, AlertCircle, Activity, 
  Users, Clock, CloudRain, MessageSquare, 
  MapPin, ShieldAlert, BarChart3, Truck, ArrowRight
} from 'lucide-react';

const StatCard = ({ title, value, trend, trendText, bgVar, textVar }) => (
  <div style={{
    background: bgVar,
    borderRadius: '20px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--border-light)'
  }}>
    <h3 style={{fontSize: '0.875rem', color: 'var(--text-main)', opacity: 0.8, fontWeight: '500', margin: '0 0 12px 0'}}>{title}</h3>
    <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: 'var(--text-main)', margin: '0 0 16px 0', letterSpacing: '-0.02em'}}>{value}</h2>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <span style={{
        color: trend >= 0 ? '#10b981' : '#ef4444', 
        display: 'flex', alignItems: 'center', gap: '4px',
        fontSize: '0.75rem', fontWeight: '700',
        background: 'var(--bg-card)', padding: '6px 10px', borderRadius: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>
        <span style={{fontSize: '0.6rem'}}>{trend >= 0 ? '▲' : '▼'}</span> {Math.abs(trend)}%
      </span>
      {trendText && <span style={{color: 'var(--text-main)', opacity: 0.6, fontSize: '0.75rem', fontWeight: '500'}}>{trendText}</span>}
    </div>
  </div>
);

const RootCauseCard = ({ title, impact, icon }) => (
  <div className="premium-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <div style={{ padding: '12px', background: 'rgba(34, 211, 238, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <p className="metric-label" style={{ fontSize: '0.75rem', marginBottom: '4px' }}>{title}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ flex: 1, height: '6px', background: 'var(--bg-dark)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: impact, background: 'var(--primary)', borderRadius: '3px' }}></div>
        </div>
        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{impact}</span>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ time, ward, title, desc, type }) => {
  const color = type === 'critical' ? 'var(--danger)' : type === 'warning' ? 'var(--warning)' : 'var(--primary)';
  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative' }}>
      <div style={{ width: '48px', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'right', paddingTop: '4px' }}>
        {time}
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: color, border: '2px solid var(--bg-card)', zIndex: 2, marginTop: '8px' }}></div>
        <div style={{ width: '2px', background: 'var(--border-light)', flex: 1, position: 'absolute', top: '20px', bottom: '-24px', zIndex: 1 }}></div>
      </div>
      <div style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{title}</span>
          <span style={{ fontSize: '0.75rem', background: 'var(--bg-surface)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>{ward}</span>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { predictions, loading } = usePredictionContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '40px' }}>
      
      {/* HEADER */}
      <section className="page-header" style={{ marginBottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 className="page-title">Executive Dashboard</h1>
            <p className="page-subtitle">Real-time water demand and shortage predictions</p>
          </div>
          <div>
            <button className="btn-primary" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '12px', fontWeight: '500' }}>
              <CloudRain size={16} /> Generate Report
            </button>
          </div>
        </div>
      </section>

      {/* KPI METRICS (4 Columns) */}
      <section className="grid-dashboard" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: 0 }}>
        <StatCard 
          title="Total Demand" value="2.4 ML" trend={14.9} trendText="(+43.21%)" 
          bgVar="var(--pastel-orange-bg)" textVar="var(--pastel-orange-text)" 
        />
        <StatCard 
          title="Prediction Accuracy" value="94.2%" trend={-8.6} trendText="" 
          bgVar="var(--pastel-green-bg)" textVar="var(--pastel-green-text)" 
        />
        <StatCard 
          title="Active Tankers" value="142" trend={25.4} trendText="(+20.11%)" 
          bgVar="var(--pastel-purple-bg)" textVar="var(--pastel-purple-text)" 
        />
        <StatCard 
          title="Shortage Risk Level" value="High" trend={-12.42} trendText="" 
          bgVar="var(--pastel-pink-bg)" textVar="var(--pastel-pink-text)" 
        />
      </section>

      {/* ROW 1: CHARTS AND ALERTS (2/3 & 1/3) */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* DEMAND FORECAST TRENDS (2/3) */}
        <div className="premium-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)'}}></span> Summary
            </h3>
            <select style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', color: 'var(--text-muted)', padding: '6px 12px', borderRadius: '6px', outline: 'none', fontSize: '0.875rem' }}>
              <option>Last 7 days</option>
              <option>This Month</option>
            </select>
          </div>
          
          <div style={{
            flex: 1, minHeight: '340px', 
            background: 'linear-gradient(to top, var(--primary-glow), transparent)', 
            borderRadius: '12px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', position: 'relative'
          }}>
            [ Interactive Line Chart ]
            {/* Fake Chart Decoration */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,150 C50,150 80,80 150,100 C220,120 280,40 400,60 L400,200 L0,200 Z" fill="var(--primary-glow)" />
              <path d="M0,150 C50,150 80,80 150,100 C220,120 280,40 400,60" fill="none" stroke="var(--primary)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>

        {/* ALERTS PANEL (1/3) */}
        <div className="premium-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Live Alerts
            </h3>
            <span style={{fontSize: '1.25rem', color: 'var(--text-muted)', cursor: 'pointer'}}>...</span>
          </div>
          <div>
            <TimelineItem time="10:42 AM" ward="Ward 12" title="Predicted Shortage" desc="Demand exceeded supply threshold by 14%." type="critical" />
            <TimelineItem time="09:15 AM" ward="Ward 08" title="Supply Drop Detected" desc="Main pipeline flow rate decreased by 200 L/s." type="warning" />
            <TimelineItem time="08:30 AM" ward="City Center" title="Complaint Spike" desc="45 new water quality complaints logged." type="info" />
          </div>
        </div>

      </section>

      {/* ROW 2: TABLES AND HEATMAP (2/3 & 1/3) */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* TANKER RECOMMENDATION PANEL (2/3) */}
        <div className="premium-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Tanker Recommendation Engine</h3>
            <button style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '6px 12px', borderRadius: '8px', fontSize: '0.875rem' }}>
              View All
            </button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Ward</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Risk Level</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Tankers</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 12 (North)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-pink-text)', background: 'var(--pastel-pink-bg)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>Critical</span></td>
                  <td style={{ padding: '16px 8px' }}>14 units</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-orange-text)', background: 'var(--pastel-orange-bg)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>• Pending</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 08 (East)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-orange-text)', background: 'var(--pastel-orange-bg)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>High</span></td>
                  <td style={{ padding: '16px 8px' }}>8 units</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-pink-text)', background: 'var(--pastel-pink-bg)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>• Canceled</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 04 (Central)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-green-text)', background: 'var(--pastel-green-bg)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>Moderate</span></td>
                  <td style={{ padding: '16px 8px' }}>2 units</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--pastel-green-text)', background: 'var(--pastel-green-bg)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>• Shipped</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* HEATMAP (1/3) */}
        <div className="premium-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Heatmap
            </h3>
            <span style={{fontSize: '1.25rem', color: 'var(--text-muted)', cursor: 'pointer'}}>...</span>
          </div>

          <div style={{
            flex: 1, minHeight: '340px', 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-light)', 
            borderRadius: '12px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)'
          }}>
            [ Interactive Map Here ]
          </div>
        </div>

      </section>

    </div>
  );
};

export default Dashboard;
