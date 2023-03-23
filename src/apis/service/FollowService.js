import instance from "apis/instance";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";

/** 팔로우 Toggle */
const ToggleFollow = (profileId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const response = await instance.post(`profile/${profileId}/follow`);
      return response;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["profile", profileId]),
    }
  );
};

/** 팔로잉 조회 */
const ReadFollowings = (profileId) => {
  return useInfiniteQuery(
    ["followings", profileId],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `profile/${profileId}/followings?page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage?.length < 13 ? undefined : allPages.length + 1;
        return nextPage;
      },
    }
  );
};

/** 팔로워 조회 */
const ReadFollowers = (profileId) => {
  return useInfiniteQuery(
    ["followers", profileId],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `profile/${profileId}/followers?page=${pageParam}`
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage?.length < 13 ? undefined : allPages.length + 1;
        return nextPage;
      },
    }
  );
};

const FollowService = { ReadFollowers, ReadFollowings, ToggleFollow };
export default FollowService;
