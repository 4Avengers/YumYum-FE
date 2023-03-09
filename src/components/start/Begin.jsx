import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import GoogleSvg from "assets/svg/GoogleSvg";
import { useNavigate } from "react-router-dom";

const Begin = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col justify-center space-y-[5rem] pt-[20vh]">
      <h1 className="text-center text-[2.8rem] font-bold">회원가입</h1>
      <div className="flex w-full flex-col space-y-[1rem]">
        <button
          className="border-1  w-full rounded-[1rem] border border-primary-500 py-[1.5rem] text-[1.6rem] font-semibold"
          onClick={() => navigate("/start/signup")}
        >
          이메일로 가입하기
        </button>
        <button className="border-1 flex-center  relative w-full  rounded-[1rem]  bg-[#FFE814] py-[1.5rem] text-[1.6rem] font-semibold">
          <span className=" flex-center absolute left-[3rem]">
            <RiKakaoTalkFill size="3rem" />
          </span>
          <span className="">카카오톡 로그인</span>
        </button>
        <button className="border-1 flex-center  relative w-full  rounded-[1rem]  border border-primary-500 py-[1.5rem] text-[1.6rem] font-semibold">
          <span className=" flex-center absolute left-[2rem] ">
            <GoogleSvg className="w-[5rem]" />
          </span>
          <span className="text-center">구글 로그인</span>
        </button>
        <button className="border-1 flex-center  relative w-full  rounded-[1rem]  bg-[#20C801] py-[1.5rem] text-[1.6rem] font-semibold text-white">
          <span className=" flex-center absolute left-[3.5rem]">
            <SiNaver size="2.1rem" />
          </span>
          <span className="text-center">네이버 로그인</span>
        </button>
        <p className="w-full text-center text-primary-400">
          가입을 진행할 경우, 서비스 약관 및 개인정보 처리방침에 동의한 것으로
          간주합니다.
        </p>
      </div>
    </main>
  );
};

export default Begin;
