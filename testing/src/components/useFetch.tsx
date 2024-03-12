import { useEffect, useState } from "react";

type FetchProps = {
  url: string;
};

type FetchReturn = {
  data: any;
  loading: boolean;
  error: { message: string } | null;
};

export default function useFetch({ url }: FetchProps) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  const result: FetchReturn = { data, loading, error };
  return result;
}
