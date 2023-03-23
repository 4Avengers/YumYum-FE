import FollowService from "apis/service/FollowService";
import useObserver from "hooks/useObserver";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { handleProfileError } from "utils/handleImgError";

const ProfileFollower = ({ profileId, closeModal }) => {
  const {
    data: followers,
    hasNextPage,
    fetchNextPage,
  } = FollowService.ReadFollowers(profileId);
  const navigate = useNavigate();

  const handleNaivgate = (id) => {
    navigate(`/profile/${id}`);
    closeModal();
  };

  const getNextPage = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const [observerRef] = useObserver(getNextPage);

  const followerList = useMemo(() => {
    if (!followers) return [];
    return followers?.pages?.flat();
  }, [followers]);

  return (
    <ul className="pt-[1rem]">
      {followerList?.map((user) => (
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
      <li ref={observerRef}></li>
    </ul>
  );
};

export default ProfileFollower;
