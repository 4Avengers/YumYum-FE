import { hasToken } from "apis/token";
import { questPostModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import React, { useCallback } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { handleImgError } from "utils/handleImgError";

const RecommandCard = ({ post }) => {
  const setPostId = useSetRecoilState(postIdAtom);
  const setOpenPostDetail = useSetRecoilState(questPostModal);
  const navigate = useNavigate();

  const handleOpenModal = useCallback(() => {
    if (!hasToken()) return navigate("/start/login");
    setPostId(post?.id);
    setOpenPostDetail(true);
  }, [navigate, post, setOpenPostDetail, setPostId]);

  return (
    <li
      className="flex cursor-pointer space-x-[2rem] px-[2rem] py-[0.7rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
      onClick={handleOpenModal}
    >
      <img
        src={post?.images[0]?.file_url}
        alt="placeImg"
        className="h-[12rem] w-[12rem] rounded-[1rem] bg-gray-300 object-cover"
      />

      <div className="flex flex-1 space-x-[1rem]">
        <div className="flex flex-1 flex-col">
          <span className="Cap1">{post?.restaurant?.place_name}</span>
          <p className="Cap4 overflow-hidden text-ellipsis whitespace-pre-wrap break-all line-clamp-4">
            {post?.content}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex  w-[4rem] items-center justify-end space-x-[0.5rem] ">
            <FaStar size="1.4rem" className="text-star-200" />
            <span className="Cap5">{post?.rating}</span>
          </div>
          <img
            src={post?.user?.profile_image}
            alt="avatar"
            className="mb-[2rem] h-[4rem] w-[4rem] self-end rounded-full bg-gray-300 object-cover ring-1 ring-primary-400 ring-offset-2"
            onError={handleImgError}
          />
        </div>
      </div>
    </li>
  );
};

export default RecommandCard;
