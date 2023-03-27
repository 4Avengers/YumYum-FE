import React from "react";
import { FaStar } from "react-icons/fa";

const RestaurantPostCard = () => {
  return (
    <li className="flex cursor-pointer space-x-[1rem] px-[2rem] py-[1rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]">
      <div className="h-[10rem] w-[10rem] rounded-[0.7rem] bg-gray-200" />
      <div className="flex flex-1 flex-col space-y-[1rem] py-[0.3rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.7rem] ">
            <div className="h-[3rem] w-[3rem] rounded-full bg-gray-200" />
            <span className="Cap3">유저 아이디</span>
          </div>
          <div className="flex items-center gap-[0.7rem]">
            <FaStar size="1.5rem" className="text-star-200" />
            <span className="Cap3">4</span>
          </div>
        </div>
        <p className="Cap4 overflow-hidden text-ellipsis  whitespace-pre-wrap line-clamp-2">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요ㅍ
        </p>
      </div>
    </li>
  );
};

export default RestaurantPostCard;
