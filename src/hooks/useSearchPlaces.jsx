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
    if (query !== "" && location.latitude) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const ps = new window.kakao.maps.services.Places();
          const center = new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude
          );

          ps.keywordSearch(
            query,
            (data, status, pagination) => {
              if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data);
              }
            },
            {
              location: center,
            }
          );
        });
      };
    }
  }, [query, location]);
  return { places, onChangeQuery, resetPlaces };
};

export default useSearchPlaces;
