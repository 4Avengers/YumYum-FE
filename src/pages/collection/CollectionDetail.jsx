import CollectionService from "apis/service/CollectionService";
import CollectionBtns from "components/collection/detail/Btns";
import PostList from "components/collection/detail/PostList";
import UserContainer from "components/collection/detail/UserContainer";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import Header from "components/layout/Header";
import QuestMap from "components/quest/map/Map";
import { AnimatePresence } from "framer-motion";
import useModal from "hooks/useModal";
import useUser from "hooks/useUser";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { modalLayoutAni } from "shared/motionStyle";
import CollectionModal from "./CollectionModal";

const posts = [];

const CollectionDetail = () => {
  const [user] = useUser();
  const { profileId, collectionId } = useParams();
  const [isList, setIsList] = useState(true);
  const [restaurantId, setRestaurantId] = useState(null);
  const [openDetail, setOpenDetail] = useModal(false);
  const collection = CollectionService.ReadCollectionDetail({
    profileId,
    collectionId,
  });

  return (
    <ModalLayout variants={modalLayoutAni} hasPadding={false}>
      <Header
        headerType={user?.id === +profileId ? "PLUS" : null}
        hasBack
        title={collection?.nickname || ""}
      />
      <div className="flex flex-1 flex-col space-y-[2rem] overflow-scroll  py-[2rem] scrollbar-hide">
        <UserContainer collection={collection} />
        <CollectionBtns isList={isList} setIsList={setIsList} />
        <div className="z-0 flex w-full flex-1">
          {isList ? (
            <PostList
              setOpenModal={setOpenDetail}
              setRestaurantId={setRestaurantId}
            />
          ) : (
            <QuestMap posts={posts} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {openDetail && (
          <CollectionModal
            onClick={() => setOpenDetail(false)}
            collectionId={collectionId}
            restaurantId={restaurantId}
          />
        )}
      </AnimatePresence>
    </ModalLayout>
  );
};

export default CollectionDetail;
