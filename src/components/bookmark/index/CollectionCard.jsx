import React from "react";
import { useNavigate } from "react-router-dom";
import { defaultImage, handleImgError } from "utils/handleImgError";

const CollectionCard = ({ collection }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex  cursor-pointer flex-col space-y-[0.6rem] "
      onClick={() => navigate(`${collection?.id}?name=${collection?.name}`)}
    >
      <img
        src={collection?.image || defaultImage}
        alt="img"
        className="aspect-square  rounded-[1rem] bg-primary-200 object-cover"
        onError={handleImgError}
      />
      <span className="Cap1">{collection?.name}</span>
    </div>
  );
};

export default CollectionCard;
