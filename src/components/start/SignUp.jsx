import styled from "@emotion/styled";
import AuthService from "apis/service/AuthService";
import AuthLabel from "elements/AuthLabel";
import ErrorMessage from "elements/ErrorMessage";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cls from "utils/cls";
import {
  birthValid,
  emailValid,
  nameValid,
  nicknameValid,
  passwordValid,
  telValid,
} from "utils/valids";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const onValid = useCallback(
    async (data) => {
      const { password, confirmPassword } = data;
      if (confirmPassword !== password) {
        return setError(
          "confirmPassword",
          { message: "비밀번호가 일치하지 않습니다." },
          { shouldFocus: true }
        );
      }
      try {
        // 회원가입 로직
        await AuthService.SignUp({
          ...data,
          // profileImage:
          //   "https://avatars.dicebear.com/api/identicon/wooncloud.svg",
        }).then(() => toast.success("회원가입에 성공했습니다."));

        navigate("/start/login");
      } catch (e) {
        console.log(e);
        toast.error(e?.response?.data?.message || "회원가입 실패");
      }
    },
    [setError, navigate]
  );

  return (
    <main className="flex flex-col space-y-[4rem] pt-[10vh]">
      <h3 className="text-[2.5rem] font-bold">회원가입</h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onValid)}>
        <div className="mb-[4rem] flex flex-col space-y-[2rem]">
          <InputBox>
            <AuthLabel
              text="이름"
              type="text"
              placeholder="이름을 입력해주세요"
              register={{
                ...register("name", nameValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.name?.message} />
          </InputBox>
          <InputBox>
            <AuthLabel
              text="닉네임"
              type="text"
              placeholder="닉네임을 입력해주세요"
              register={{
                ...register("nickname", nicknameValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.nickname?.message} />
          </InputBox>
        </div>
        <div className="mb-[4rem] flex flex-col space-y-[2rem]">
          <InputBox>
            <AuthLabel
              text="이메일"
              type="email"
              placeholder="이메일을 입력해주세요"
              register={{
                ...register("email", emailValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.email?.message} />
          </InputBox>
          <InputBox>
            <AuthLabel
              text="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              register={{
                ...register("password", passwordValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.password?.message} />
          </InputBox>
          <InputBox>
            <AuthLabel
              text="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              register={{
                ...register("confirmPassword", passwordValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.confirmPassword?.message} />
          </InputBox>
        </div>
        <div className="mb-[4rem] flex flex-col space-y-[2rem]">
          <InputBox>
            <AuthLabel
              text="생년월일"
              type="number"
              placeholder="19991202"
              register={{
                ...register("birth", birthValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.birth?.message} />
          </InputBox>
          <InputBox>
            <label className="grid grid-cols-[1fr_2fr] items-center  ">
              <span className="Cap1">성별</span>
              <div className="Cap4 grid grid-cols-2 border text-primary-400">
                <div className="flex-center">
                  <input
                    {...register("gender")}
                    type="radio"
                    className="peer hidden"
                    value="M"
                    id={"M"}
                  />
                  <label
                    className={cls(
                      "flex-center peer-checked:bg-primary-sub1 w-full py-[0.6rem]  peer-checked:bg-primary-600 peer-checked:text-white"
                    )}
                    htmlFor="M"
                  >
                    남
                  </label>
                </div>
                <div className="flex-center border-l ">
                  <input
                    {...register("gender")}
                    type="radio"
                    className="peer hidden"
                    value="F"
                    id={"F"}
                  />
                  <label
                    className={cls(
                      "flex-center peer-checked:bg-primary-sub1 w-full py-[0.6rem]  peer-checked:bg-primary-600 peer-checked:text-white"
                    )}
                    htmlFor="F"
                  >
                    여
                  </label>
                </div>
              </div>
            </label>
          </InputBox>
          <InputBox>
            <AuthLabel
              text="핸드폰번호"
              type="number"
              placeholder="핸드폰 번호를 입력해주세요"
              register={{
                ...register("phoneNumber", telValid()),
              }}
            />
            <ErrorMessage errorMessage={errors?.tel?.message} />
          </InputBox>
        </div>
        <button
          className="w-full  rounded-[1rem]  bg-primary-600 py-[1.5rem] text-[1.6rem] font-semibold text-white transition-colors disabled:bg-primary-300"
          disabled={!isValid}
        >
          이메일로 가입하기
        </button>
      </form>
    </main>
  );
};

export default SignUp;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
