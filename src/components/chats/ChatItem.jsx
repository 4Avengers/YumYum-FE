import dayjs from "dayjs";
import React from "react";
import cls from "utils/cls";
import { handleImgError } from "utils/handleImgError";

const ChatItem = ({ chat, isMe, receiver, user }) => {
  return (
    <>
      {isMe ? (
        <li className={cls("flex justify-end space-x-[1rem] last:mb-[2rem]")}>
          <span className="self-end whitespace-nowrap text-[1rem] text-primary-500">
            {dayjs(new Date(chat.createdAt?.seconds)).format("A HH:mm")}
          </span>

          <p className="Cap4  break-all  rounded-[0.8rem] bg-[#fcdb57] py-[0.6rem] px-[1rem]">
            {chat?.message}
          </p>
        </li>
      ) : (
        <li className={cls("flex space-x-[1rem] last:mb-[2rem]")}>
          <img
            className={"h-[3.5rem] w-[3.5rem] rounded-full object-cover"}
            src={isMe ? user?.profile_image : receiver?.profile_image}
            alt="avatar"
            onError={handleImgError}
          />
          <div className={cls(" flex flex-col space-y-[0.4rem]")}>
            <span className="Cap6">{chat?.nickname}</span>
            <div className="flex  space-x-[0.8rem]">
              <p className="Cap4  break-all  rounded-[0.8rem] bg-white py-[0.6rem] px-[1rem]">
                {chat?.message}
              </p>
              <span className="self-end whitespace-nowrap text-[1rem] text-primary-500">
                {dayjs(new Date(chat.createdAt?.seconds)).format("A HH:mm")}
              </span>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default ChatItem;
