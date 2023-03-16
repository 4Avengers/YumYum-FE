import { useEffect } from "react";

const Marker = ({ map, lat, lon, onClick }) => {
  useEffect(() => {
    if (!window.naver || !map) {
      return;
    }
    const { naver } = window;
    let marker = null;

    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(lat, lon),
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, "click", onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map, onClick, lat, lon]);

  return null;
};

export default Marker;
