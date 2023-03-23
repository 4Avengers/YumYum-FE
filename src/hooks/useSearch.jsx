import instance from "apis/instance";
import { useEffect, useState } from "react";

const useSearch = ({ status, keyword, page = 1 }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let abortController = new AbortController();

    if (keyword?.trim()?.length > 0 && page) {
      (async () => {
        try {
          const response = await instance.get(
            `search/${status}?keyword=${keyword}&page=${page}`,
            {
              signal: abortController.signal,
            }
          );
          setIsLoading(false);
          if (page > 1) {
            setData((prev) => [...prev, ...response.data]);
          } else {
            setData(response.data);
          }
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
  }, [keyword, status, page]);

  return { data, isLoading, error };
};

export default useSearch;
