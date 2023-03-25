import { questPostModal } from "atoms/modalAtom";
import AroundPlace from "components/home/around/AroundPlace";
import Button from "components/home/button/Button";
import HomeForm from "components/home/form/HomeForm";
import HotList from "components/home/hotList/HotList";
import RecommandPlace from "components/home/recommand/RecommandPlace";
import Layout from "components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import useGeolocation from "hooks/useGeoLocation";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import React from "react";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";
import Header from "components/layout/Header";

/** 메인페이지 */
const Home = () => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();

  const [openPostDetailModal] = useRecoilModal(questPostModal);
  const [user] = useUser();

  return (
    <Layout hasHeader={false} hasPadding={false}>
      <Header headerType="SEARCH" className="z-[99]" isTransparent />
      <div className="flex flex-1 flex-col  pb-[2rem] scrollbar-hide">
        <HomeForm />
        <AroundPlace x={longitude} y={latitude} />
        <Button />
        <HotList />
        <RecommandPlace />
      </div>
      <AnimatePresence>
        {openPostDetailModal && <PostDetailModal user={user} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
