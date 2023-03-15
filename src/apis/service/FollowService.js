import instance from "apis/instance";
import { useMutation, useQuery } from "react-query";


// const GetFollowerList = () => {
//     return useQuery(["Follower", "current"], async () => {
//       const response = await instance.get("follower");
//       return response.data;
//     });
//   };


const FollowService = {
    GetFollowerList,
    GetFollowingList,
  };
  export default FollowService;