import { commentModalAtom, postConfigModalAtom } from "atoms/modalAtom";
import CommentModal from "components/common/post/comment/CommentModal";
import PostConfigModal from "components/common/post/config/PostConfigModal";
import Layout from "components/layout/Layout";
// import NewsFeedArround from "components/newsfeed/arround/Arround";
//import NewsFeedRecent from "components/newsfeed/recent/Recent";
import StatusHeader from "components/newsfeed/StatusHeader";
import FakePostList from "components/skeleton/post/FakePostList";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import React, { Suspense, useState } from "react";

const NewsFeedArround = React.lazy(() =>
  import("components/newsfeed/arround/Arround")
);

const NewsFeedRecent = React.lazy(() =>
  import("components/newsfeed/recent/Recent")
);

const NewsFeed = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  const [showPostConfigModal] = useRecoilModal(postConfigModalAtom);
  const [showCommentModal] = useRecoilModal(commentModalAtom);

  return (
    <Layout
      title="뉴스피드"
      headerType="SEARCH"
      hasPadding={false}
      isScroll={false}
    >
      <CustomHelmet title="뉴스피드" />
      <StatusHeader isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      {isCurrent ? (
        <Suspense fallback={<FakePostList />}>
          <NewsFeedRecent />
        </Suspense>
      ) : (
        <Suspense fallback={<FakePostList />}>
          <NewsFeedArround />
        </Suspense>
      )}
      <AnimatePresence>
        {showPostConfigModal && <PostConfigModal />}
        {showCommentModal && <CommentModal />}
      </AnimatePresence>
    </Layout>
  );
};

export default NewsFeed;
