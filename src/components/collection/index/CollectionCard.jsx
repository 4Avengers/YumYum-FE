import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import NotCollectionItem from "components/common/post/notPost/NotCollectionItem";
import SliderItem from "./SliderItem";

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
        <Slider {...settings}>
          {collection?.collectionItems?.map((item) => (
            <SliderItem key={item.id} collectionItem={item} />
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
