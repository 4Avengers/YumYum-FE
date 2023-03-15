import instance from "apis/instance";
import { useEffect, useState } from "react";

const useSearch = ({ status, keyword }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();

    if (keyword?.trim()?.length > 0) {
      (async () => {
        try {
          const response = await instance.get(
            `search/${status}?keyword=${keyword}`,
            {
              signal: abortController.signal,
            }
          );
          setIsLoading(false);
          setData(response.data);
        } catch (error) {
          if (error.name === "AbortError") {
            setError(error);
            setIsLoading(false);
          }
        }
      })();
    }
    return () => {
      abortController.abort();
    };
  }, [keyword, status]);

  return { data, isLoading, error };
};

export default useSearch;
