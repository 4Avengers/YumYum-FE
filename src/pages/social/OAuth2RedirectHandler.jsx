import React, { useEffect } from "react";
import instance from "apis/instance";
import { setAccessToken, setRefreshToken } from "apis/token";

const OAuth2RedirectHandler = (props) => {
  const provider = props.provider;
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code && provider) {
      (async () => {
        const body = { provider, code };
        const res = await instance.post(`oauth/login/${provider}`, body);
        console.log(res);

        const { accessToken, refreshToken } = res.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        window.location.replace("/");
      })();
    }
  }, [provider, code]);

  return <div>Logging in, please wait...</div>;
};

export default OAuth2RedirectHandler;
