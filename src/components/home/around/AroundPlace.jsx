import HomeService from "apis/service/HomeService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import ArroundCard from "./ArroundCard";
import NotLocation from "components/common/post/notPost/NotLocation";

// 내 주변 맛집
const AroundPlace = ({ x, y }) => {
  const { data: places, isLoading } = HomeService.ReadAroundPlaceList({ x, y });
  const navigate = useNavigate();

  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header
        title="내 주변 맛집"
        subTitle="가까운 추천 맛집"
        onClick={() => navigate("/quest")}
      />

      <Slider {...settings} className="pl-[2rem]">
        {places
          ?.sort((a, b) => a.distance - b.distance)
          ?.map((place) => (
            <ArroundCard place={place} key={place?.id} />
          ))}
        <div />
      </Slider>
      {!places && !isLoading && !x && (
        <NotLocation text=" 등록된 위치 정보가 없습니다." />
      )}
      {places?.length === 0 && x && (
        <NotLocation text="가까운 위치에 등록된 맛집이 없습니다." />
      )}
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
