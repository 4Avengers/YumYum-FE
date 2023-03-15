import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { handleImgError } from "utils/handleImgError";
import { RiPencilLine } from "react-icons/ri";
import { nicknameValid } from "utils/valids";
import ErrorMessage from "elements/ErrorMessage";
import Button from "elements/Button";
import ProfileService from "apis/service/ProfileService";
import { toast } from "react-toastify";

const EditModal = ({ closeModal, user }) => {
  const [profile_image, setProfile_img] = useState(null);
  const [previewImg, setPreviewImage] = useState("");
  const { mutate: editProfile, isSuccess } = ProfileService.EditProfile(
    user?.id
  );

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // 제출
  const onValid = (data) => {
    const { nickname, introduce } = data;
    const formData = new FormData();
    formData.append("file", profile_image);
    formData.append("nickname", nickname);
    formData.append("introduce", introduce);
    editProfile(formData);
  };

  //   프리뷰 이미지 변경
  const handlePreviewChange = useCallback((e) => {
    const file = e.target.files[0];
    const blobImage = URL.createObjectURL(file);
    setProfile_img(file);
    setPreviewImage(blobImage);
  }, []);

  // 초기 세팅
  useEffect(() => {
    if (user) {
      setValue("nickname", user.nickname);
      setValue("introduce", user?.introduce);
      setProfile_img(user?.profile_image);
      setPreviewImage(user?.profile_image);
    }
  }, [user, setValue]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("프로필이 변경되었습니다.");
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <ModalLayout>
      <ModalHeader title="내 프로필 수정" hasBack onClick={closeModal} />
      <form
        className="flex w-full flex-1 flex-col items-center  px-[5rem] pt-[10vh]"
        onSubmit={handleSubmit(onValid)}
      >
        <label className="flex-center relative mx-auto mb-[3rem] h-[9rem] w-[9rem] rounded-full ring-1 ring-primary-400  ring-offset-2">
          <input
            type="file"
            className="hidden"
            onChange={handlePreviewChange}
          />
          <img
            className="h-[9rem] w-[9rem] rounded-full object-cover "
            src={previewImg}
            alt="avatar"
            onError={handleImgError}
          />
          <span className=" flex-center absolute right-[0rem] bottom-[0rem] h-[3rem] w-[3rem] cursor-pointer rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-500">
            <RiPencilLine size="1.8rem" />
          </span>
        </label>
        <label className="mb-[2rem] flex w-full flex-col ">
          <span className="Cap3 mb-[1rem]">닉네임</span>
          <input
            className="Cap4 mb-[0.4rem] rounded-[0.8rem] border p-[1rem_1rem] outline-none
          focus:border-primary-500"
            text="닉네임"
            placeholder="수정할 닉네임을
          입력해주세요"
            type="text"
            {...register("nickname", nicknameValid())}
          />
          <ErrorMessage errorMessage={errors?.nickname?.message} isProfile />
        </label>

        <label className="flex w-full flex-col">
          <span className="Cap3 mb-[1rem]">소개</span>
          <input
            className="Cap4 mb-[0.4rem] rounded-[0.8rem] border p-[1rem_1rem] outline-none focus:border-primary-500"
            text="소개"
            placeholder="수정할 내용을 입력해주세요"
            type="text"
            {...register("introduce", {
              maxLength: {
                value: 50,
                message: "소개는 50자 이하로 작성해주세요",
              },
            })}
          />
          <ErrorMessage errorMessage={errors?.introduce?.message} isProfile />
        </label>

        <Button className="mt-[3rem] py-[1.3rem]">수정완료</Button>
      </form>
    </ModalLayout>
  );
};

export default EditModal;
