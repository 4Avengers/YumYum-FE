import instance from "apis/instance";
import { useMutation, useQuery } from "react-query";

/** 팔로우 Toggle */
const ToggleFollow = (profileId) => {
  return useMutation(async () => {
    const response = await instance.post(`profile/${profileId}/follow`);
    return response;
  });
};

/** 팔로잉 조회 */
const ReadFollowings = (profileId) => {
  return useQuery(["followings", profileId], async () => {
    const response = await instance.get(`profile/${profileId}/followings`);
    return response.data;
  });
};

/** 팔로워 조회 */
const ReadFollowers = (profileId) => {
  return useQuery(["followers", profileId], async () => {
    const response = await instance.get(`profile/${profileId}/followers`);
    return response.data;
  });
};

const FollowService = { ReadFollowers, ReadFollowings, ToggleFollow };
export default FollowService;
