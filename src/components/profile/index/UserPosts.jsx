import ProfileService from "apis/service/ProfileService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import NotPost from "components/common/post/notPost/NotPost";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";
import React from "react";
import { useParams } from "react-router-dom";

const UserPosts = ({ userId }) => {
  const { profileId } = useParams();
  const { data: posts, isError } = ProfileService.ReadProfilePosts({
    profileId,
    isOwner: profileId === userId + "",
  });
  useQueryKey(["profile", "posts", profileId], postQueryKeyAtom);

  if (isError || posts?.length === 0) return <NotPost />;

  return (
    <ul>
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isOwner={post?.user?.id === userId}
        />
      ))}
    </ul>
  );
};

export default UserPosts;
