import React, { useEffect } from "react";
import instance from "apis/instance";
import { setAccessToken, setRefreshToken } from "apis/token";

const OAuth2RedirectHandler = (props) => {
  

  // Authorization code
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("code값", code)
  const body = { code };

  useEffect(() => {
    if (code){ 
      (async () => {
        const res = await instance.post(`oauth/login/kakao`, body)
        console.log(res);

        const { accessToken, refreshToken } = res.data;   
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        window.location.replace("/");


      })()
    }
  }, []);

  return <div>Logging in, please wait...</div>;
};

export default OAuth2RedirectHandler;
