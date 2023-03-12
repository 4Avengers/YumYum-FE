import React from "react";
import cls from "utils/cls";

const MyListCard = ({ myListData, isInclude, setMyList }) => {
  return (
    <li className="flex items-center justify-between border-b px-[2rem] py-[1rem]">
      <span className="Cap2 flex-1">{myListData.name}</span>
      <button
        className={cls(
          "Cap4 rounded-[1rem] border  p-[0.7rem_1rem]",
          isInclude
            ? "bg-primary-700 text-primary-100"
            : "border-primary-400 text-primary-400 transition-colors hover:border-primary-600 hover:text-primary-600"
        )}
        onClick={(e) => {
          e.preventDefault();
          setMyList(myListData.id);
        }}
      >
        선택
      </button>
    </li>
  );
};

export default MyListCard;
