import instance from "apis/instance";
import { useInfiniteQuery, useQuery } from "react-query";

/** 레스토랑 정보 불러오기 */
const ReadRestaurant = (placeId) => {
  return useQuery(["restaurant", placeId], async () => {
    const response = await instance(`/restaurant/${placeId}`);
    return response.data;
  });
};

/** 레스토랑 관련 포스트 목록 조회 */
const ReadRestaurantPosts = (placeId) => {
  return useInfiniteQuery(
    ["restaurant", "posts", placeId],
    async ({ pageParam = 1 }) => {
      const response = await instance(
        `restaurant/restaurant-detail/related-posting?kakao_place_id=${placeId}&page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length < 8 ? undefined : allPages.length + 1;
        return nextPage;
      },
    }
  );
};

const RestaurantService = { ReadRestaurant, ReadRestaurantPosts };
export default RestaurantService;
