import instance from "apis/instance";

import { useQuery } from "react-query";

const LoginUser = () => {
  return useQuery(["loginUser"], async () => {
    const response = instance.get("profile/me");
    return response.data;
  });
};

const ProfileService = { LoginUser };

export default ProfileService;
