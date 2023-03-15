import ProfileService from "apis/service/ProfileService";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import React from "react";
import { modalLayoutAni } from "shared/motionStyle";
import ProfileFollower from "./follower/Follwer";
import ProfileFollowing from "./following/Following";
import FollowStatus from "./FollowStatus";

const FollowModal = ({
  profileId,
  closeModal,
  isFollowing,
  setIsFollowing,
}) => {
  const profileUser = ProfileService.ReadCacheProfile(profileId);

  return (
    <ModalLayout hasPadding={false} variants={modalLayoutAni}>
      <ModalHeader title={profileUser?.nickname} hasBack onClick={closeModal} />
      <FollowStatus isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
      {isFollowing ? (
        <ProfileFollowing profileId={profileId} closeModal={closeModal} />
      ) : (
        <ProfileFollower profileId={profileId} closeModal={closeModal} />
      )}
    </ModalLayout>
  );
};

export default FollowModal;
