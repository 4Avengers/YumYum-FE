import React from "react";
import Slider from "react-slick";
import cls from "utils/cls";

const CategoryBtns = ({ categoryValue, setCategory }) => {
  return (
    <Slider {...settings} className="mt-[1rem] ">
      {React.Children.toArray(
        category?.map((value) => (
          <button
            className={cls(
              "Cap3 max-w-[7rem] whitespace-nowrap rounded-[0.5rem] border py-[0.6rem] transition-colors",
              categoryValue === value && "bg-primary-600 text-primary-100"
            )}
            onClick={() => setCategory(value)}
          >
            {value}
          </button>
        ))
      )}
    </Slider>
  );
};

export default CategoryBtns;

const category = [
  "한식",
  "카페",
  "양식",
  "술집",
  "일식",
  "패스트푸드",
  "아시아음식",
  "분식",
  "중식",
  "관광,명소",
  "간식",
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.2,
  slidesToScroll: 2,
};
