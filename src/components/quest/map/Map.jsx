import useGeolocation from "hooks/useGeoLocation";
import { useEffect } from "react";

const { kakao } = window;

const QuestMap = ({ positions }) => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();

  useEffect(() => {
    if (positions?.length === 0) return;
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 6,
    };

    const map = new kakao.maps.Map(container, options);

    const markers = positions
      ?.filter((item) => item[0] !== 0)
      ?.map(([x, y]) => ({
        position: new kakao.maps.LatLng(y, x),
        text: "hi",
      }));

    console.log(markers);

    for (let i = 0; i < markers?.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: markers[i].position,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: markers[i].text,
      });

      kakao.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
      });
    }
  }, [positions, latitude, longitude]);

  return <div id="map" className="w-full flex-1"></div>;
};

export default QuestMap;
