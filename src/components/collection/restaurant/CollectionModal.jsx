import ModalLayout from "components/common/modalLayout/ModalLayout";

import React from "react";
import { modalLayoutAni } from "shared/motionStyle";
import CollectionHeader from "./CollectionHeader";

const CollectionModal = ({ onClick, collectionId, restaurantId }) => {
  // collectionId와 restaurantId로 데이터 조회
  return (
    <ModalLayout hasHeader={false} hasPadding={false} variants={modalLayoutAni}>
      <CollectionHeader
        hasBack
        onClick={onClick}
        title="일월 선셋 비치"
        category="카페"
      />
      <div className="flex flex-1 flex-col ">
        <p className="Cap4 border-b bg-white pl-[6.2rem] pb-[1.3rem]">
          {"제주도 제주시 애월읍"}
        </p>
      </div>
    </ModalLayout>
  );
};

export default CollectionModal;
