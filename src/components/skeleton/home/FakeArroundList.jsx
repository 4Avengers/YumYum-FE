import React from "react";
import Header from "components/home/Header";

const FakeArroundList = () => {
  return (
    <div className="mt-[4rem] flex flex-col justify-center space-y-[1rem] overflow-x-hidden">
      <Header title="내 주변 맛집" subTitle="가까운 추천 맛집" />
      <div className="h-[16.8rem]"></div>
    </div>
  );
};

export default FakeArroundList;

/* <Slider {...settings} className="pl-[2rem]">
        {React.Children.toArray(
          data?.map((_) => (
            <div className=" mr-[1rem]  ml-[1rem] flex cursor-pointer flex-col">
              <Skeleton className="aspect-square w-[100%] rounded-[1rem]" />
              <div className="flex flex-col">
                <Skeleton className="Cap3 w-[8rem]"></Skeleton>
                <div className="flex items-center justify-between">
                  <Skeleton className="Cap3 w-[5rem]" />
                  <Skeleton className="Cap3 w-[5rem]" />
                </div>
              </div>
            </div>
          ))
        )}

        <div />
      </Slider> */
