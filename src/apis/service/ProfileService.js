import instance from "apis/instance";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
const ReadProfilePosts = ({ profileId, isOwner }) => {
  return useQuery(["profile", "posts", profileId], async () => {
    const response = await instance.get(`profile/${profileId}/posts`);
    return response.data;
  });
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
};

export default ProfileService;
