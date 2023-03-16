import { useEffect } from "react";

const { naver } = window;

const Marker = ({ map, coordinates, image }) => {
  useEffect(() => {
    let marker = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon: image,
      });
    }

    // if (onClick) {
    //   naver.maps.Event.addListener(marker, "click", onClick);
    // }

    return () => {
      marker?.setMap(null);
    };
  }, [map, coordinates, image]);

  return null;
};

export default Marker;
