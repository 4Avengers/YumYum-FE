import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Rating = ({ register, value }) => {
  return (
    <ul className="flex space-x-[1rem]">
      {React.Children.toArray(
        [1, 2, 3, 4, 5].map((item) => (
          <label className="cursor-pointer">
            <input type="radio" className="hidden" {...register} value={item} />
            {item > value ? <CiStar size="2rem" /> : <FaStar size="2rem" />}
          </label>
        ))
      )}
    </ul>
  );
};

export default Rating;
