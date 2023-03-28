import axios from "axios";
import { Cookies } from "react-cookie";

const baseURL = process.env.REACT_APP_SERVER_URL;
const cookies = new Cookies();
// const refreshToken = cookies.get("RefreshToken");
const accessToken = cookies.get("Authorization"); // 꺼내와서 요청 보낼 때 헤더에 넣어준다.

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Cache-Control": "no-cache",
    withCredentials: true,
  },
});

// export const postApi = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "multipart/form-data",
//     "Cache-Control": "no-cache",
//     withCredentials: true,
//   },
// });

// // 리프레시 토큰을 발급 중인지 확인하는 boolean 값
// let isTokenRefreshing = false;

// // 실패한 요청들의 배열
// let refreshSubscribers = [];

// // 실패한 요청들을 배열에 추가해주는 함수
// const addRefreshSubscriber = (callback) => {
//   refreshSubscribers.push(callback);
// };

// // 실패한 요청들을 다시 실행시켜주는 함수
// const onTokenRefreshed = (accessToken) => {
//   refreshSubscribers.map((callback) => callback(accessToken));
// };

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const {
//       config,
//       response: { status },
//     } = error;
//     const originalRequest = config;

//     if (status === 401) {
//       if (!isTokenRefreshing) {
//         // isTokenRefreshing이 false인 경우에만 token refresh 요청
//         isTokenRefreshing = true;
//         const { data } = await instance.post("restore-access-token");
//         // 새로운 토큰 저장
//         const { accessToken: newAccessToken } = data;
//         isTokenRefreshing = false;
//         setAccessToken(newAccessToken);
//         // 새로운 토큰으로 지연되었던 요청 진행
//         onTokenRefreshed(newAccessToken);
//       }

//       // token이 재발급 되는 동안의 요청은 refreshSubscribers에 추가
//       const retryOriginalRequest = new Promise((resolve) => {
//         addRefreshSubscriber((accessToken) => {
//           // 갱신한 accessToken으로 재설정
//           originalRequest.headers.Authorization = "Bearer " + accessToken;
//           // originalRequest를 다시 실행
//           resolve(axios(originalRequest));
//         });
//       });
//       return retryOriginalRequest;
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
