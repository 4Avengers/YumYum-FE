import MapService from "apis/service/MapService";
import React from "react";
import PostCard from "./PostCard";

const QuestList = ({ lat, lng }) => {
  const { data: posts } = MapService.GetMapList();
  return (
    <div className="w-full flex-1  pt-[10rem]">
      <ul className="flex flex-col space-y-[2rem] px-[2rem] pb-[2rem]">
        {posts?.map((post) => (
          <PostCard key={post?.id} post={post} lat={lat} lng={lng} />
        ))}
      </ul>
    </div>
  );
};

export default QuestList;
