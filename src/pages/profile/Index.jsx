import Layout from "components/layout/Layout";
import EditModal from "components/profile/edit/EditModal";
import ProfileContainer from "components/profile/index/ProfileContainer";
import ProfileStatus from "components/profile/index/ProfileStatus";
import TaggedUserPosts from "components/profile/index/TaggedUserPosts";
import UserPosts from "components/profile/index/UserPosts";
import useModal from "hooks/useModal";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FollowModal from "components/profile/follow/FollowModal";
import useRecoilModal from "hooks/useRecoilModal";
import { commentModalAtom, postConfigModalAtom } from "atoms/modalAtom";
import PostConfigModal from "components/common/post/config/PostConfigModal";
import CommentModal from "components/common/post/comment/CommentModal";
import { AnimatePresence } from "framer-motion";

const Profile = () => {
  const { id } = useParams();
  const [user] = useUser();
  const [isTag, setIsTag] = useState(false); // 전체게시물인지 태그된 게시물인지
  const [isFollowing, setIsFollowing] = useState(false);
  const location = useLocation();
  const [showPostConfigModal] = useRecoilModal(postConfigModalAtom);
  const [showCommentModal] = useRecoilModal(commentModalAtom);
  const [openEditModal, setOpenEditModal] = useModal();
  const [openFollowingModal, setOpenFollowingModal] = useModal();

  useEffect(() => {
    setIsTag(false);
  }, [location]);

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

      {!isTag ? (
        <UserPosts userId={user?.id} />
      ) : (
        <TaggedUserPosts userId={user?.id} />
      )}
      <AnimatePresence>
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
        {showPostConfigModal && <PostConfigModal />}
        {showCommentModal && <CommentModal />}
      </AnimatePresence>
    </Layout>
  );
};

export default Profile;
