import PostService from "apis/service/PostService";
import PostCard from "components/common/post/postCard/PostCard";
import useQueryKey from "hooks/useQueryKey";
import useUser from "hooks/useUser";
import useObserver from "hooks/useObserver";
import { useCallback, useMemo } from "react";

// newsfeed 최신글
const NewsFeedRecent = () => {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
  } = PostService.ReadNewsFeeds();

  const [user] = useUser();

  useQueryKey(["newsFeeds", "current"]);

  const getNextPage = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const [observerRef] = useObserver(getNextPage);

  const postList = useMemo(() => {
    if (!posts) return [];
    return posts?.pages?.flat();
  }, [posts]);

  return (
    <ul className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide">
      {postList?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isOwner={post?.user?.id === user?.id}
        />
      ))}
      <div ref={observerRef} className="" />
    </ul>
  );
};

export default NewsFeedRecent;
