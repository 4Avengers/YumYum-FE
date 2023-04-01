import Header from "components/home/Header";
import React from "react";

const FakeHotList = () => {
  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header title="요즘 뜨는 맛집 리스트" subTitle="" />
      <div className="h-[23rem]"></div>
    </div>
  );
};

export default FakeHotList;
