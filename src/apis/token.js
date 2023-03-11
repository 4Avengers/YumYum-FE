import { Cookies } from "react-cookie";
import { isExpired } from "react-jwt";
// import instance from "./instance";

const cookies = new Cookies();

// 엑세스 토큰 header에 저장
export const setAccessToken = (accessToken) => {
  // instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  return cookies.set("Authorization", accessToken, {
    samSite: "strict",
    path: "/",
  });
};

// 리프레시 토큰 쿠키 저장
export const setRefreshToken = (refreshToken) => {
  return cookies.set("RefreshToken", refreshToken, {
    samSite: "strict",
    path: "/",
  });
};

export const getRefreshToken = () => {
  return cookies.get("RefreshToken");
};

// 엑세스, 리프레쉬 토큰 제거
export const removeToken = () => {
  cookies.remove("Authorization", { sameSite: "strict", path: "/" });
  cookies.remove("RefreshToken", { sameSite: "strict", path: "/" });
};

// 토큰 검증 boolean
export const hasToken = () => {
  const myToken = cookies.get("RefreshToken");
  if (!myToken) return false;
  const isTokenExpired = isExpired(myToken);
  if (isTokenExpired) {
    removeToken();
    return false;
  } else return true;
};

// const tokenRepository = {
//   setAccessToken,
//   setRefreshToken,
//   getRefreshToken,
//   removeToken,
//   hasToken,
// };

// export default tokenRepository;
