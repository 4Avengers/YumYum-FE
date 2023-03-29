import BookmarkService from "apis/service/BookmarkService";
import React from "react";
import cls from "utils/cls";

const BookmarkCard = ({ collection, postId }) => {
  const { mutate: addCollection } = BookmarkService.AddCollectionPost({
    collectionId: collection?.id,
  });
  const { mutate: removeCollection } = BookmarkService.RemoveCollectionPost({
    collectionId: collection?.id,
  });

  const handleAddCollection = () => {
    addCollection(postId);
  };
  const handleDeleteCollection = () => {
    removeCollection(postId);
  };

  return (
    <li className="flex items-center justify-between border-b px-[2rem] py-[1rem]">
      <span className="Cap2 flex-1">{collection?.name || "컬렉션 이름"}</span>
      {true ? (
        <button
          className={cls(
            "Cap4 rounded-[1rem] border  bg-primary-700 p-[0.7rem_1rem] text-primary-100 transition-colors hover:bg-primary-600"
          )}
          onClick={handleAddCollection}
        >
          추가
        </button>
      ) : (
        <button
          className="Cap4 rounded-[1rem] border border-primary-400 p-[0.7rem_1rem] text-primary-400 transition-colors hover:border-primary-600  hover:text-primary-600"
          onClick={handleDeleteCollection}
        >
          취소
        </button>
      )}
    </li>
  );
};

export default BookmarkCard;
