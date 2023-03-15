import ProfileService from "apis/service/ProfileService";
import { hasToken } from "apis/token";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const useUser = () => {
  const isExist = hasToken();
  const { data: user } = ProfileService.ReadUser(isExist);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isExist) {
      toast.error("로그인이 필요합니다.");
      queryClient.removeQueries(["loginUser"]);
      window.location.replace("/start/login");
    }
  }, [queryClient, isExist]);

  return { user };
};

export default useUser;
