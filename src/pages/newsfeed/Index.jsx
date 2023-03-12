import { commentModalAtom } from "atoms/modalAtom";
import CommentModal from "components/common/post/comment/CommentModal";
import Layout from "components/layout/Layout";
import NewsFeedRecent from "components/newsfeed/recent/Recent";
import StatusHeader from "components/newsfeed/StatusHeader";
import { AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import { useRecoilValue } from "recoil";

const NewsFeed = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const showCommentModal = useRecoilValue(commentModalAtom);

  return (
    <Layout title="뉴스피드" headerType="SEARCH" hasPadding={false}>
      <StatusHeader isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      <NewsFeedRecent />
      <AnimatePresence>{showCommentModal && <CommentModal />}</AnimatePresence>
    </Layout>
  );
};

export default NewsFeed;
