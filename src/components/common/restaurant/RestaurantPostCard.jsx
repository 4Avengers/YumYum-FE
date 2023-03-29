import { questPostModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { defaultImage, handleImgError } from "utils/handleImgError";

const RestaurantPostCard = ({ post }) => {
  const setPostId = useSetRecoilState(postIdAtom);
  const setOpenPostDetailModal = useSetRecoilState(questPostModal);

  const handleOpenModal = () => {
    setPostId(post?.id);
    setOpenPostDetailModal(true);
  };

  return (
    <li
      className="flex cursor-pointer space-x-[1rem] px-[2rem] py-[1rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
      onClick={handleOpenModal}
    >
      <img
        src={post?.images[0]?.file_url || defaultImage}
        alt="img"
        className="h-[10rem] w-[10rem] rounded-[0.7rem] bg-gray-200 object-cover"
        onError={handleImgError}
      />
      <div className="flex flex-1 flex-col space-y-[1rem] py-[0.3rem]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1rem] ">
            <img
              src={post?.user?.profile_image}
              alt="avatar"
              className=" h-[3rem] w-[3rem] rounded-full border border-primary-400 bg-gray-200 object-cover"
            />
            <span className="Cap3">{post?.user?.nickname}</span>
          </div>
          <div className="flex items-center gap-[0.7rem]">
            <FaStar size="1.5rem" className="text-star-200" />
            <span className="Cap3">4</span>
          </div>
        </div>
        <p className="Cap4 overflow-hidden text-ellipsis  whitespace-pre-wrap line-clamp-2">
          {post?.content}
        </p>
      </div>
    </li>
  );
};

export default RestaurantPostCard;
