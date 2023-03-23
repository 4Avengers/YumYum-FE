import ProfileService from "apis/service/ProfileService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import NotPost from "components/common/post/notPost/NotPost";
import PostCard from "components/common/post/postCard/PostCard";
import useObserver from "hooks/useObserver";
import useQueryKey from "hooks/useQueryKey";
import React, { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";

const UserPosts = ({ userId }) => {
  const { profileId } = useParams();
  const {
    data: posts,
    isError,
    hasNextPage,
    fetchNextPage,
  } = ProfileService.ReadProfilePosts({
    profileId,
  });
  useQueryKey(["profile", "posts", profileId], postQueryKeyAtom);

  const getNextPage = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const [observerRef] = useObserver(getNextPage);

  const postList = useMemo(() => {
    if (!posts) return [];
    return posts?.pages?.flat();
  }, [posts]);

  if (isError || postList?.length === 0) return <NotPost />;

  return (
    <ul className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll   scrollbar-hide">
      {postList?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isOwner={post?.user?.id === userId}
        />
      ))}
      <div ref={observerRef} className="" />
    </ul>
  );
};

export default UserPosts;
