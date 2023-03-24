import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Rating = ({ register, value }) => {
  return (
    <ul className="flex space-x-[1rem] text-primary-600">
      {React.Children.toArray(
        [1, 2, 3, 4, 5].map((item) => (
          <label className="cursor-pointer">
            <input type="radio" className="hidden" {...register} value={item} />
            {item > value ? (
              <CiStar size="2rem" className="text-primary-500" />
            ) : (
              <FaStar size="2rem" className="text-star-200" />
            )}
          </label>
        ))
      )}
    </ul>
  );
};

export default Rating;
