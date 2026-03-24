import { useState, useEffect, useCallback } from 'react';
import apiClient from '../services/apiClient';

export const useFetch = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeFetch = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(url);
      setData(response.data);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    executeFetch();
  }, [executeFetch]);

  return { data, loading, error, refetch: executeFetch };
};
