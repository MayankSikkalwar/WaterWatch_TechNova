export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const USER_ROLES = {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  VIEWER: 'VIEWER'
};

export const ALERT_SEVERITY = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  INFO: 'info'
};

export const THEME_COLORS = {
  primary: '#0F52BA',
  secondary: '#38bdf8',
  danger: '#ef4444',
  warning: '#f59e0b',
  success: '#10b981',
  background: '#0f172a',
  surface: '#1e293b',
  text: '#f8fafc',
  textMuted: '#94a3b8'
};
