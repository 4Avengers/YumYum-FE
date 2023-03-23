import React from "react";
import { useNavigate } from "react-router-dom";
import { handleImgError } from "utils/handleImgError";

const HotCard = ({ collection }) => {
  const navigate = useNavigate();

  return (
    <div
      key={collection?.id}
      className="relative mr-[1rem] flex cursor-pointer flex-col"
      onClick={() =>
        navigate(
          `/profile/${collection?.user?.id}/collections/${collection?.id}`
        )
      }
    >
      <div
        className=" z-10 flex aspect-[1/1.8] w-[100%] flex-col rounded-[1rem] bg-gray-400 px-[1rem] pt-[3rem] pb-[2rem]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${collection?.images[0]})`,
          backgroundSize: "cover",
        }}
      >
        <p className="text-[1.8rem] font-semibold text-white ">
          {collection?.name}
        </p>
        <div className="flex flex-1 items-end justify-end ">
          <div className="flex flex-col items-end space-y-[0.4rem]">
            <img
              src={collection?.user?.profile_image}
              alt="avatar"
              className="h-[4rem] w-[4rem] rounded-full bg-white object-cover"
              onError={handleImgError}
            />
            <span className="Cap3 text-primary-100 ">
              {collection?.user?.nickname}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCard;
