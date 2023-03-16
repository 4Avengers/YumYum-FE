import React, { useCallback, useEffect, useState } from "react";
import cls from "utils/cls";
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const ImageList = ({ defaultImage, setImgList, style }) => {
  const [imagePreview, setImagePreview] = useState([]);

  // 이미지 저장 및 이미지 프리뷰 저장
  const handleAddImages = useCallback(
    (event) => {
      const imageList = event.target.files;
      setImgList((prev) => [...prev, ...Array.from(imageList)].slice(0, 3));
      const blobImage = URL.createObjectURL(imageList[0]);
      setImagePreview((prev) => [...prev, blobImage]);
    },
    [setImgList]
  );

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = useCallback(
    (idx) => {
      setImagePreview((prev) => prev.filter((_, index) => index !== idx));
      setImgList((prev) => prev.filter((_, index) => index !== idx));
    },
    [setImgList]
  );

  useEffect(() => {
    setImagePreview(defaultImage);
  }, [defaultImage]);

  return (
    <div className={cls(style.verticalContainer)}>
      <span className={cls(style.title)}>사진</span>
      <div className="flex space-x-[0.7rem]">
        {React.Children.toArray(
          imagePreview?.map((src, idx) => (
            <div
              className={cls(
                " relative h-[8rem] w-[8rem] cursor-pointer hover:border-primary-500"
              )}
            >
              <img
                className="h-full w-full rounded-[1rem] border object-cover"
                src={src}
                alt="이미지"
              />
              <span
                className="flex-center absolute top-[-0.7rem] right-[-0.5rem] h-[2rem] w-[2rem] rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                onClick={() => handleDeleteImage(idx)}
              >
                <IoMdClose size="1rem" />
              </span>
            </div>
          ))
        )}
        {React.Children.toArray(
          Array(3 - imagePreview?.length)
            .fill(1)
            ?.map((image) => (
              <label
                className={cls(
                  "flex-center group h-[8rem] w-[8rem] cursor-pointer rounded-[1rem] border hover:border-primary-500"
                )}
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={handleAddImages}
                />
                <BiPlus
                  size="2.5rem"
                  strokeWidth="1"
                  className="text-primary-400 group-hover:text-primary-500"
                />
              </label>
            ))
        )}
      </div>
    </div>
  );
};

export default ImageList;
