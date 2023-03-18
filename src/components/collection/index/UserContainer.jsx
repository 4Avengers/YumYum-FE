import ProfileService from "apis/service/ProfileService";
import React from "react";
import { handleProfileError } from "utils/handleImgError";

const UserContainer = ({ profileId }) => {
  const { data: profile } = ProfileService.ReadProfile(profileId);
  return (
    <div className="flex items-center space-x-[3rem] px-[2rem]">
      <img
        src={profile?.profile_image}
        alt="avatar"
        className="h-[6rem] w-[6rem] rounded-full bg-primary-300 object-cover ring-1 ring-primary-400 ring-offset-2"
        onError={(e) => handleProfileError(e, profileId)}
      />
      <div className="flex flex-col text-[1.8rem] font-semibold">
        <div className="flex">
          <strong className="font-semibold">{profile?.nickname}</strong>
          <span className="">님의</span>
        </div>
        <h3>맛집리스트</h3>
      </div>
    </div>
  );
};

export default UserContainer;
