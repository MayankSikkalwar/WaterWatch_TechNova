import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Menu, Bell, Settings } from 'lucide-react';

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <nav className="navbar">
      <div style={{display: 'flex', alignItems: 'center', gap: '20px', flex: 1}}>
        <Menu 
          size={24} 
          style={{cursor: 'pointer', color: 'var(--text-muted)'}} 
          onClick={toggleSidebar} 
        />
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '1.25rem'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
          WaterWatch
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(34, 211, 238, 0.05)',
        padding: '6px 16px',
        borderRadius: '20px',
        border: '1px solid var(--border-light)',
      }}>
        <span style={{fontSize: '0.875rem', color: 'var(--text-muted)'}}>Status:</span>
        <span style={{marginLeft: '8px', fontSize: '0.875rem', color: 'var(--success)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px'}}>
          <span style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block', boxShadow: '0 0 8px var(--success)'}}></span>
          Live Analytics
        </span>
      </div>

      <div className="profile-section" style={{flex: 1, justifyContent: 'flex-end'}}>
        <div style={{position: 'relative', cursor: 'pointer', color: 'var(--text-muted)'}}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', 
            top: '-4px', 
            right: '-4px', 
            background: 'var(--danger)', 
            width: '10px', 
            height: '10px', 
            borderRadius: '50%',
            border: '2px solid var(--bg-dark)'
          }}></span>
        </div>
        <Settings size={20} style={{cursor: 'pointer', color: 'var(--text-muted)'}} />
        <div className="avatar">AD</div>
      </div>
    </nav>
  );
};

export default Navbar;
