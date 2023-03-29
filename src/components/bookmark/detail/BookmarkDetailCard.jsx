import { questPostModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import React from "react";
import { useSetRecoilState } from "recoil";
import { defaultImage, handleImgError } from "utils/handleImgError";

const BookmarkDetailCard = ({ post }) => {
  const setPostId = useSetRecoilState(postIdAtom);

  const setOpenBookmarkDetailModal = useSetRecoilState(questPostModal);

  const handleClickCard = () => {
    setPostId(post?.id);
    setOpenBookmarkDetailModal(true);
  };

  return (
    <img
      src={post?.images || defaultImage}
      alt="img"
      onError={handleImgError}
      className="aspect-square cursor-pointer bg-gray-200 object-cover"
      onClick={handleClickCard}
    />
  );
};

export default BookmarkDetailCard;
