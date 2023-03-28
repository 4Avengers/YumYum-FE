import BookmarkService from "apis/service/BookmarkService";
import { useCallback, useState } from "react";
import CardForm from "./CardForm";

const BookmarkCard = ({ collection }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { mutate: removeBookmark } = BookmarkService.RemoveBookmark(
    collection?.id
  );

  // 수정모드 활성화 및 비활성화
  const toggleEditMode = useCallback(() => {
    setIsEditMode((prev) => !prev);
  }, []);

  // 북마크 삭제
  const handleDeleteClick = () => {
    removeBookmark();
  };
  return (
    <>
      {isEditMode ? (
        <CardForm toggleEditMode={toggleEditMode} collection={collection} />
      ) : (
        <div className="flex items-center justify-between border-b px-[2rem] py-[1rem]">
          <span className="Cap2 flex-1">{collection?.name}</span>
          <div className="flex space-x-[1rem]">
            <button
              className="Cap4 rounded-[1rem] border border-primary-400 p-[0.7rem_1rem] text-primary-400 transition-colors hover:border-primary-600  hover:text-primary-600"
              onClick={toggleEditMode}
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
        </div>
      )}
    </>
  );
};

export default BookmarkCard;
