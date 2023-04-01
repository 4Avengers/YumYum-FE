import React from "react";
import FakePostCard from "./FakePostCard";

const FakePostList = ({ length = 8 }) => {
  const data = Array(length).fill(1);
  return (
    <div className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide">
      {React.Children.toArray(data?.map((_) => <FakePostCard />))}
    </div>
  );
};

export default FakePostList;
