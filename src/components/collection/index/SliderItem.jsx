import { FaStar } from "react-icons/fa";
import { handleImgError } from "utils/handleImgError";

const SliderItem = ({ collectionItem }) => {
  return (
    <div className="mr-[1rem] flex flex-col space-y-[0.7rem]">
      <img
        src={collectionItem?.post?.images[0]?.file_url}
        alt="resImg"
        onError={handleImgError}
        className="aspect-square  rounded-[1rem] bg-primary-300 object-cover"
      />
      <div className="flex">
        <p className="Cap1 flex-1">
          {collectionItem?.post?.restaurant?.place_name}
        </p>
        <div className="flex items-center space-x-[0.5rem]">
          <FaStar size="1.4rem" className="text-primary-600" />
          <span className="Cap4">{collectionItem?.post?.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
