import Layout from "components/layout/Layout";
import React, { useState } from "react";
import StatusHeader from "components/profile/StatusHeader";

/** 팔로우 리스트 */
const Follow = () => {

   const [isCurrent, setIsCurrent] = useState(true);

  return (
  <Layout hasBack title="장승윤">
  <StatusHeader isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
  </Layout>

  );
};

export default Follow;

 


 