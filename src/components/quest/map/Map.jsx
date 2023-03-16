import useGeolocation from "hooks/useGeoLocation";
import { useEffect } from "react";
import { defaultImage } from "utils/handleImgError";
const { kakao } = window;

const CustomMarker = ({ place_name }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "30px",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        textAlign: "center",
        lineHeight: "30px",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      {place_name}
    </div>
  );
};

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
      level: 6,
    };

    // 맵 생성
    const map = new kakao.maps.Map(container, options);

    posts?.forEach((post) => {
      var content =
        '<div class="customoverlay">' +
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

      var customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(
          Number(post?.restaurant?.y),
          Number(post?.restaurant?.x)
        ),
        content: content,
        yAnchor: 1,
      });
    });

    // // 들어갈 정보들을 마커로 뿌려주는 과정
    // for (let i = 0; i < markers?.length; i++) {
    //   const marker = new kakao.maps.Marker({
    //     map: map,
    //     position: markers[i].position,
    //   });

    //   const infowindow = new kakao.maps.InfoWindow({
    //     content: markers[i].text,
    //   });

    //   // 클릭시 정보가 보임
    //   kakao.maps.event.addListener(marker, "click", () => {
    //     infowindow.open(map, marker);
    //   });
    // }
  }, [posts, latitude, longitude]);

  return <div id="map" className="w-full flex-1"></div>;
};

export default QuestMap;
