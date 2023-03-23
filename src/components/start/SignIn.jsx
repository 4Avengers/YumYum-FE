import { useForm } from "react-hook-form";
import { emailValid, passwordValid } from "utils/valids";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import GoogleSvg from "assets/svg/GoogleSvg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styled from "@emotion/styled";
import AuthService from "apis/service/AuthService";
import { toast } from "react-toastify";
import { setAccessToken, setRefreshToken } from "apis/token";

export const LoginWithKakao = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  window.location.href = KAKAO_AUTH_URL;
};

export const LoginWithGoogle = () => {
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}`;
  window.location.href = GOOGLE_AUTH_URL;
};

export const LoginWithNaver = () => {
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
  window.location.href = NAVER_AUTH_URL;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onValid = useCallback(async (data) => {
    try {
      const {
        data: { accessToken, refreshToken },
      } = await AuthService.SignIn(data);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      window.location.replace("/");
    } catch (e) {
      toast.error(e?.response?.data?.message || "로그인에 실패하였습니다.");
    }
  }, []);

  return (
    <main className="flex flex-col space-y-[2rem] pt-[10vh]">
      <h3 className=" text-[2.5rem] font-bold">로그인</h3>
      <form className="flex flex-col " onSubmit={handleSubmit(onValid)}>
        <InputBox className="flex flex-col">
          <label className="flex flex-col space-y-[1rem]">
            <span className="Cap1">이메일</span>
            <input
              {...register("email", emailValid())}
              className="Cap1 border-b py-[0.6rem] outline-none placeholder:text-primary-400 focus:border-primary-500"
              type="email"
            />
          </label>
          <span className="Cap6 col-start-2 text-red-400">
            {errors?.email?.message}
          </span>
        </InputBox>

        <InputBox className="flex flex-col">
          <label className="flex flex-col space-y-[1rem]">
            <span className="Cap1">비밀번호</span>
            <input
              {...register("password", passwordValid())}
              className="Cap1 border-b py-[0.6rem] outline-none placeholder:text-primary-400 focus:border-primary-500"
              type="password"
            />
          </label>
          <span className="Cap6 col-start-2 text-red-400">
            {errors?.password?.message}
          </span>
        </InputBox>
        <button
          className="mt-[2rem] w-full rounded-[1rem] bg-primary-600 py-[1.5rem] text-[1.6rem] font-semibold text-white transition-colors disabled:bg-primary-300"
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
      <div className="Cap5  flex justify-between text-primary-500">
        <span>계정 정보를 잊으셨나요?</span>
        <span className="cursor-pointer" onClick={() => navigate("/start")}>
          회원가입 하기
        </span>
      </div>
      <div className="flex flex-col items-center space-y-[2rem] pt-[3rem]">
        <p className="Cap3">SNS 계정으로 간편하게 로그인하세요</p>
        <ul className="grid grid-cols-3 items-center gap-[2rem]">
          <li
            className="flex-center  h-[5rem] w-[5rem] cursor-pointer rounded-[1rem] bg-[#FAE300] shadow-lg"
            onClick={LoginWithKakao}
          >
            <RiKakaoTalkFill size="3.7rem" />
          </li>

          <li
            className="flex-center  h-[5rem] w-[5rem] cursor-pointer rounded-[1rem] bg-[#02BF19] shadow-lg"
            onClick={LoginWithNaver}
          >
            <SiNaver size="2rem" color="white" />
          </li>

          <li
            className="flex-center relative  h-[5rem] w-[5rem] cursor-pointer rounded-[1rem] bg-white shadow-lg"
            onClick={LoginWithGoogle}
          >
            <GoogleSvg className="absolute w-[6rem]" />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SignIn;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 3rem;
`;
