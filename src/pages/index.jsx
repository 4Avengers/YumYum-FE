import AroundPlace from "components/home/around/AroundPlace";
import HomeForm from "components/home/form/HomeForm";
import HotList from "components/home/hotList/HotList";
import RecommandPlace from "components/home/recommand/RecommandPlace";
import Layout from "components/layout/Layout";
import useGeolocation from "hooks/useGeoLocation";
import React from "react";

/** 메인페이지 */
const Home = () => {
  const {
    location: { latitude, longitude },
  } = useGeolocation();
  return (
    <Layout hasHeader={false} hasPadding={false}>
      <div className="flex flex-1 flex-col  pb-[2rem] scrollbar-hide">
        <HomeForm />
        <AroundPlace x={longitude + ""} y={latitude + ""} />
        <button>맛집 추천</button>
        <HotList />
        <RecommandPlace />
      </div>
    </Layout>
  );
};

export default Home;
