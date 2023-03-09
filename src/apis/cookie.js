import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  return cookies.set("Authorization", accessToken, {
    samSite: "strict",
    path: "/",
  });
};

export const setRefreshToken = (refreshToken) => {
  return cookies.set("RefreshToken", refreshToken, {
    samSite: "strict",
    path: "/",
  });
};

export const getAccessToken = () => {
  return cookies.get("Authorization");
};

export const getRefreshToken = () => {
  return cookies.get("RefreshToken");
};

export const removeCookieToken = () => {
  cookies.remove("Authorization", { sameSite: "strict", path: "/" });
  cookies.remove("RefreshToken", { sameSite: "strict", path: "/" });
};
