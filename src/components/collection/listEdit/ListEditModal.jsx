import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { bgAni, listModalAni } from "shared/motionStyle";
import { handleImgError } from "utils/handleImgError";
import { RiPencilLine } from "react-icons/ri";
import ErrorMessage from "elements/ErrorMessage";
import Button from "elements/Button";
import { useRecoilValue } from "recoil";
import { collectionIdAtom } from "atoms/collectionAtom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
// import { toast } from "react-toastify";

const ListEditModal = ({ setModal }) => {
  const [image, setImage] = useState(null);
  const [previewImg, setPreviewImage] = useState("");
  const [collectionId, setCollectionId] = useRecoilValue(collectionIdAtom);

  // 리스트 item 수정 api (collectionId+"")

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const collection = {}; // id를 통해 값 조회

  // 수정
  const onValid = (data) => {
    const { name, description } = data;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
  };

  // 이미지 프리뷰
  const handlePreviewChange = useCallback((e) => {
    const file = e.target.files[0];
    const blobImage = URL.createObjectURL(file);
    setImage(file);
    setPreviewImage(blobImage);
  }, []);

  // 초기 세팅
  useEffect(() => {
    if (collection) {
      setValue("name", collection?.name);
      setValue("description", collection?.description);
      setImage(collection?.image?.file_url);
      setPreviewImage(collection?.image?.file_url);
    }
  }, [setValue, collection]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("리스트가 수정되었습니다.");
  //     setModal(false);
  //     setCollectionId(null)
  //   }
  // }, [isSuccess,setModal,openConfigModal,setCollectionId]);

  return (
    <motion.div
      className=" absolute top-0 z-[1000] h-full w-full"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={setModal}
    >
      <motion.form
        onSubmit={handleSubmit(onValid)}
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white "
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-[2rem]">
          <h2 className="H1 ">나의 리스트 편집</h2>
          <IoMdClose
            size="2.5rem"
            className="cursor-pointer text-primary-600 hover:text-primary-500"
            onClick={() => setModal(false)}
          />
        </div>
        <div className="flex flex-col px-[2rem]">
          <label className="flex-center relative mx-auto mb-[3rem] h-[10rem] w-[10rem] rounded-[1rem] ring-1 ring-primary-400  ring-offset-2">
            <input
              type="file"
              className="hidden"
              onChange={handlePreviewChange}
            />
            <img
              className="h-[10rem] w-[10rem] rounded-[1rem] object-cover"
              src={previewImg}
              alt="listImage"
              onError={handleImgError}
            />
            <span className=" flex-center absolute top-[-1rem] right-[-1rem]  h-[3rem] w-[3rem] cursor-pointer rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-500">
              <RiPencilLine size="1.8rem" />
            </span>
          </label>
          <label className="mb-[2rem] flex w-full flex-col ">
            <span className="Cap3 mb-[1rem]">리스트 이름</span>
            <input
              className="Cap4 mb-[0.4rem] rounded-[0.8rem] border p-[1rem_1rem] outline-none
      focus:border-primary-500"
              placeholder="리스트 이름을 입력해주세요."
              type="text"
              {...register("name", {
                required: "리스트 이름은 필수로 입력해야합니다.",
              })}
            />
            <ErrorMessage errorMessage={errors?.name?.message} isProfile />
          </label>

          <label className="flex w-full flex-col">
            <span className="Cap3 mb-[1rem]">소개</span>
            <input
              className="Cap4 mb-[0.4rem] rounded-[0.8rem] border p-[1rem_1rem] outline-none focus:border-primary-500"
              text="소개"
              placeholder="수정할 내용을 입력해주세요"
              type="text"
              {...register("description", {
                maxLength: {
                  value: 50,
                  message: "소개는 50자 이하로 작성해주세요",
                },
              })}
            />
            <ErrorMessage
              errorMessage={errors?.description?.message}
              isProfile
            />
          </label>

          <Button className="mt-[3rem] py-[1.3rem]">수정완료</Button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ListEditModal;
