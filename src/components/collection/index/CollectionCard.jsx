import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { handleImgError } from "utils/handleImgError";
import { useNavigate } from "react-router-dom";
import NotCollectionItem from "components/common/post/notPost/NotCollectionItem";

const CollectionCard = ({ collection, isLoading }) => {
  const navigate = useNavigate();
  return (
    <li className="flex flex-col space-y-[1rem] overflow-hidden">
      <div className="flex items-end  px-[2rem]">
        <h3 className="flex-1 text-[1.7rem] font-semibold">
          {collection?.name}
        </h3>
        <button
          className="Cap4 text-primary-500 hover:text-primary-600"
          onClick={() => navigate(`${collection.id}`)}
        >
          더보기
        </button>
      </div>
      {!isLoading && !collection?.collectionItems?.length ? (
        <NotCollectionItem />
      ) : (
        <Slider {...settings} className="flex">
          {collection?.collectionItems?.map((item) => (
            <div key={item} className="flex flex-col space-y-[0.7rem] ">
              <img
                src={collection?.post?.image}
                alt="resImg"
                onError={handleImgError}
                className="aspect-square rounded-[1rem] bg-primary-300 object-cover"
              />
              <div className=" flex items-center">
                <p className="Cap1 flex-1">
                  {collection?.restaurant?.place_name}
                </p>
                <div className="flex items-center space-x-[0.5rem]">
                  <FaStar size="1.4rem" className="text-primary-600" />
                  <span className="Cap4">{collection?.post?.rating}</span>
                </div>
              </div>
            </div>
          ))}
          <div />
        </Slider>
      )}
    </li>
  );
};

export default CollectionCard;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.6,
  slidesToScroll: 2,
};
