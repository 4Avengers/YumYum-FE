import RestaurantService from "apis/service/RestaurantService";
import useObserver from "hooks/useObserver";
import { useCallback, useMemo } from "react";
import RestaurantPostCard from "./RestaurantPostCard";

const RestaurantPostlist = ({ placeId }) => {
  const {
    data: posts,
    hasNextPage,
    fetchNextPage,
  } = RestaurantService.ReadRestaurantPosts(placeId);

  const getNextPage = useCallback(() => {
    if (hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const [observerRef] = useObserver(getNextPage);

  const postList = useMemo(() => {
    if (!posts) return [];
    return posts?.pages?.flat();
  }, [posts]);

  return (
    <div className="flex flex-col ">
      <h3 className="px-[2rem] text-[1.8rem] font-semibold">관련 포스트</h3>
      <ul className="inner-height flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide">
        {postList?.map((post) => (
          <RestaurantPostCard key={post?.id} post={post} />
        ))}
        <div ref={observerRef} />
      </ul>
    </div>
  );
};

export default RestaurantPostlist;
