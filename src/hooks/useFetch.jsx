import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      response.ok ? setData(json) : setError(json.message);
      setLoading(false);
    }

    getFetchUrl();
  }, [url]);

  return [data, loading, error];
}

export { useFetch };
