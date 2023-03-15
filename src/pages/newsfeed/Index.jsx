import { commentModalAtom, postConfigModalAtom } from "atoms/modalAtom";
import CommentModal from "components/common/post/comment/CommentModal";
import PostConfigModal from "components/common/post/config/PostConfigModal";
import Layout from "components/layout/Layout";
import NewsFeedArround from "components/newsfeed/arround/Arround";
import NewsFeedRecent from "components/newsfeed/recent/Recent";
import StatusHeader from "components/newsfeed/StatusHeader";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import { useState } from "react";

const NewsFeed = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const [showPostConfigModal] = useRecoilModal(postConfigModalAtom);
  const [showCommentModal] = useRecoilModal(commentModalAtom);

  return (
    <Layout title="뉴스피드" headerType="SEARCH" hasPadding={false}>
      <StatusHeader isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      {isCurrent ? <NewsFeedRecent /> : <NewsFeedArround />}

      <AnimatePresence>
        {showPostConfigModal && <PostConfigModal />}
        {showCommentModal && <CommentModal />}
      </AnimatePresence>
    </Layout>
  );
};

export default NewsFeed;
