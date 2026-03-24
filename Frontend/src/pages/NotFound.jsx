import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{fontSize: '6rem', fontWeight: '800', background: 'linear-gradient(90deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>404</h1>
      <h2 style={{fontSize: '2rem', marginBottom: '16px'}}>Page Not Found</h2>
      <p style={{color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '400px'}}>
        The resource you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">Return to Dashboard</Link>
    </div>
  );
};

export default NotFound;
