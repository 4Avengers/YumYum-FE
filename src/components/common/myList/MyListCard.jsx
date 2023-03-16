import React from "react";
import cls from "utils/cls";

const MyListCard = ({ myListData, isInclude, setMyList }) => {
  console.log(myListData, isInclude);
  return (
    <li className="flex items-center justify-between border-b px-[2rem] py-[1rem]">
      <span className="Cap2 flex-1">{myListData.name}</span>
      {isInclude ? (
        <button
          className={cls(
            "Cap4 rounded-[1rem] border  bg-primary-700 p-[0.7rem_1rem] text-primary-100"
          )}
          onClick={(e) => {
            e.stopPropagation();
            setMyList((prev) => [
              ...prev.filter((item) => item !== myListData?.id),
            ]);
          }}
        >
          선택
        </button>
      ) : (
        <button
          className="Cap4 rounded-[1rem] border border-primary-400 p-[0.7rem_1rem] text-primary-400 transition-colors hover:border-primary-600  hover:text-primary-600"
          onClick={(e) => {
            e.stopPropagation();
            setMyList((prev) => [...prev, myListData.id]);
          }}
        >
          선택
        </button>
      )}
    </li>
  );
};

export default MyListCard;
