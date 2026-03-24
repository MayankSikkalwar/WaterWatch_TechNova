import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Droplet, AlertTriangle, Menu } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Map View', path: '/map', icon: <Map size={20} /> },
    { name: 'Wards & Root Cause', path: '/wards/1', icon: <Droplet size={20} /> }, // Default to ward 1 for demo
    { name: 'Alerts', path: '/alerts', icon: <AlertTriangle size={20} /> }
  ];

  return (
    <aside className={`sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Droplet className="sidebar-logo-icon" size={28} />
        {sidebarOpen && <h2 className="logo-text" style={{fontSize: '1.25rem', fontWeight: '700', color: '#ffffff'}}>WaterWatch</h2>}
      </div>
      
      <div className="sidebar-nav">
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}
            title={!sidebarOpen ? link.name : ""}
          >
            {link.icon}
            {sidebarOpen && <span>{link.name}</span>}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
