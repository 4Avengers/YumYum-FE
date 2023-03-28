import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const RestaurantHeader = ({ hasBack, onClick, restaurant }) => {
  return (
    <header className="screen-width fixed top-0 z-[99]  flex w-screen justify-between bg-white px-[2rem] py-[1.5rem]">
      <div className="flex  space-x-[1rem]">
        {hasBack && (
          <span className="cursor-pointer" onClick={onClick}>
            <BiChevronLeft
              size="3rem"
              className="#444444 hover:text-primary-500"
              strokeWidth="0.1"
            />
          </span>
        )}
        <div className="flex flex-col space-y-[0.4rem]">
          <h3 className="text-[2rem] font-semibold">
            {restaurant?.place_name}
          </h3>
          <div className="Cap2 flex space-x-[1rem] text-primary-500">
            <span>음식점</span>
            <span className="font-light text-primary-400">|</span>
            <span>육류, 고기</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;
