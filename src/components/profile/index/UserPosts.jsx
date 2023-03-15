import ProfileService from "apis/service/ProfileService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import NotPost from "components/common/post/notPost/NotPost";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";
import React from "react";
import { useParams } from "react-router-dom";

const UserPosts = ({ userId }) => {
  const { id } = useParams();
  const { data: posts, isError } = ProfileService.ReadProfilePosts({
    profileId: id,
    isOwner: id === userId + "",
  });
  useQueryKey(["profile", "posts", id], postQueryKeyAtom);

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
