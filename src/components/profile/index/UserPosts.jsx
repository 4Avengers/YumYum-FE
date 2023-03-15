import ProfileService from "apis/service/ProfileService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";
import React from "react";
import { useParams } from "react-router-dom";

const UserPosts = ({ userId }) => {
  const { id } = useParams();
  const { data: posts } = ProfileService.ReadProfilePosts(id);
  useQueryKey(["profile", "posts", id], postQueryKeyAtom);

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
