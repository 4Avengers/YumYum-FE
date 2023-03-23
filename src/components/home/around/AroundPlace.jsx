import HomeService from "apis/service/HomeService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

// 내 주변 맛집
const AroundPlace = ({ x, y }) => {
  const { data: places } = HomeService.ReadAroundPlaceList({ x, y });
  const navigate = useNavigate();
  console.log(places);
  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header
        title="내 주변 맛집"
        subTitle="가까운 추천 맛집"
        onClick={() => navigate("/quest")}
      />

      <Slider {...settings} className="">
        {places?.map((item) => (
          <div key={item} className="flex flex-col">
            <img
              src={item?.image_file_url}
              alt="placeImg"
              className="aspect-square w-[100%] rounded-[1rem] bg-gray-400 object-cover"
            />

            <div className="flex flex-col">
              <span className="Cap3">{item?.restaurant_place_name}</span>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-[0.4rem]">
                  <FaStar size="1.3rem" className="text-primary-600" />
                  <span className="Cap3">
                    {Number(item["AVG(`post`.`rating`)"]).toFixed(1)}
                  </span>
                </div>
                <span className="Cap6 text-primary-500">
                  {item?.distance?.toFixed(1)}km
                </span>
              </div>
            </div>
          </div>
        ))}
        <div />
      </Slider>
    </div>
  );
};

export default AroundPlace;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 2,
};
