import React, { useEffect } from "react";
// import { kakaoLogin } from "../../atoms/user";
// import { userAtom } from "../../atoms/userAtom";
// import axios from "axios";
import instance from "apis/instance";
import { setAccessToken, setRefreshToken } from "apis/token";

const OAuth2RedirectHandler = () => {
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      (async () => {
        try {
          const res = await instance.post(`oauth/login/kakao`, { code });
          const { accessToken, refreshToken } = res.data;
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          window.location.replace("/");
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [code]);

  return <div></div>;
};

export default OAuth2RedirectHandler;
