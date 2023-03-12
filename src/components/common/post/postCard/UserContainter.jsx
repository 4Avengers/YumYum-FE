import { AiOutlineMore } from "react-icons/ai";

const UserContainter = ({ post }) => {
  return (
    <div className="flex items-center justify-between  px-[2rem] py-[1rem]">
      <div className="flex items-center space-x-[0.8rem] ">
        <img
          className="h-[3rem] w-[3rem] rounded-full"
          src="https://avatars.dicebear.com/api/identicon/wooncloud.svg"
          alt="프로필"
        />
        <span className="Cap3">{post.user.nickname}</span>
      </div>
      <span className="flex-center h-[3rem] w-[3rem] cursor-pointer rounded-full transition-colors hover:bg-[rgba(0,0,0,0.05)]">
        <AiOutlineMore
          size="2rem"
          strokeWidth="5"
          className="text-primary-600"
        />
      </span>
    </div>
  );
};

export default UserContainter;
