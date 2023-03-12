import PostCard from "components/common/post/postCard/PostCard";
import Layout from "components/layout/Layout";
import StatusHeader from "components/newsfeed/StatusHeader";

import React, { useState } from "react";

const NewsFeed = () => {
  const [isCurrent, setIsCurrent] = useState(true);
  return (
    <Layout title="뉴스피드" headerType="SEARCH" hasPadding={false}>
      <StatusHeader isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      <ul>
        <PostCard />
      </ul>
    </Layout>
  );
};

export default NewsFeed;
