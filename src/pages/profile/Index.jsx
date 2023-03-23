import Layout from "components/layout/Layout";
import EditModal from "components/profile/edit/EditModal";
import ProfileContainer from "components/profile/index/ProfileContainer";
import ProfileStatus from "components/profile/index/ProfileStatus";
import TaggedUserPosts from "components/profile/index/TaggedUserPosts";
import UserPosts from "components/profile/index/UserPosts";
import useModal from "hooks/useModal";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import FollowModal from "components/profile/follow/FollowModal";
import useRecoilModal from "hooks/useRecoilModal";
import {
  commentModalAtom,
  postConfigModalAtom,
  questPostModal,
} from "atoms/modalAtom";
import PostConfigModal from "components/common/post/config/PostConfigModal";
import CommentModal from "components/common/post/comment/CommentModal";
import { AnimatePresence } from "framer-motion";
import ProfileMap from "components/profile/index/profileMap/ProfileMap";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";

// type TStatus = USER | MAP | TAG

const Profile = () => {
  const { profileId } = useParams();
  const [user] = useUser();
  const [status, setStatus] = useState("USER"); // 전체게시물인지 태그된 게시물인지
  const [isFollowing, setIsFollowing] = useState(false);
  const location = useLocation();
  const [showPostConfigModal] = useRecoilModal(postConfigModalAtom);
  const [showCommentModal] = useRecoilModal(commentModalAtom);
  const [openEditModal, setOpenEditModal] = useModal();
  const [openFollowingModal, setOpenFollowingModal] = useModal();
  const [openPostDetailModal] = useRecoilModal(questPostModal);

  useEffect(() => {
    setStatus("USER");
  }, [location]);

  return (
    <Layout headerType="DM" isScroll={false} hasPadding={false}>
      <ProfileContainer
        profileId={profileId}
        isOwner={user?.id === +profileId}
        setIsFollowing={setIsFollowing}
        setOpenEditModal={setOpenEditModal}
        setOpenFollowingModal={setOpenFollowingModal}
      />
      <ProfileStatus status={status} setStatus={setStatus} />

      {status === "USER" && <UserPosts userId={user?.id} />}
      {status === "MAP" && <ProfileMap profileId={profileId} />}
      {status === "TAG" && <TaggedUserPosts userId={user?.id} />}

      <AnimatePresence>
        {user && openEditModal && (
          <EditModal closeModal={setOpenEditModal} user={user} />
        )}
        {openFollowingModal && user && (
          <FollowModal
            closeModal={setOpenFollowingModal}
            isFollowing={isFollowing}
            setIsFollowing={setIsFollowing}
            profileId={profileId}
          />
        )}
        {showPostConfigModal && <PostConfigModal />}
        {showCommentModal && <CommentModal />}
        {openPostDetailModal && <PostDetailModal user={user} />}
      </AnimatePresence>
      <Outlet />
    </Layout>
  );
};

export default Profile;
