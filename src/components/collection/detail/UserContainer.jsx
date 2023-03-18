import React from "react";
import { defaultImage, handleImgError } from "utils/handleImgError";

const UserContainer = ({ collection }) => {
  return (
    <div className="flex w-full items-center space-x-[3rem] px-[2rem]">
      <img
        src={collection?.image || defaultImage}
        alt="avatar"
        className="h-[6rem] w-[6rem] rounded-full bg-primary-300 object-cover ring-1 ring-primary-400 ring-offset-2"
        onError={handleImgError}
      />
      <div className="flex flex-1 flex-col ">
        <h3 className="text-[1.8rem] font-semibold">
          {collection?.name || "제주도 맛집"}
        </h3>
        <div className="flex w-full">
          <p className="Cap4 flex-1 text-primary-500 ">
            {collection?.description || "좋은 곳만 모았다."}
          </p>
          {/* <button className="Cap4 hover:text-primary-500">전체공개</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
