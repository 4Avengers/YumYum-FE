import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// postCard Skeleton
const FakePostCard = () => {
  return (
    <div className="flex flex-col border-b pt-[2rem] pb-[2rem] first:border-b last:border-none">
      <div className="flex items-center justify-between  px-[2rem] pb-[1rem]  ">
        <div className="flex items-center space-x-[0.8rem] ">
          <Skeleton
            className="h-[3rem] w-[3rem] cursor-pointer rounded-full bg-primary-300 object-cover"
            alt="프로필"
          />
          <Skeleton className="Cap3  w-[15rem] cursor-pointer "></Skeleton>
        </div>
      </div>
      <div className="flex items-center justify-between  px-[2rem] py-[1rem]">
        <Skeleton className="Cap5 mr-[1rem] w-[15rem]"></Skeleton>
        <Skeleton className="w-[5rem]" />
      </div>

      <Skeleton className="ml-0 h-[35vh] w-full pl-0"></Skeleton>

      <div className="flex items-center justify-between px-[2rem] py-[1rem]  text-primary-600 ">
        <Skeleton className="h-[3rem] w-[15rem]"></Skeleton>
        <Skeleton className="h-[3rem] w-[3rem] "></Skeleton>
      </div>

      <div className="flex flex-col space-y-[1rem] px-[2rem]">
        <Skeleton className="Cap3 w-[8rem]"></Skeleton>
        <Skeleton className="Cap3 w-[70%]"></Skeleton>
        <Skeleton className="Cap3 w-[15rem]"></Skeleton>
      </div>
    </div>
  );
};

export default FakePostCard;
