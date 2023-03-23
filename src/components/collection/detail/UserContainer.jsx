import React from "react";
import { useNavigate } from "react-router-dom";
import { defaultImage, handleImgError } from "utils/handleImgError";

const UserContainer = ({ collection, profile }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full items-center space-x-[3rem] px-[2rem]">
      <img
        src={profile?.profile_image || defaultImage}
        alt="avatar"
        className="h-[6rem] w-[6rem] cursor-pointer rounded-full bg-primary-300 object-cover ring-1 ring-primary-400 ring-offset-2"
        onError={handleImgError}
        onClick={() => navigate(`/profile/${profile?.id}`)}
      />
      <div className="flex flex-1 flex-col ">
        <h3 className="text-[1.8rem] font-semibold">{collection?.name}</h3>
        <div className="flex w-full">
          <p className="Cap4 flex-1 text-primary-500 ">
            {collection?.description}
          </p>
          {/* <button className="Cap4 hover:text-primary-500">전체공개</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
