import React from "react";
import FakePostCard from "./FakePostCard";

const FakePostList = () => {
  return (
    <div className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide">
      {React.Children.toArray(data?.map((_) => <FakePostCard />))}
    </div>
  );
};

export default FakePostList;

const data = Array(8).fill(1);
