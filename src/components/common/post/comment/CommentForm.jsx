import CommentService from "apis/service/CommentService";
import React, { useCallback, useRef } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";

// input 대신 textarea로 autosize
const CommentForm = ({ postId }) => {
  const { mutate: addComment } = CommentService.AddComment(postId);
  const inputRef = useRef(null);

  const onSumbit = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputRef.current) return;
      const { value } = inputRef.current;
      if (value.trim() === "") return;
      addComment({ content: value });
    },
    [addComment]
  );

  return (
    <form
      className="group relative flex flex-1 items-center space-x-[2rem] px-[2rem] py-[2rem] shadow-[3px_3px_10px_1px_rgba(0,0,0,0.15)]"
      onSubmit={onSumbit}
    >
      <img
        className="h-[3rem] w-[3rem] rounded-full"
        src="https://avatars.dicebear.com/api/identicon/wooncloud.svg"
        alt="프로필"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="댓글 추가하기"
        className="Cap4 flex-1 border-b border-primary-400 py-[0.8rem] pr-[3rem] outline-none"
      />
      <button className="absolute right-[3rem] ">
        <HiOutlinePaperAirplane
          size="2rem"
          className="mt-[-0.3rem]  rotate-[45deg]  text-primary-400 group-focus-within:text-primary-600"
        />
      </button>
    </form>
  );
};

export default CommentForm;
