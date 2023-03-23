import instance from "apis/instance";
import { useQuery } from "react-query";

/** 팔로잉한 유저들 포스팅 조회 */
const GetMap = () => {
  return useQuery(["map"], async () => {
    const response = await instance.get("map/followerPosting");
    return response.data;
  });
};

/** 팔로잉한 유저들 포스팅 리스트 조회 */
const GetMapList = () => {
  return useQuery(["mapList"], async () => {
    const response = await instance.get("map/follower-posting-list");
    return response.data;
  });
};

const MapService = { GetMap, GetMapList };

export default MapService;
