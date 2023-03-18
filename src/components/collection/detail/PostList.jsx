import React from "react";
import { FaStar } from "react-icons/fa";

const PostList = () => {
  return (
    <ul className="flex w-full flex-col pb-[3rem]">
      {[1, 2, 3, 4, 5, 6, 7]?.map((item) => (
        <li
          key={item}
          className="flex cursor-pointer space-x-[2rem] px-[2rem] py-[2rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
        >
          <div className="h-[10rem] w-[10rem] rounded-[1rem] bg-gray-500" />
          <div className="flex flex-1 flex-col space-y-[0.5rem] ">
            <div className="flex justify-between">
              <h3 className="Cap1">일원 선셋 비치</h3>
              <div className="flex items-center space-x-[0.5rem]">
                <FaStar size="2rem" className="text-primary-600" />
                <span className="Cap2">4</span>
              </div>
            </div>
            <p className="Cap4 overflow-hidden text-ellipsis  line-clamp-3">
              반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.반갑습니다.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
