import React from "react";
import { FaStar } from "react-icons/fa";

const ArroundCard = ({ place }) => {
  return (
    <div key={place?.restaurant_id} className=" mr-[1rem]  flex flex-col">
      <img
        src={place?.image_file_url}
        alt="placeImg"
        className="aspect-square w-[100%] rounded-[1rem] bg-gray-400 object-cover"
      />

      <div className="flex flex-col">
        <span className="Cap3">{place?.restaurant_place_name}</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[0.4rem]">
            <FaStar size="1.3rem" className="text-primary-600" />
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
