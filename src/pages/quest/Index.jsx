import Layout from "components/layout/Layout";
import QuestMap from "components/quest/map/Map";
import Markers from "components/quest/map/Markers";
import useGeoLoation from "hooks/useGeoLocation";

/** 탐색 */
const Quest = () => {
  const {
    location: { latitude, longitude },
  } = useGeoLoation();
  const onLoadMap = (map) => {
    // window.naver.maps.Event.addListener(map, "click", clearCurrentStore);
  };

  return (
    <Layout title="탐색" headerType="MAP">
      <QuestMap latitude={latitude} longitude={longitude} onLoad={onLoadMap} />
      <Markers />
    </Layout>
  );
};

export default Quest;
