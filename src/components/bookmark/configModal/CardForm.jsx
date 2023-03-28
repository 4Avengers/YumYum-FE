import BookmarkService from "apis/service/BookmarkService";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

// collection 받아와서 input에 기본값으로 넣어줘야함
const CardForm = ({ toggleEditMode, collection }) => {
  const { mutate: editBookmark } = BookmarkService.UpdateBookmark(
    collection?.id
  );

  const inputRef = useRef(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const text = inputRef?.current?.value;
    if (text?.trim() === "")
      return toast.error("컬렉션명은 최소 2글자 이상입니다.");

    // 추가 로직
    editBookmark({ name: text });
    toggleEditMode();
  };

  const handleCloseForm = (e) => {
    e.preventDefault();
    toggleEditMode();
  };

  useEffect(() => {
    if (inputRef?.current && collection) {
      inputRef.current.value = collection?.name;
      inputRef.current.focus();
    }
  }, [collection]);

  return (
    <form
      className="flex items-center justify-between space-x-[1rem] border-b px-[2rem] py-[1rem]"
      onSubmit={handleOnSubmit}
    >
      <input
        className="Cap2 flex-1 py-[0.4rem]  outline-none focus:border-b"
        placeholder="컬렉션명을 입력해주세요"
        ref={inputRef}
      />
      <div className="flex space-x-[1rem]">
        <button className="Cap4 rounded-[1rem]   border bg-primary-600 p-[0.7rem_1rem] text-primary-100 transition-colors ">
          완료
        </button>
        <button
          className="Cap4 rounded-[1rem] border border-primary-600 p-[0.7rem_1rem] text-primary-600 transition-colors "
          onClick={handleCloseForm}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default CardForm;
