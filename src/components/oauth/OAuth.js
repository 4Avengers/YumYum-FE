//카카오 >> CLIENT_ID는 REST API 키
// const CLIENT_ID = "c15ad0553ee8823b5f734aea76425206";
// const REDIRECT_URI =  "http://localhost:3000/auth/kakaoCallback";
// const REDIRECT_URI =  "http://localhost:8080/login/kakao";
const REACT_APP_KAKAO_CLIENT_ID="403b2ed31e7aa91a57e40be9b5d11ab3"
const REACT_APP_KAKAO_REDIRECT_URI="http://localhost:3000/auth/kakao/callback"


// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const KAKAO_AUTH_URL = "http://localhost:3000/api/users/kakao/callback"



// export const KAKAO_AUTH_URL = "http://localhost:8080/login/kakao";
export const NAVER_AUTH_URL =  "http://localhost:8080/login/naver";
export const GOOGLE_AUTH_URL = "http://localhost:8080/login/google"


//구글 로그인(보안)
const G_CLIENT_ID = "813195096575-ec6b68fq8jrl7kac7fi3a7c9i7sq6cns.apps.googleusercontent.com";
const G_REDIRECT_URI = "http://localhost:8080/login/google";
// const G_REDIRECT_URI = "https://yumyumdb.net/api/users/google/callback"
// Redirect URI가 서버주소여야한다!!  왜?! 이유 찾아보기. 

// export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=${G_REDIRECT_URI}&scope=email%20profile&client_id=${G_CLIENT_ID}&flowName=GeneralOAuthFlow`


// export const GOOGLE_AUTH_URL = "http://localhost:8080/login/google"
