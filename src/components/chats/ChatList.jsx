import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import React, { useCallback, useEffect, useState } from "react";
import ChatItem from "./ChatItem";

const ChatList = ({ chatId, user, receiver }) => {
  const [chats, setChats] = useState([]);

  const getMessages = useCallback(() => {
    const chatCollection = collection(db, `chatRoom`);
    console.log(chatCollection, chatId);
    const roomMessagesQuery = query(
      chatCollection,
      where("chatId", "==", chatId),
      orderBy("createdAt", "desc"),
      limit(20)
    );
    return roomMessagesQuery;
  }, [chatId]);

  useEffect(() => {
    const roomMessagesQuery = getMessages();
    console.log(roomMessagesQuery);
    onSnapshot(roomMessagesQuery, (snapshot) => {
      console.log(snapshot);
      const updatedMessages = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChats(updatedMessages.reverse());
    });
  }, [getMessages]);

  console.log(chats);

  return (
    <ul className="mb-[12rem] h-[calc(100vh-18.7rem)]  space-y-[1rem] overflow-y-auto px-[2rem] pt-[2rem] scrollbar-hide">
      {chats?.map((chat) => (
        <ChatItem
          key={chat?.id}
          chat={chat}
          isMe={user?.id === chat?.userId}
          receiver={receiver}
        />
      ))}
    </ul>
  );
};

export default ChatList;
