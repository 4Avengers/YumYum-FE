import React from "react";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const chats = [1, 2, 3, 4];
  return (
    <ul className="mb-[12rem] h-[calc(100vh-18.7rem)]  overflow-y-auto px-[2rem] scrollbar-hide">
      {chats?.map((item) => (
        <ChatItem key={item} />
      ))}
    </ul>
  );
};

export default ChatList;
