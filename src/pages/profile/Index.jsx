import Layout from "components/layout/Layout";
import EditModal from "components/profile/edit/EditModal";
import ProfileContainer from "components/profile/index/ProfileContainer";
import ProfileStatus from "components/profile/index/ProfileStatus";
import TaggedUserPosts from "components/profile/index/TaggedUserPosts";
import UserPosts from "components/profile/index/UserPosts";
import useModal from "hooks/useModal";
import useUser from "hooks/useUser";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FollowModal from "components/profile/follow/FollowModal";
const Profile = () => {
  const { id } = useParams();
  const [user] = useUser();
  const [isTag, setIsTag] = useState(false); // 전체게시물인지 태그된 게시물인지
  const [isFollowing, setIsFollowing] = useState(false);
  const [openEditModal, setOpenEditModal] = useModal();
  const [openFollowingModal, setOpenFollowingModal] = useModal();

  return (
    <Layout headerType="DM">
      <ProfileContainer
        profileId={id}
        isOwner={user?.id === +id}
        setIsFollowing={setIsFollowing}
        setOpenEditModal={setOpenEditModal}
        setOpenFollowingModal={setOpenFollowingModal}
      />
      <ProfileStatus isTag={isTag} setIsTag={setIsTag} />
      {!isTag ? <UserPosts /> : <TaggedUserPosts />}
      {user && openEditModal && (
        <EditModal closeModal={setOpenEditModal} user={user} />
      )}
      {openFollowingModal && user && (
        <FollowModal
          closeModal={setOpenFollowingModal}
          isFollowing={isFollowing}
          setIsFollowing={setIsFollowing}
          profileId={id}
        />
      )}
    </Layout>
  );
};

export default Profile;
