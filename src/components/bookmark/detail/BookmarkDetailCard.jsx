import { bookmarkDetailModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

const BookmarkDetailCard = () => {
  const setPostId = useSetRecoilState(postIdAtom);

  const setOpenBookmarkDetailModal = useSetRecoilState(bookmarkDetailModal);

  const handleClickCard = () => {
    // setPostId()
    // setOpenBookmarkDetailModal(true);
  };

  return (
    <div className="aspect-square bg-gray-200 transition-colors hover:bg-gradient-to-r hover:from-[rgba(0,0,0,0.3)] hover:to-[rgba(0,0,0,0.3)]" />
  );
};

export default BookmarkDetailCard;
