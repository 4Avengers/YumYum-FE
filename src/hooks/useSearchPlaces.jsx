import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useSearchPlaces = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const onChangeQuery = useCallback((location, keyword) => {
    setQuery(keyword);
    setLocation(location);
  }, []);

  const resetPlaces = useCallback(() => {
    setPlaces([]);
  }, []);

  useEffect(() => {
    // 위치 정보 있을 때만 실행
    (async () => {
      if (query?.trim() !== "" && location.latitude) {
        const { longitude, latitude } = location;
        try {
          const response = await axios.get(
            `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&x=${longitude}&y=${latitude}&category_group_code=FD6,CE7`,
            {
              headers: {
                Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
              },
            }
          );
          setPlaces(response?.data?.documents);
        } catch (e) {}
      }
    })();
  }, [query, location]);
  return { places, onChangeQuery, resetPlaces };
};

export default useSearchPlaces;
