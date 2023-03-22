import HomeService from "apis/service/HomeService";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Header from "../Header";
import CategoryBtns from "./CategoryBtns";

const RecommandPlace = () => {
  const [category, setCategory] = useState("한식");
  const { data: places } = HomeService.ReadRecommandPlaceList(category);
  console.log("pl", places);
  return (
    <div className="mt-[4rem] flex flex-col justify-center overflow-x-hidden">
      <Header
        title="New 인기리뷰"
        subTitle="회원들의 추천 맛집"
        onClick={() => {}}
      />
      <CategoryBtns setCategory={setCategory} categoryValue={category} />
      <ul className="mt-[2rem] flex flex-col space-y-[1rem]">
        {React.Children.toArray(
          [1, 2, 3]?.map((item) => (
            <li className="flex space-x-[2rem] px-[2rem]">
              <div className="h-[12rem] w-[12rem] rounded-[1rem] bg-gray-300" />
              <div className="flex flex-1 space-x-[1rem]">
                <div className="flex flex-1 flex-col">
                  <span className="Cap1">일월 선셋비치</span>
                  <p className="Cap4 overflow-hidden text-ellipsis whitespace-pre-wrap break-all line-clamp-4">
                    애월카페거리에 있는 석양, 노을 보기 좋은 카페예요 해질녁에
                    갔는데 이국적인 분위기가 정말 멋졌습니다 정말 멋졌습니다
                    정말 멋졌습니다 정말 멋졌습니다 정말 멋졌습니다 정말
                    멋졌습니다 정말 멋졌습니다
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex  w-[4rem] items-center justify-end space-x-[0.5rem] ">
                    <FaStar size="1.4rem" className="text-primary-600" />
                    <span className="Cap5">9.5</span>
                  </div>
                  <div className="mb-[2rem] h-[4rem] w-[4rem] self-end rounded-full bg-gray-300" />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecommandPlace;
