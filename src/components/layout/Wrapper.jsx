import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className=" flex w-screen justify-center">
      <div className="fixed top-[30%] hidden flex-col justify-self-end nm:left-[9%] nm:flex lg:left-[18%]">
        <div className="flex flex-col text-[8rem] font-bold text-[#F4CD24]">
          <h3 className="drop-shadow-lg">YUM</h3>
          <h3 className="mt-[-4rem] drop-shadow-lg">YUM</h3>
        </div>
        <p className="mb-[0.5rem] text-[3rem] font-semibold text-[#634242] ">
          함께 공유하는 나만의 맛집 리스트
        </p>
        <p className="font text-[2rem] text-[#634242]">
          나만의 맛집 지도를 만들고 <br /> 친구의 맛집을 탐색해보세요
        </p>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
