import React, { useCallback, useRef } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

const ChatForm = ({ user, chatId, chatRef }) => {
  const inputRef = useRef(null);

  // 채팅
  const onSumbit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!inputRef.current) return;
      const { value } = inputRef.current;
      if (value.trim() === "") return;
      // 채팅 추가 로직
      const messagesCollection = collection(db, `chatRoom`);
      await addDoc(messagesCollection, {
        message: value,
        chatId,
        userId: user.id,
        nickname: user.nickname,
        avatarImg: user.profile_image,
        createdAt: new Date(),
      });
      inputRef.current.value = "";
      if (chatRef?.current)
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    },
    [chatId, user, chatRef]
  );
  return (
    <form
      className="absolute bottom-[6rem] h-[7.7rem] w-full  flex-1  bg-white px-[2rem] py-[2rem] shadow-[3px_3px_10px_1px_rgba(0,0,0,0.15)]"
      onSubmit={onSumbit}
    >
      <div className="relative flex items-center space-x-[2rem]">
        <img
          className="h-[3rem] w-[3rem] rounded-full object-cover ring-1 ring-primary-400 ring-offset-2"
          src={user?.profile_image}
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

export default ChatForm;
