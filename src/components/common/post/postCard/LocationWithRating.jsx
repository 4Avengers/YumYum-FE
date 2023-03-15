import { FaStar } from "react-icons/fa";
import { getAddress } from "utils/getAddress";

const LocationWithRating = ({ post }) => {
  return (
    <div className="flex items-center justify-between  px-[2rem] py-[1rem]">
      <div className="flex items-center ">
        <span className="Cap5 mr-[1rem]">{post?.restaurant?.place_name}</span>
        <span className="Cap5 text-primary-500">
          {post?.restaurant?.category_name.split(">")[1]}
        </span>
        <span className="mx-[0.5rem] h-4 w-[0.12rem] bg-primary-500"></span>
        <span className="Cap5 text-primary-500">
          {getAddress(post?.restaurant?.address_name)}
        </span>
      </div>
      <div className="flex items-center space-x-[1rem] text-primary-600">
        <FaStar size="1.6rem" />
        <span className="Cap3">{post?.rating}</span>
      </div>
    </div>
  );
};

export default LocationWithRating;
