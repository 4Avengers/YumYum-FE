import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FakePostCard = () => {
  return (
    <div className="flex flex-col border-b pt-[2rem] pb-[2rem] first:border-b last:border-none">
      <div className="flex items-center justify-between  px-[2rem] pb-[1rem]  ">
        <div className="flex items-center space-x-[0.8rem] ">
          <Skeleton
            className="h-[3rem] w-[3rem] cursor-pointer rounded-full bg-primary-300 object-cover"
            alt="프로필"
          />
          <Skeleton className="Cap3 cursor-pointer "></Skeleton>
          <Skeleton className="Cap6 mt-[0.2rem] text-primary-500"></Skeleton>
        </div>
      </div>
      <div className="flex items-center justify-between  px-[2rem] py-[1rem]">
        <div className="flex items-center ">
          <Skeleton className="Cap5 mr-[1rem]"></Skeleton>
          <Skeleton className="Cap5 text-primary-500"></Skeleton>
          <span className="mx-[0.5rem] h-4 w-[0.12rem] "></span>
          <Skeleton className="Cap5 text-primary-500"></Skeleton>
        </div>
        <div className="flex items-center space-x-[1rem] text-primary-600">
          <Skeleton className="Cap3"></Skeleton>
        </div>
      </div>
      <div className="relative flex w-full overflow-hidden">
        <Skeleton className="ml-0 h-[35vh] w-full pl-0"></Skeleton>
      </div>
      <div className="flex items-center justify-between px-[2rem] py-[1rem]  text-primary-600 ">
        <div className="flex items-center space-x-[1.5rem]">
          <Skeleton className="w-[2.6rem]"></Skeleton>
          <Skeleton className="w-[2.6rem]"></Skeleton>
          <Skeleton className="w-[2.6rem]"></Skeleton>
        </div>
        <Skeleton className="w-[2.6rem]"></Skeleton>
      </div>
      <Skeleton className="Cap3 px-[2rem]"></Skeleton>
      <Skeleton></Skeleton>
    </div>
  );
};

export default FakePostCard;
