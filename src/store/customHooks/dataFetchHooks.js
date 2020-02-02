import React, { useState, useEffect } from 'react';
import { callApi } from '../api/api';

const baseUrl = '/api/';

export function dataFetchHooks(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const getData = await callApi(`${baseUrl}${url}`);
      setData(getData);
      setIsLoading(false);
    }

    fetchData();
  }, [url]);

  return { data, isLoading };
}
