import React from "react";
import { defaultImage } from "utils/handleImgError";
import { FaStar } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { markerModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";

const Marker = ({ post }) => {
  const setMarkerModal = useSetRecoilState(markerModal);
  const setPostId = useSetRecoilState(postIdAtom);

  const handleClickMarker = () => {
    setMarkerModal(true);
    setPostId(post?.id);
  };

  return (
    <div
      onClick={handleClickMarker}
      className="relative grid w-full cursor-pointer grid-cols-[3rem_1fr] items-center gap-[0.6rem] whitespace-nowrap rounded-[2rem] border-[1.5px] border-[#5192ee] bg-white py-[0.4rem] px-[0.8rem] hover:border-[2px] hover:border-red-400 "
    >
      <img
        className="h-[3rem] w-[3rem] rounded-full object-cover"
        src={
          post?.user?.profile_image?.length < 20
            ? defaultImage
            : post?.user?.profile_image
        }
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className="text-[1.2rem] font-semibold">
          {post?.restaurant?.place_name}
        </span>
        <div className="flex items-center">
          <FaStar className="text-red-500" size="1rem" />
          <span className="ml-[0.3rem] mr-[0.8rem] font-semibold">
            {post?.rating}
          </span>
          <span className="font-medium text-primary-500">
            {post?.restaurant?.category_name?.split(">")[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marker;
