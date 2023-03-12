import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import cls from "utils/cls";

const HashTagList = ({ setValue, style }) => {
  const [hashTags, setHashTags] = useState([]);
  const inputRef = useRef(null);
  const [isComposing, setIsComposing] = useState(false);

  const onKeyDown = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key !== "Enter") return;
      if (inputRef && inputRef.current) {
        const value = inputRef.current.value;
        setHashTags((prev) => prev.concat(value));
        inputRef.current.value = "";
        e.preventDefault();
      }
    },
    [isComposing, inputRef]
  );

  const onDelete = useCallback((index) => {
    setHashTags((prev) => prev.filter((_, i) => index !== i));
  }, []);

  useEffect(() => {
    setValue("hashtagNames", hashTags);
  }, [setValue, hashTags]);

  return (
    <label className={cls(style?.verticalContainer)}>
      <span className={cls(style?.title)}>해시태그</span>
      <div className="flex space-x-[1.2rem] rounded-[0.8rem] border  border-primary-200    px-[1rem] text-[1.6rem] focus:border-primary-400">
        <input
          className="Cap2 flex-1  border-none bg-transparent py-[1rem] text-[1.6rem] placeholder:text-primary-400 focus:outline-none focus:ring-transparent"
          type="text"
          placeholder={"해시태그를 작성하고 Enter를 입력해주세요"}
          onKeyDown={onKeyDown}
          ref={inputRef}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          disabled={hashTags.length >= 10}
        />
      </div>
      {!!hashTags?.length && (
        <div className="flex flex-wrap gap-[0.5rem]">
          {hashTags?.map((tag, index) => (
            <div
              key={index}
              className="Sub2 textColor rounded- flex  cursor-pointer items-center space-x-[0.8rem] rounded-full bg-primary-500 px-[0.7rem] py-[0.5rem] hover:bg-primary-600"
              onClick={() => onDelete(index)}
            >
              <span className="Cap5 text-white">{tag}</span>
              <IoMdClose size="1rem" className="text-white" />
            </div>
          ))}
        </div>
      )}
    </label>
  );
};

export default HashTagList;
