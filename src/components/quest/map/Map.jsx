import NotMap from "components/common/post/notPost/NotMap";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import Marker from "./Marker";

const QuestMap = ({ posts, lat, lng }) => {
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
    </>
  );
};

export default QuestMap;
