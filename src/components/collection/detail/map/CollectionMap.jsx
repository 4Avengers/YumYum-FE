import React from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import CollectionMarker from "./Marker";

const CollectionMap = ({ posts, lat, lng, setOpenModal, setRestaurantId }) => {
  if (!lat || !lng) return null;
  console.log(posts);
  return (
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
            <CollectionMarker
              post={post}
              setOpenModal={setOpenModal}
              setRestaurantId={setRestaurantId}
            />
          </CustomOverlayMap>
        );
      })}
    </Map>
  );
};

export default CollectionMap;
