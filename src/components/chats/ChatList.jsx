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
import useObserver from "hooks/useObserver";

const ChatList = ({ chatId, user, receiver, chatRef }) => {
  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(1);
  const [prevHeight, setPrevHeight] = useState(null);

  const fetchNextPage = useCallback(() => {
    const chatLen = chats?.length;
    if (chatLen >= 20 && chatLen % 20 === 0) {
      setPage((prev) => prev + 1);
      setPrevHeight(chatRef.current?.scrollHeight);
    }
  }, [chats, chatRef]);

  const [observerRef] = useObserver(fetchNextPage);

  // 스크롤을 맨밑으로 보낸다.
  const scrollToLastMessage = useCallback(() => {
    const chatContainer = chatRef.current;
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
    });
  }, [chatRef]);

  // chatId에 해당하는 채팅방의 데이터를 불러온다.
  const getMessages = useCallback(() => {
    const chatCollection = collection(db, `chatRoom`);
    const roomMessagesQuery = query(
      chatCollection,
      where("chatId", "==", chatId),
      orderBy("createdAt", "desc"),
      limit(page * 20)
    );
    return roomMessagesQuery;
  }, [chatId, page]);

  // 현재 채팅방의 데이터를 실시간으로 감지한다.
  useEffect(() => {
    const roomMessagesQuery = getMessages();
    onSnapshot(roomMessagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChats(updatedMessages.reverse());
    });
  }, [getMessages, chatRef]);

  // 채팅이 밑에서 300px이하일 경우에는 채팅 메시지가 도착했을 때 스크롤을 맨밑으로 보낸다. 아닐 경우는 현재 높이 - 이전 높이값을 scrollTop으로 지정
  useEffect(() => {
    const chatContainer = chatRef.current;
    const shouldScrollToBottom =
      chatContainer.scrollTop + chatContainer.clientHeight >=
      chatContainer.scrollHeight - 300;
    if (shouldScrollToBottom) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    } else {
      chatContainer.scrollTop = chatContainer?.scrollHeight - prevHeight;
      setPrevHeight(null);
    }
  }, [chats, chatRef]);

  // 채팅페이지 첫 로드시에 스크롤을 맨밑으로 보낸다.
  useEffect(() => {
    if (page === 1 && chats?.length <= 20) {
      scrollToLastMessage();
    }
  }, [chats, page, scrollToLastMessage]);

  return (
    <ul
      className="chatScroll h-[calc(100vh-18.7rem)] space-y-[1rem]  overflow-y-auto  px-[2rem] pb-[2rem] pt-[2rem]"
      ref={chatRef}
    >
      <li ref={observerRef}></li>
      {chats?.map((chat) => (
        <ChatItem
          key={chat?.id}
          chat={chat}
          isMe={user?.id === chat?.userId}
          receiver={receiver}
          user={user}
        />
      ))}
    </ul>
  );
};

export default ChatList;
