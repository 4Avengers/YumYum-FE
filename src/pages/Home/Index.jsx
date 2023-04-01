import { questPostModal, restaurantModal } from "atoms/modalAtom";
import Button from "components/home/button/Button";
import HomeForm from "components/home/form/HomeForm";
import Layout from "components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import useGeolocation from "hooks/useGeoLocation";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import React, { Suspense } from "react";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";
import Header from "components/layout/Header";
import RestaurantModal from "components/common/restaurant/RestaurantModal";
import FakeArroundList from "components/skeleton/home/FakeArroundList";
import FakeHotList from "components/skeleton/home/FakeHotList";
import FakeRecommandList from "components/skeleton/home/FakeRecommandList";

const AroundPlace = React.lazy(() =>
  import("components/home/around/AroundPlace")
);
const HotList = React.lazy(() => import("components/home/hotList/HotList"));
const RecommandPlace = React.lazy(() =>
  import("components/home/recommand/RecommandPlace")
);

/** 메인페이지 */
const Home = () => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();

  const [openPostDetailModal] = useRecoilModal(questPostModal);
  const [openRestaurantModal] = useRecoilModal(restaurantModal);
  const [user] = useUser();

  return (
    <Layout hasHeader={false} hasPadding={false}>
      <Header headerType="SEARCH" className="z-[99]" isTransparent />
      <div className="flex flex-1 flex-col  pb-[2rem] scrollbar-hide">
        <HomeForm />
        <Suspense fallback={<FakeArroundList />}>
          <AroundPlace x={longitude} y={latitude} />
        </Suspense>
        <Button />
        <Suspense fallback={<FakeHotList />}>
          <HotList />
        </Suspense>
        <Suspense fallback={<FakeRecommandList />}>
          <RecommandPlace />
        </Suspense>
      </div>
      <AnimatePresence>
        {openPostDetailModal && <PostDetailModal user={user} />}
        {openRestaurantModal && <RestaurantModal isSearch={false} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
