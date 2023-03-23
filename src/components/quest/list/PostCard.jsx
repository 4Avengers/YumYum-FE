import { questPostModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import getDistance from "utils/getDistance";
import { handleImgError } from "utils/handleImgError";

const PostCard = ({ post, lat, lng, isMarker = false }) => {
  const setOpenPostDetailModal = useSetRecoilState(questPostModal);
  const setPostId = useSetRecoilState(postIdAtom);

  const distanceGap = useMemo(() => {
    const postLng = Number(post?.restaurant?.x);
    const postLat = Number(post?.restaurant?.y);
    if (!postLat | !postLng) return "";

    return getDistance(lat, lng, postLat, postLng)?.toFixed(1);
  }, [post, lat, lng]);

  const handleCardClick = () => {
    setOpenPostDetailModal(true);
    if (!isMarker) setPostId(post?.id + "");
  };

  return (
    <li
      className="flex cursor-pointer flex-col space-y-[1rem]"
      onClick={handleCardClick}
    >
      <div className="flex items-end justify-between">
        <div className="flex items-center space-x-[1rem]">
          <h3 className="text-[1.8rem] font-semibold">
            {post?.restaurant?.place_name}
          </h3>
          <span className="Cap2 text-primary-500">
            {post?.restaurant?.category_name?.split(">")[1]}
          </span>
        </div>

        <span className="Cap2 text-primary-500">{distanceGap}km</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-[1rem]">
        <div className="h-[13rem] w-full bg-gray-200" />
        <div className="h-[13rem] w-full bg-gray-200" />
      </div>
      <div className="flex space-x-[1.5rem] pt-[0.5rem]">
        <img
          src={post?.user?.profile_image}
          alt="avatar"
          className="h-[3.5rem] w-[3.5rem] rounded-full bg-gray-100"
          onError={handleImgError}
        />
        <div className="flex flex-1 flex-col space-y-[0.5rem]">
          <div className="flex items-center">
            <span className="Cap1">{post?.user?.nickname}</span>
            <FaStar
              className="bg-text-600 ml-[1rem] mr-[0.4rem] text-primary-600"
              size="1.4rem"
            />
            <span className="Cap3">{post?.rating}</span>
          </div>

          <p className="Cap4 overflow-hidden text-ellipsis whitespace-pre-wrap break-all line-clamp-3">
            {post?.content?.length > 115
              ? post?.content?.slice(0, 115) + "..."
              : post?.content}

            {post?.content?.length > 115 && (
              <button className="ml-[1rem] text-primary-500 hover:text-primary-600">
                더보기
              </button>
            )}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
