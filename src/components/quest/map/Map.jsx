import { useCallback, useEffect, useRef } from "react";

const QuestMap = ({ latitude, longitude, onLoad }) => {
  const mapRef = useRef(null);

  const initializeMap = useCallback(() => {
    // 여기에서 네이버 맵 초기화 코드를 작성하세요
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
    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  }, [latitude, longitude, onLoad]);

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}`;
      script.async = true;
      //script.onLoad = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [latitude, longitude, initializeMap]);

  return (
    <>
      <div id="map" ref={mapRef} className="w-full flex-1" />
    </>
  );
};

export default QuestMap;
