import dayjs from "dayjs";
import React from "react";
import cls from "utils/cls";
import { handleImgError } from "utils/handleImgError";

const ChatItem = ({ chat, isMe, receiver }) => {
  return (
    <li className={cls("flex space-x-[1rem]")} isMe={isMe}>
      <img
        className={"h-[3.5rem] w-[3.5rem] rounded-full object-cover"}
        src={receiver?.profile_image}
        alt="avatar"
        onError={handleImgError}
      />
      <div
        className={cls("Cap3  flex flex-1 flex-col space-y-[0.4rem]")}
        isMe={isMe}
      >
        <span>{chat?.nickname}</span>
        <div className="">
          <p className="Cap4 break-all rounded-md bg-white p-[0.6rem]">
            "dasndkjasbdkjasbdhjbashjdbashjdbhjasbdjhasbdjhbashjdbshjbdhjasbdjhbashjdbahjsd
            hjas dhjas dhj asjhd ahjsd jhs hj"
          </p>
        </div>
      </div>
      <span className="self-end">
        {dayjs(new Date(chat.createdAt?.seconds)).format("A HH:mm")}
      </span>
    </li>
  );
};

export default ChatItem;
