import PostService from "apis/service/PostService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import PostCard from "components/common/post/postCard/PostCard";
import useGeolocation from "hooks/useGeoLocation";
import useObserver from "hooks/useObserver";
import useQueryKey from "hooks/useQueryKey";
import useUser from "hooks/useUser";
import { useCallback, useMemo } from "react";

const NewsFeedArround = () => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();
  const {
    data: posts,
    hasNextPage,
    fetchNextPage,
  } = PostService.ReadNewsFeedsAround({
    x: longitude + "",
    y: latitude + "",
  });

  const [user] = useUser();

  const getNextPage = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const [observerRef] = useObserver(getNextPage);

  useQueryKey(["newsFeeds", "around"], postQueryKeyAtom);

  const postList = useMemo(() => {
    if (!posts) return [];
    return posts?.pages?.flat();
  }, [posts]);

  return (
    <>
      <ul className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll   scrollbar-hide">
        {postList?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isOwner={post?.user?.id === user?.id}
          />
        ))}
        <div ref={observerRef} className="" />
      </ul>
    </>
  );
};

export default NewsFeedArround;
