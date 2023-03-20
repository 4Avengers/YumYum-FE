import ModalLayout from "components/common/modalLayout/ModalLayout";
import Header from "components/layout/Header";
import { modalLayoutAni } from "shared/motionStyle";
import { Outlet, useParams } from "react-router-dom";
import UserContainer from "components/collection/index/UserContainer";
import useUser from "hooks/useUser";
import SearchForm from "components/collection/index/SearchForm";
import CollectionList from "components/collection/index/CollectionList";
import useRecoilModal from "hooks/useRecoilModal";
import ListModal from "components/collection/ListModal/ListModal";
import { myListConfigModal, myListEditModal } from "atoms/modalAtom";
import { AnimatePresence } from "framer-motion";
import ListEditModal from "components/collection/listEdit/ListEditModal";

const Collection = () => {
  const { profileId } = useParams();
  const [openConfigModal, setOpenConfigModal] =
    useRecoilModal(myListConfigModal);
  const [openEditModal, setOpenEditModal] = useRecoilModal(myListEditModal);
  const [user] = useUser();

  return (
    <>
      <ModalLayout variants={modalLayoutAni} hasPadding={false}>
        <Header headerType={user?.id === +profileId ? "PLUS" : null} hasBack />
        <div className="flex flex-1 flex-col space-y-[2rem] py-[2rem]">
          <UserContainer profileId={profileId} />
          <SearchForm />
          <CollectionList profileId={profileId} />
        </div>
      </ModalLayout>
      <Outlet />
      <AnimatePresence>
        {openConfigModal && (
          <ListModal
            setModal={setOpenConfigModal}
            openEditModal={() => setOpenEditModal(true)}
          />
        )}
        {openEditModal && <ListEditModal setModal={setOpenEditModal} />}
      </AnimatePresence>
    </>
  );
};

export default Collection;

// [현재]
/** 마이리스트 상세 더보기    /my-list/collections/posts/:restaurantId   */

// [수정]
/** 마이리스트 상세 더보기    /my-list/collections/:collectionId/posts/:restaurantId */

//[현재];

// const response = [
//   {
//     id: 75,
//     restaurant: {
//       id: 10,
//       category_group_name: "음식점",
//       place_name: "맥도날드 평내DT점",
//       road_address_name: "경기 남양주시 경춘로 1273",
//     },
//     post: {
//       content: "내가찾는맛집",
//       rating: 4,
//     },
//   },
// ];

// [수정]

// const response = 뉴스피드 GET요청과 동일
