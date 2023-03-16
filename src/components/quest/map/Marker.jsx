import { useEffect } from "react";

const Marker = ({ map, lat, lon, onClick, icon }) => {
  useEffect(() => {
    if (!window.naver || !map) return;

    let marker = null;

    const { naver } = window;

    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(lat, lon),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map, onClick, lat, lon, icon]);

  return null;
};

export default Marker;
