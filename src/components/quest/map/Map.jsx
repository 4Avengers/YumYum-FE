import NotMap from "components/common/post/notPost/NotMap";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import Marker from "./Marker";

const QuestMap = ({ posts, lat, lng }) => {
  const [isFollowing, setIsFollowing] = useState(true);
  if (!lat || !lng) return <NotMap />;
  return (
    <>
      <Map center={{ lat, lng }} className="w-full flex-1" level={10}>
        {posts?.map((post) => {
          return (
            <CustomOverlayMap
              key={post?.id}
              position={{
                lat: Number(post?.restaurant?.y),
                lng: Number(post?.restaurant?.x),
              }}
            >
              <Marker post={post} />
            </CustomOverlayMap>
          );
        })}
      </Map>
      <div className="absolute bottom-[9rem] right-[0%] left-[0%] z-[100] flex justify-center">
        <button
          className="flex  items-center space-x-[0.6rem] rounded-[1rem] bg-white px-[1rem] py-[0.6rem] text-primary-600 shadow-xl hover:text-primary-500"
          onClick={() => setIsFollowing((prev) => !prev)}
        >
          <BsList size="2rem" />
          <span className="Cap3">
            {isFollowing ? "전체 맛집 보기" : "친구 맛집 보기"}{" "}
          </span>
        </button>
      </div>
    </>
  );
};

export default QuestMap;
