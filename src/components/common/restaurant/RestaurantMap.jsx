import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const RestaurantMap = ({ place }) => {
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: place?.y,
        lng: place?.x,
      }}
      className=" h-[30vh] min-h-[20rem] w-full bg-gray-200"
      level={4} // 지도의 확대 레벨
    >
      <MapMarker // 마커를 생성합니다
        position={{
          // 마커가 표시될 위치입니다
          lat: place?.y,
          lng: place?.x,
        }}
      />
    </Map>
  );
};

export default RestaurantMap;
