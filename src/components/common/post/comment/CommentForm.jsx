import CommentService from "apis/service/CommentService";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import React, { useCallback, useRef } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useRecoilValue } from "recoil";
import { handleProfileError } from "utils/handleImgError";

// input 대신 textarea로 autosize
const CommentForm = ({ postId, user }) => {
  const queryKey = useRecoilValue(postQueryKeyAtom);
  const { mutate: addComment } = CommentService.AddComment({
    postId,
    queryKey,
  });
  const inputRef = useRef(null);

  // 코멘트 작성
  const onSumbit = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputRef.current) return;
      const { value } = inputRef.current;
      if (value.trim() === "") return;
      addComment({ content: value });
      inputRef.current.value = "";
    },
    [addComment]
  );

  return (
    <form
      className="absolute bottom-[6rem] h-[7.7rem] w-full  flex-1  bg-white px-[2rem] py-[2rem] shadow-[3px_3px_10px_1px_rgba(0,0,0,0.15)]"
      onSubmit={onSumbit}
    >
      <div className="relative flex items-center space-x-[2rem]">
        <img
          className="h-[3rem] w-[3rem] rounded-full object-cover"
          src={user?.profile_image}
          onError={(e) => handleProfileError(e, user?.id)}
          alt="프로필"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="댓글 추가하기"
          className="Cap4 flex-1 border-b border-primary-400 py-[0.8rem] pr-[3rem] outline-none"
        />
        <button className="absolute right-[0rem] ">
          <HiOutlinePaperAirplane
            size="2rem"
            className="mt-[-0.3rem]  rotate-[45deg]  text-primary-400 group-focus-within:text-primary-600"
          />
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
