import React from "react";
import PostCard from "./PostCard";

const QuestList = ({ posts, lat, lng }) => {
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
