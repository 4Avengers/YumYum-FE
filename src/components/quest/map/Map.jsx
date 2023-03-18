import useGeolocation from "hooks/useGeoLocation";

import { useEffect } from "react";
import { defaultImage } from "utils/handleImgError";
const { kakao } = window;

const QuestMap = ({ posts }) => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();

  useEffect(() => {
    if (!posts) return;

    const container = document.getElementById("map");

    // 초기 설정 (중심값 및 확대레벨)
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 7,
      draggable: true,
      scrollwheel: true,
    };

    // 맵 생성
    const map = new kakao.maps.Map(container, options);

    posts?.forEach((post) => {
      var content =
        `<div class="customoverlay" id="post${post?.id}" >` +
        `  <img class="map-avatar" src="${
          post?.user?.profile_image?.length < 20
            ? defaultImage
            : post?.user?.profile_image
        }" alt="avatar" />` +
        '  <div class="map-container">' +
        `    <span class="map-place_name">${post?.restaurant?.place_name}</span>` +
        `    <div class="map-info">` +
        `      <span class="map-info_star">★</span>` +
        `      <span class="map-info_rating">${post?.rating}</span>` +
        `      <span class="map-info_category">${
          post?.restaurant?.category_name?.split(">")[1]
        }</span>` +
        `    </div>` +
        " </div>" +
        "</div>";

      new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(
          Number(post?.restaurant?.y),
          Number(post?.restaurant?.x)
        ),
        content: content,
        yAnchor: 1,
      });
    });
  }, [posts, latitude, longitude]);

  return <div id="map" className="w-full flex-1"></div>;
};

export default QuestMap;
