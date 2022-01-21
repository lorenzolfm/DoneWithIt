import { useState } from 'react';
import { Listing } from '../types';

interface useApiReturn {
  request(...args: any[]): Promise<void>;
  data: (Listing | never)[];
  error: boolean;
  loading: boolean;
}
export const useApi = (callback: Function): useApiReturn => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await callback(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false)
    setData(response.data);
  };

  return { request, data, error, loading };
}
