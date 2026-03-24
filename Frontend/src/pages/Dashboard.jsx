import React from 'react';
import { usePredictionContext } from '../features/predictions/predictionContext';
import { 
  Droplet, TrendingUp, AlertCircle, Activity, 
  Users, Clock, CloudRain, MessageSquare, 
  MapPin, ShieldAlert, BarChart3, Truck, ArrowRight
} from 'lucide-react';

const StatCard = ({ title, value, icon, trend, colorClass }) => (
  <div className="premium-card">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <div>
        <p className="metric-label">{title}</p>
        <h3 className="highlight-metric">{value}</h3>
      </div>
      <div style={{
        padding: '12px', 
        background: `var(--bg-surface)`, 
        border: '1px solid var(--border-light)',
        borderRadius: '12px'
      }}>
        {icon}
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
      <span style={{
        color: trend >= 0 ? 'var(--success)' : 'var(--danger)', 
        display: 'flex', alignItems: 'center', 
        fontSize: '0.875rem', fontWeight: '600',
        background: trend >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        padding: '4px 8px', borderRadius: '6px'
      }}>
        {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>
      <span style={{color: 'var(--text-muted)', fontSize: '0.875rem'}}>vs last week</span>
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
      <div style={{ flex: 1, background: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: '16px', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{title}</span>
          <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '12px' }}>{ward}</span>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{desc}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { predictions, loading } = usePredictionContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '40px' }}>
      
      {/* SECTION 1: HEADER */}
      <section className="page-header" style={{ marginBottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 className="page-title">Executive Dashboard</h1>
            <p className="page-subtitle">Real-time water demand and shortage predictions</p>
          </div>
          <div>
            <button className="btn-primary" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CloudRain size={16} /> Generate Report
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: KPI CARDS GRID */}
      <section className="grid-dashboard" style={{ marginBottom: 0 }}>
        <StatCard title="Total Demand" value="2.4 ML" icon={<Droplet size={24} color="var(--primary)" />} trend={4.2} colorClass="primary" />
        <StatCard title="Shortage Risk Level" value="High" icon={<AlertCircle size={24} color="var(--danger)" />} trend={12.5} colorClass="danger" />
        <StatCard title="Active Tankers" value="142" icon={<Truck size={24} color="var(--warning)" />} trend={-2.4} colorClass="warning" />
        <StatCard title="Prediction Accuracy" value="94.2%" icon={<TrendingUp size={24} color="var(--success)" />} trend={1.2} colorClass="success" />
      </section>

      {/* SECTION 3 & 4: CHARTS AND MAPS ROW */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        
        {/* SECTION 3: DEMAND FORECAST TRENDS */}
        <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart3 size={20} color="var(--primary)" /> Demand Forecast Trends
            </h3>
            <select style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-light)', color: 'var(--text-muted)', padding: '6px 12px', borderRadius: '6px', outline: 'none' }}>
              <option>This Week</option>
              <option>Next 7 Days</option>
              <option>Next 30 Days</option>
            </select>
          </div>
          
          <div style={{
            flex: 1, minHeight: '340px', 
            background: 'linear-gradient(to top, rgba(34, 211, 238, 0.05), transparent)', 
            border: '1px dashed var(--border-light)', 
            borderRadius: '12px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', position: 'relative'
          }}>
            [ Interactive Line Chart Renders Here ]
            
            {/* Fake Chart Decoration */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0,150 C50,150 80,80 150,100 C220,120 280,40 400,60 L400,200 L0,200 Z" fill="rgba(34, 211, 238, 0.1)" />
              <path d="M0,150 C50,150 80,80 150,100 C220,120 280,40 400,60" fill="none" stroke="var(--primary)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>

        {/* SECTION 4: WATER SHORTAGE RISK HEATMAP */}
        <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={20} color="var(--danger)" /> Water Shortage Risk Heatmap
            </h3>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', fontWeight: '500' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--success)'}}></div> Low</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--warning)'}}></div> Med</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--danger)'}}></div> High</span>
            </div>
          </div>

          <div style={{
            flex: 1, minHeight: '340px', 
            background: 'var(--bg-dark)', 
            border: '1px solid var(--border-light)', 
            borderRadius: '12px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)'
          }}>
            [ Interactive Map Component Renders Here ]
          </div>
        </div>

      </section>

      {/* SECTION 5: ROOT CAUSE ANALYSIS */}
      <section>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '24px' }}>Root Cause Analysis</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          <RootCauseCard title="Population Density" impact="42%" icon={<Users size={20} />} />
          <RootCauseCard title="Supply Hours" impact="28%" icon={<Clock size={20} />} />
          <RootCauseCard title="Rainfall Deficit" impact="18%" icon={<CloudRain size={20} />} />
          <RootCauseCard title="Complaint Volume" impact="12%" icon={<MessageSquare size={20} />} />
        </div>
      </section>

      {/* SECTION 6 & 7: TABLES AND ALERTS ROW */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        
        {/* SECTION 6: TANKER RECOMMENDATION PANEL */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Tanker Recommendation Engine</h3>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              View All <ArrowRight size={16} />
            </button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Ward</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Risk Level</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Recommended Tankers</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Priority Status</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 12 (North)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--danger)', background: 'rgba(239, 68, 68, 0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>Critical</span></td>
                  <td style={{ padding: '16px 8px' }}>14 units</td>
                  <td style={{ padding: '16px 8px' }}>Urgent</td>
                  <td style={{ padding: '16px 8px' }}><button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>Dispatch</button></td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 08 (East)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--warning)', background: 'rgba(245, 158, 11, 0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>High</span></td>
                  <td style={{ padding: '16px 8px' }}>8 units</td>
                  <td style={{ padding: '16px 8px' }}>High</td>
                  <td style={{ padding: '16px 8px' }}><button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.75rem', opacity: 0.8 }}>Dispatch</button></td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 8px', fontWeight: '500' }}>Ward 04 (Central)</td>
                  <td style={{ padding: '16px 8px' }}><span style={{ color: 'var(--success)', background: 'rgba(34, 197, 94, 0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>Moderate</span></td>
                  <td style={{ padding: '16px 8px' }}>2 units</td>
                  <td style={{ padding: '16px 8px' }}>Normal</td>
                  <td style={{ padding: '16px 8px' }}><button className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border-light)' }}>Review</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 7: ALERTS PANEL */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={20} color="var(--warning)" /> Live Alerts
            </h3>
          </div>
          
          <div>
            <TimelineItem time="10:42 AM" ward="Ward 12" title="Predicted Shortage" desc="Demand exceeded supply threshold by 14%." type="critical" />
            <TimelineItem time="09:15 AM" ward="Ward 08" title="Supply Drop Detected" desc="Main pipeline flow rate decreased by 200 L/s." type="warning" />
            <TimelineItem time="08:30 AM" ward="City Center" title="Complaint Spike" desc="45 new water quality complaints logged in last hour." type="info" />
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ 
        marginTop: '40px', 
        paddingTop: '24px', 
        borderTop: '1px solid var(--border-light)', 
        display: 'flex', 
        justifyContent: 'space-between',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
      }}>
        <div>WaterWatch © 2026. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span style={{ cursor: 'pointer', hover: { color: 'var(--primary)' } }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          <span style={{ cursor: 'pointer' }}>Support</span>
        </div>
      </footer>

    </div>
  );
};

export default Dashboard;
