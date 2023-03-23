import React, { useEffect } from "react";
import instance from "apis/instance";
import { setAccessToken, setRefreshToken } from "apis/token";

const OAuth2RedirectHandler = (props) => {
  
  console.log("props는", props);
  // Authorization code
  const provider = props.provider; 
  let code = new URL(window.location.href).searchParams.get("code");

  const access_token = new URLSearchParams(window.location.hash.substring(1)).get(
    "access_token"
  );

  if (!code && access_token) {
    code = access_token;
  }
  
  // const provider = new URL(window.location.href).searchParams.get("provider");
  const body = {provider,  code};
  console.log(body);


  useEffect(() => {
    if (code && provider){ 
      (async () => {
        const res = await instance.post(`oauth/login/${provider}`, body)
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