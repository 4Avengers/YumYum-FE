import { geoLocationAtom } from "atoms/geoLocationAtom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

const useGeolocation = () => {
  const [location, setLocation] = useRecoilState(geoLocationAtom);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Geolocation API를 지원하는지 확인합니다.
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Geolocation API를 사용하여 현재 위치의 위도와 경도를 가져옵니다.
    const successHandler = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const errorHandler = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, [setLocation]);

  return { location, error };
};

export default useGeolocation;
