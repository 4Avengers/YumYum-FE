// import axios from "axios";
// import { userAtom } from "./userAtom";
 
// const kakaoLogin = (code) => {
 
//   return async (setUserAtom, getPrevUser) => {
//     try {
//       const res = await axios({
//         method: "GET",
//         url: `http://localhost:8080/oauth/login/kakao?code=${code}`,
//       });
//       console.log(res); // token will be passed

//       const ACCESS_TOKEN = res.data.accessToken;
//       localStorage.setItem("token", ACCESS_TOKEN); // saved locally as an example

//       setUserAtom((prevState) => ({
//         ...userAtom,
//         ...prevState,
//         isAuthenticated: true,
//         accessToken: ACCESS_TOKEN,
//       }));

//       window.location.replace("/main");

//     } catch (error) {
//       console.log("Social login error", error);
//       window.alert("login failed");
//       window.location.replace("/login");

//       setUserAtom((prevState) => ({
//         ...userAtom,
//         ...prevState,
//         isAuthenticated: false,
//         accessToken: null,
//       }));
//     }
//   };
// };

// export { kakaoLogin };
