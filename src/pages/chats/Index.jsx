import ProfileService from "apis/service/ProfileService";
import ChatForm from "components/chats/ChatForm";
import ChatList from "components/chats/ChatList";
import Layout from "components/layout/Layout";
import useUser from "hooks/useUser";
import { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { getChatId } from "utils/getChatId";

const Chats = () => {
  const { receiverId } = useParams();
  const { data: receiver } = ProfileService.ReadProfile(receiverId);
  const [user] = useUser();
  const chatRef = useRef(null);

  const chatId = useMemo(
    () => getChatId(user?.id, receiverId),
    [user, receiverId]
  );

  return (
    <Layout title={receiver?.nickname} hasBack hasPadding={false}>
      <div className="flex flex-1 flex-col bg-gray-200 ">
        <ChatList
          chatId={chatId}
          user={user}
          receiver={receiver}
          chatRef={chatRef}
        />
        <ChatForm user={user} chatId={chatId} chatRef={chatRef} />
      </div>
    </Layout>
  );
};

export default Chats;
