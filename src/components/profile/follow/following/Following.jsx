import FollowService from "apis/service/FollowService";
import React from "react";
import { useNavigate } from "react-router-dom";
import { handleProfileError } from "utils/handleImgError";

const ProfileFollowing = ({ profileId, closeModal }) => {
  const { data: followings } = FollowService.ReadFollowings(profileId);
  console.log(followings);
  const navigate = useNavigate();

  const handleNaivgate = (id) => {
    navigate(`/profile/${id}`);
    closeModal();
  };
  return (
    <ul className="pt-[1rem]">
      {followings?.map((user) => (
        <li
          key={user?.id}
          className="flex cursor-pointer items-center  space-x-[1rem] py-[1rem] px-[3rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          onClick={() => handleNaivgate(user?.id)}
        >
          <img
            className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary-300 object-cover"
            src={user?.profile_image}
            alt="avatar"
            onError={(e) => handleProfileError(e, user?.id)}
          />
          <div />
          <span className="Cap2">{user?.nickname}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProfileFollowing;
