import MapService from "apis/service/MapService";
import { useCallback } from "react";
import useGeolocation from "./useGeoLocation";

const useMap = () => {
  const { data: map } = MapService.GetMap();
  const { location } = useGeolocation();

  // const initializeMap = useCallback((map) => {
  //   // mutate(MAP_KEY, map);
  // }, []);

  const resetMapOptions = useCallback(() => {
    map.morph(
      new window.naver.maps.LatLng(location.latitude, location.longitude),
      10
    );
  }, [map, location]);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    resetMapOptions,
    getMapOptions,
  };
};
export default useMap;
