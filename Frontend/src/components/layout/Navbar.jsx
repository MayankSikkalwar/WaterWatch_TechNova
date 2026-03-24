import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Menu, Bell, Settings, Search } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <nav className="navbar">
      <div style={{display: 'flex', alignItems: 'center', gap: '24px', flex: 1}}>
        <Menu 
          size={24} 
          style={{cursor: 'pointer', color: 'var(--text-muted)'}} 
          onClick={toggleSidebar} 
        />
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px', 
          background: 'var(--bg-dark)', padding: '10px 16px', borderRadius: '12px',
          width: '320px', border: '1px solid var(--border-light)'
        }}>
          <Search size={18} color="var(--text-muted)" />
          <input type="text" placeholder="Search" style={{border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-main)', width: '100%', fontSize: '0.9rem'}} />
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

      <div className="profile-section" style={{flex: 1, justifyContent: 'flex-end', gap: '16px'}}>
        <ThemeToggle />
        <div style={{position: 'relative', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center'}}>
          <Bell size={20} />
          <span style={{
            position: 'absolute', 
            top: '-2px', 
            right: '-2px', 
            background: 'var(--danger)', 
            width: '10px', 
            height: '10px', 
            borderRadius: '50%',
            border: '2px solid var(--bg-surface)'
          }}></span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'var(--text-muted)'}}>
          <Settings size={20} />
        </div>
        <div className="avatar">AD</div>
      </div>
    </nav>
  );
};

export default Navbar;
