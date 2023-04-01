import Header from "components/home/Header";
import React from "react";

const FakeRecommandList = () => {
  return (
    <div className="mt-[4rem] flex flex-col justify-center overflow-x-hidden">
      <Header title="New 인기리뷰" subTitle="회원들의 추천 맛집" />
      <div className="h-[70rem]"></div>
    </div>
  );
};

export default FakeRecommandList;
