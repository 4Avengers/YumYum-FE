import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = ({ comment }) => {
  return (
    <li className="flex space-x-[1.5rem] bg-red-300 py-[1rem]">
      <img
        className="h-[3rem] w-[3rem] rounded-full"
        src="https://avatars.dicebear.com/api/identicon/wooncloud.svg"
        alt="프로필"
      />
      <div className="flex flex-1 flex-col space-y-[0.4rem]">
        <div className="flex space-x-[0.7rem]">
          <span className="Cap5">{comment?.user?.nickname}</span>
          <span className="Cap5 text-primary-500">2시간 전</span>
        </div>
        <p className="Cap6">{comment?.content}</p>
      </div>
      <AiOutlineHeart
        size="2rem"
        className="mt-[1rem] cursor-pointer text-primary-500 hover:text-primary-600"
      />
    </li>
  );
};

export default CommentCard;
