import useSlider from "hooks/useSlider";
import React from "react";
import Slider from "react-slick";
import cls from "utils/cls";

const CategoryBtns = ({ categoryValue, setCategory }) => {
  const [isDragging, beforeFn, afterFn] = useSlider();

  const onCliked = (e, value) => {
    if (isDragging) {
      e.stopPropagation();
      return;
    }
    setCategory(value);
  };

  return (
    <Slider
      {...settings}
      beforeChange={beforeFn}
      afterChange={afterFn}
      className="mt-[1rem] pl-[2rem]"
    >
      {React.Children.toArray(
        category?.map((value) => (
          <button
            className={cls(
              "Cap3 mr-[1rem] max-w-[7rem] whitespace-nowrap rounded-[0.5rem] border py-[0.6rem] transition-colors",
              categoryValue === value && "bg-primary-600 text-primary-100"
            )}
            onClick={(e) => onCliked(e, value)}
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
  "간식",
];

const settings = {
  dots: false,
  infinite: false,
  draggable: true,
  speed: 500,
  slidesToShow: 5.2,
  slidesToScroll: 2,
};
