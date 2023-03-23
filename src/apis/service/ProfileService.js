import instance from "apis/instance";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

/** 나의 정보 조회 */
const ReadMe = (isExist) => {
  return useQuery(
    ["loginUser"],
    async () => {
      const response = await instance.get("profile/me");
      return response.data;
    },
    {
      enabled: !!isExist,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

/** 프로필 유저 정보 조회 */
const ReadProfile = (profileId) => {
  return useQuery(
    ["profile", profileId],
    async () => {
      const response = await instance.get(`profile/${profileId}`);
      return response.data;
    },
    {
      enabled: !!profileId,
    }
  );
};

/** 프로필 유저 게시글 목록 조회 */
const ReadProfilePosts = ({ profileId }) => {
  return useInfiniteQuery(
    ["profile", "posts", profileId],
    async ({ pageParam = 1 }) => {
      const response = await instance.get(
        `profile/${profileId}/posts?page=${pageParam}`
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

/** 프로필 유저 지도 게시글 목록 조회  */
const ReadProfileMapPosts = ({ profileId }) => {
  return useQuery(
    ["profile", "map", profileId],
    async () => {
      const response = await instance.get(`map/user-posting/${profileId}`);
      return response.data;
    },
    {
      enabled: !!profileId,
    }
  );
};

/** 내 프로필 수정 */
const EditProfile = (profileId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (payload) => {
      const response = await instance.put(`profile/me`, payload);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", profileId + ""]);
        queryClient.invalidateQueries(["loginUser"]);
      },
    }
  );
};

/** 해당 프로필 유저의 캐싱된 정보 가져오기  */
const ReadCacheProfile = (profileId) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(["profile", profileId]);
};

const ProfileService = {
  ReadMe,
  ReadProfile,
  ReadProfilePosts,
  EditProfile,
  ReadCacheProfile,
  ReadProfileMapPosts,
};

export default ProfileService;
