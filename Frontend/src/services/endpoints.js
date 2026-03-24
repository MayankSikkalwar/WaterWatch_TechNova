const API_BASE = '/api/v1';

export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE}/auth/login`,
    LOGOUT: `${API_BASE}/auth/logout`,
    VERIFY: `${API_BASE}/auth/verify`,
  },
  WARDS: {
    GET_ALL: `${API_BASE}/wards`,
    GET_BY_ID: (id) => `${API_BASE}/wards/${id}`,
  },
  PREDICTIONS: {
    GET_ALL: `${API_BASE}/predictions`,
    GET_LATEST: `${API_BASE}/predictions/latest`,
  },
  ROOT_CAUSE: {
    GET_BY_ID: (id) => `${API_BASE}/root-cause/${id}`,
    ANALYZE: `${API_BASE}/root-cause/analyze`,
  },
  TANKERS: {
    GET_RECOMMENDATIONS: `${API_BASE}/recommendations`,
    GET_STATUS: `${API_BASE}/tankers/status`,
  },
  ALERTS: {
    GET_ACTIVE: `${API_BASE}/alerts/active`,
    SUBSCRIBE: `${API_BASE}/alerts/subscribe`,
  }
};
