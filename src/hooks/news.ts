import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface Params {
  lng: string;
}

export interface News {
  id: number;
  date: string;
  title: string;
  content: string;

}

export const useNewsGet = () => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<News[]>();

  const fetch = async (path: string, params?: Params) => {
    setError(null);
    setLoading(true);

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_IDP_API_URL}/${path}`,
        {
          params: {
            ...params,
          },
        },
      );

      setLoading(false);

      return setData(res.data);
    } catch (err) {
      return setError(err as AxiosError);
    }
  };

  return {
    loading,
    error,
    data,
    fetch,
  };
};
