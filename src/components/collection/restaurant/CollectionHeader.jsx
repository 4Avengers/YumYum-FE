import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const CollectionHeader = ({ hasBack, onClick, title, category }) => {
  return (
    <header className="screen-width fixed top-0 flex h-[5rem] w-screen items-center justify-between bg-white px-[2rem]">
      <div className="flex items-center space-x-[1rem]">
        {hasBack && (
          <span className="cursor-pointer" onClick={onClick}>
            <BiChevronLeft
              size="3rem"
              className="#444444 hover:text-primary-500"
              strokeWidth="0.1"
            />
          </span>
        )}
        <div className="flex flex-col ">
          <div className="flex items-center space-x-[1rem]">
            <h3 className="text-[2rem] font-semibold">{title}</h3>
            <span className="Cap4  text-primary-500">{category || "카페"}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CollectionHeader;
