import HomeService from "apis/service/HomeService";
import useSlider from "hooks/useSlider";
import Slider from "react-slick";
import { toast } from "react-toastify";

import Header from "../Header";
import HotCard from "./HotCard";

const HotList = () => {
  const { data: hotList } = HomeService.ReadHotPlaceList();
  const [isDragging, beforeFn, afterFn] = useSlider();
  const handleMoreClick = () => {
    toast.info("현재 개발중인 기능입니다 🤗");
  };
  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header
        title="요즘 뜨는 맛집 리스트"
        subTitle=""
        onClick={handleMoreClick}
      />
      <Slider
        {...settings}
        beforeChange={beforeFn}
        afterChange={afterFn}
        className="pl-[2rem]"
      >
        {hotList?.map((collection) => (
          <HotCard
            collection={collection}
            key={collection?.id}
            isDragging={isDragging}
          />
        ))}
        <div />
      </Slider>
    </div>
  );
};

export default HotList;

const settings = {
  dots: false,
  infinite: false,
  draggable: true,
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 2,
};
