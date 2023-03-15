import instance from "apis/instance";
import { useQuery } from "react-query";

const ReadUser = (isExist) => {
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

const ProfileService = { ReadUser };

export default ProfileService;
