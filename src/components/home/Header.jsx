import React from "react";

const Header = ({ title = "", subTitle = "", onClick }) => {
  return (
    <div className="flex justify-between px-[2rem]">
      <div className="flex items-end space-x-[2rem] ">
        <h3 className="text-[2rem] font-bold">{title}</h3>
        <span className="Cap4 mb-[0.1rem] text-primary-500">{subTitle}</span>
      </div>
      <div
        className="group flex cursor-pointer items-center space-x-[0.3rem] hover:text-primary-600"
        onClick={onClick}
      >
        <span className="Cap3 text-primary-500 group-hover:text-primary-600">
          더보기
        </span>
        <span className="Cap5 text-primary-500 group-hover:text-primary-600">
          &rarr;
        </span>
      </div>
    </div>
  );
};

export default Header;
