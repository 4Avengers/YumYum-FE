import ListService from "apis/service/ListService";
import ProfileService from "apis/service/ProfileService";
import { commentModalAtom } from "atoms/modalAtom";
import CollectionBtns from "components/collection/detail/Btns";
import CollectionMap from "components/collection/detail/map/CollectionMap";
import PostList from "components/collection/detail/PostList";
import UserContainer from "components/collection/detail/UserContainer";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import CommentModal from "components/common/post/comment/CommentModal";
import Header from "components/layout/Header";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useModal from "hooks/useModal";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { modalLayoutAni } from "shared/motionStyle";
import CollectionModal from "../../components/collection/restaurant/CollectionModal";

const CollectionDetail = () => {
  const [user] = useUser();
  const { profileId, collectionId } = useParams();
  const [isList, setIsList] = useState(true);
  const [restaurantId, setRestaurantId] = useState(null);
  const [openDetail, setOpenDetail] = useModal(false);
  const { data: profile } = ProfileService.ReadProfile(profileId);
  const [showCommentModal] = useRecoilModal(commentModalAtom);

  const { data: collectionItem } = ListService.ReadCollectionPosts({
    collectionId,
  });

  return (
    <ModalLayout variants={modalLayoutAni} hasPadding={false}>
      <CustomHelmet title={collectionItem?.name || "맛집리스트"} />
      <Header
        headerType={user?.id === +profileId ? "PLUS" : null}
        hasBack
        title={profile?.nickname}
      />
      <div className="flex flex-1 flex-col space-y-[2rem] overflow-scroll  py-[2rem] scrollbar-hide">
        <UserContainer profile={profile} collection={collectionItem} />
        <CollectionBtns isList={isList} setIsList={setIsList} />
        <div className="z-0 flex w-full flex-1">
          {isList ? (
            <PostList
              setOpenModal={setOpenDetail}
              setRestaurantId={setRestaurantId}
              posts={collectionItem?.post}
            />
          ) : (
            <CollectionMap
              posts={collectionItem?.post}
              lat={Number(collectionItem?.post[0]?.restaurant?.y)}
              lng={Number(collectionItem?.post[0]?.restaurant?.x)}
              setOpenModal={setOpenDetail}
              setRestaurantId={setRestaurantId}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {openDetail && (
          <CollectionModal
            onClick={() => setOpenDetail(false)}
            collectionId={collectionId}
            restaurantId={restaurantId + ""}
            userId={user?.id}
          />
        )}
        {showCommentModal && <CommentModal />}
      </AnimatePresence>
    </ModalLayout>
  );
};

export default CollectionDetail;
