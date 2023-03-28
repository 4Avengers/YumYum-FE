import { restaurantModal } from "atoms/modalAtom";
import { restaurantAtom } from "atoms/restaurantAtom";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useSetRecoilState } from "recoil";

const ArroundCard = ({ place }) => {
  const setOpenRestaurantModal = useSetRecoilState(restaurantModal);
  const setRestaurant = useSetRecoilState(restaurantAtom);

  const handleOpenModal = () => {
    setOpenRestaurantModal(true);

    setRestaurant(place);
  };
  return (
    <div
      className=" mr-[1rem]  flex cursor-pointer flex-col"
      onClick={handleOpenModal}
    >
      <img
        src={place?.image_file_url}
        alt="placeImg"
        className="aspect-square w-[100%] rounded-[1rem] bg-gray-400 object-cover"
      />

      <div className="flex flex-col">
        <span className="Cap3">{place?.place_name}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[0.4rem]">
            <FaStar size="1.3rem" className="text-star-200" />
            <span className="Cap3">
              {Number(place["AVG(`post`.`rating`)"]).toFixed(1)}
            </span>
          </div>
          <span className="Cap6 text-primary-500">
            {place?.distance?.toFixed(1)}km
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArroundCard;
