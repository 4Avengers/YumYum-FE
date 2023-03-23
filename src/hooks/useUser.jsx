import ProfileService from "apis/service/ProfileService";
import { hasToken } from "apis/token";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const useUser = () => {
  const isExist = hasToken();
  const { data: user } = ProfileService.ReadMe(isExist);
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isExist && pathname !== "/") {
      toast.error("로그인이 필요합니다.");
      queryClient.removeQueries(["loginUser"]);
      window.location.replace("/start/login");
    }
  }, [queryClient, isExist, pathname]);

  return [user];
};

export default useUser;
