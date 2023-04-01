import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakeCommentList = ({ length = 13 }) => {
  const data = Array(length).fill(1);
  return (
    <ul className="mb-[12rem] h-[calc(100vh-18.7rem)]  overflow-y-auto px-[2rem] scrollbar-hide">
      {React.Children.toArray(
        data?.map((_) => (
          <li className="flex space-x-[1.5rem] py-[1rem] first:pt-[2rem]">
            <Skeleton className="h-[3rem] w-[3rem] rounded-full" />
            <div className="flex flex-1 flex-col  space-y-[0.4rem]">
              <Skeleton className="Cap5 w-[12rem]" />
              <div className="flex flex-col">
                <Skeleton className="Cap6" />
                <Skeleton className="Cap6" />
                <Skeleton className="w-[5rem] text-[1rem]" />
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default FakeCommentList;
