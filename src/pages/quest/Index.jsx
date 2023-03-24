import { isListAtom } from "atoms/mapAtom";
import { markerModal, questPostModal } from "atoms/modalAtom";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";
import Layout from "components/layout/Layout";
import QuestList from "components/quest/list/QuestList";
import QuestMap from "components/quest/map/Map";
import MarkerModal from "components/quest/markerModal/MarkerModal";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useGeolocation from "hooks/useGeoLocation";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import { BiSearch } from "react-icons/bi";
import { useRecoilValue } from "recoil";

/** 탐색 */
const Quest = () => {
  const [user] = useUser();
  const {
    location: { latitude, longitude },
  } = useGeolocation();

  const [openPostDetailModal] = useRecoilModal(questPostModal);
  const [openMarkerModal] = useRecoilModal(markerModal);
  const isList = useRecoilValue(isListAtom);

  return (
    <Layout title="탐색" headerType="MAP" hasPadding={false}>
      <CustomHelmet title="탐색" />
      <form
        className="absolute top-[6rem] z-[2] flex w-full  items-center px-[2rem] py-[2rem] "
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearch
          size="2rem"
          className="absolute left-[3rem] text-primary-500"
        />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="Cap4 w-full rounded-[1rem] bg-gray-50 py-[0.8rem] pl-[4rem] pr-[1rem] shadow-md outline-none focus:ring-1 focus:ring-primary-400"
        />
      </form>
      {isList ? (
        <QuestList lat={latitude} lng={longitude} />
      ) : (
        // 지도 레벨 수정
        <QuestMap lat={latitude} lng={longitude} />
      )}
      <AnimatePresence>
        {openPostDetailModal && <PostDetailModal user={user} />}
        {openMarkerModal && <MarkerModal lat={latitude} lng={longitude} />}
      </AnimatePresence>
    </Layout>
  );
};

export default Quest;
