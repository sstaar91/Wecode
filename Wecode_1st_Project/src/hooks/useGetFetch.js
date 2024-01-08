import { useState, useEffect } from 'react';

const useGetFetch = api => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getList();
  }, [api]);

  return { data, loading, error };
};

export default useGetFetch;
