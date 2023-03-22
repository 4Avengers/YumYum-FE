import React, { useEffect } from "react";
// import { kakaoLogin } from "../../atoms/user";
// import { userAtom } from "../../atoms/userAtom";
// import axios from "axios";
import instance from "apis/instance";
import { setAccessToken, setRefreshToken } from "apis/token";

const OAuth2RedirectHandler = (props) => {
  

  // Authorization code
  let code = new URL(window.location.href).searchParams.get("code");
  console.log("code값찍어보자", code)
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
    // async function loginUser() {
    //   await kakaoLogin(code);
    // }
    // loginUser();
  }, []);

  return <div>Logging in, please wait...</div>;
};

export default OAuth2RedirectHandler;


// import React from "react"
// import { useDispatch } from "react-redux"
// import { actionCreators as userActions } from "../redux/modules/user"

// const OAuth2RedirectHandler = props => {
//   const dispatch = useDispatch()

//   // 인가코드
//   let code = new URL(window.location.href).searchParams.get("code")

//   React.useEffect(() => {
//     dispatch(userActions.kakaoLoginSV(code))
//   }, [code, dispatch])

//   return <></>
// }

// export default OAuth2RedirectHandler



// import axios from "axios";
// import React, { useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { setAccessToken } from "../../shared/Cookie/Cookie";

// function KakaoLogin() {
//   const code = new URL(window.location.href).searchParams.get("code");
//   const domain = window.location.origin;
//   console.log("code 받았니", code, "domain 받았니", domain)

//   useEffect(() => {
//     (async () => {
//       try {
//         const kakaoResult = await axios.post(
//           `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${code}`,

//           {
//             headers: {
//               "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//             },
//           }
//         );
//         if (kakaoResult.status !== 200) return;
//         console.log("KaKaoResult", kakaoResult);

//         const token = kakaoResult.data.access_token;
//         const response = await axios.post(
//             `http://localhost:8080/oauth/login/kakao`,
//         // const response = await axios.post(
//         //   `${process.env.REACT_APP_SERVER_URL}auth/kakao`,
//         {
//             data: {
//               code,
//               domain,
//               ...kakaoResult.data
//             }
//           },
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         const {
//           status,
//           data: { accessToken, refreshToken, currentPage },
//         } = response;
//         if (status !== 200) return;
//         setAccessToken(accessToken);
//         localStorage.setItem("token", refreshToken);

//         if (currentPage) {
//           return window.location.replace(`/groups/${currentPage}`);
//         } else {
//           return window.location.replace("/main/write");
//         }
//       } catch (e) {
//         // window.location.replace("/");
//         toast.error("로그인되지 않았습니다.", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     })();
//   }, [code]);

//   return (
//     <div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default KakaoLogin;

