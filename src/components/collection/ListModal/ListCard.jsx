import ListService from "apis/service/ListService";
import { collectionIdAtom } from "atoms/collectionAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

const ListCard = ({ myListData, openEditModal, profileId }) => {
  const { mutate: removeList } = ListService.RemoveMyList({
    collectionId: myListData?.id,
    profileId,
  });
  const setCollectionId = useSetRecoilState(collectionIdAtom);

  const handleEditClick = (e) => {
    e.stopPropagation();
    setCollectionId(myListData?.id + "");
    openEditModal();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    removeList();
    // 리스트 삭제 api 실행 (myListData?.id)
  };

  return (
    <li className="flex items-center justify-between border-b px-[2rem] py-[1rem]">
      <span className="Cap2 flex-1">{myListData.name}</span>
      <div className="flex space-x-[1rem]">
        <button
          className="Cap4 rounded-[1rem] border border-primary-400 p-[0.7rem_1rem] text-primary-400 transition-colors hover:border-primary-600  hover:text-primary-600"
          onClick={handleEditClick}
        >
          수정
        </button>
        <button
          className="Cap4 rounded-[1rem] border border-primary-400 p-[0.7rem_1rem] text-primary-400 transition-colors hover:border-primary-600  hover:text-primary-600"
          onClick={handleDeleteClick}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default ListCard;
