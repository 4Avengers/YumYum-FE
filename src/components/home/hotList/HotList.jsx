import HomeService from "apis/service/HomeService";
import Slider from "react-slick";
import Header from "../Header";

const HotList = () => {
  const { data: hotList } = HomeService.ReadHotPlaceList();
  console.log("hot", hotList);
  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header title="요즘 뜨는 맛집 리스트" subTitle="" onClick={() => {}} />
      <Slider {...settings} className="">
        {[1, 2, 3, 4, 5, 6]?.map((item) => (
          <div key={item} className="relative flex flex-col">
            <div className=" z-10 flex aspect-[1/1.8] w-[100%] flex-col rounded-[1rem] bg-gray-400 px-[1rem] pt-[3rem] pb-[2rem]">
              <p className="font- text-[1.8rem] text-white">뷰가 좋은 카페</p>
              <div className="flex flex-1 items-end justify-end ">
                <div className="flex flex-col items-end space-y-[0.4rem]">
                  <div className="h-[4rem] w-[4rem] rounded-full bg-white" />
                  <span className="Cap3 text-primary-100 ">nickname</span>
                </div>
              </div>
            </div>
            {/* <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full rounded-[1rem] bg-[rgba(0,0,0,0.2)]" /> */}
          </div>
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
  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 2,
};
