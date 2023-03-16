import { mapAtom } from "atoms/mapAtom";
import useGeolocation from "hooks/useGeoLocation";
import { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import Markers from "./Markers";

const QuestMap = ({ posts }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useRecoilState(mapAtom);

  const {
    location: { latitude, longitude },
  } = useGeolocation();

  // 리코일에 Map 객체 저장
  const onLoad = useCallback(
    (map) => {
      setMap(map);
      window.naver.maps.Event.addListener(map, "click", () =>
        console.log("clear")
      );
    },
    [setMap]
  );

  console.log(posts);

  // map 초기화
  const initializeMap = useCallback(() => {
    if (!window.naver) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(latitude, longitude),
      zoom: 10,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: window.naver.maps.Position.BOTTOM_LEFT,
      },
    };
    // 맵 생성
    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  }, [latitude, longitude, onLoad]);

  // unmount시에 ref destroy
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  // naver 객체가 없을 경우 script 삽입
  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [latitude, longitude, initializeMap]);

  return (
    <>
      <div id="map" className="w-full flex-1 bg-primary-200 " />
      {map && <Markers posts={posts} map={map} />}
    </>
  );
};

export default QuestMap;
