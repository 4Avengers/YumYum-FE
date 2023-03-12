import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiBookmark } from "react-icons/fi";
//import { BsBookmarkFill } from "react-icons/bs"

// [] 좋아요 토글
// [o] 댓글 모달 open
// [] DM
// [] 북마크

const IconContainer = ({ handleCommentModal }) => {
  return (
    <div className="flex items-center justify-between px-[2rem] py-[1rem]  text-primary-600 ">
      <div className="flex items-center space-x-[1.5rem]">
        <AiOutlineHeart
          size="2.7rem"
          className="cursor-pointer hover:text-primary-500"
        />
        <TbMessageCircle2
          className="scale-x-[-1] cursor-pointer hover:text-primary-500"
          size="2.7rem"
          onClick={handleCommentModal}
        />
        <HiOutlinePaperAirplane
          size="2.5rem"
          className="mt-[-0.4rem] rotate-[45deg] cursor-pointer hover:text-primary-500"
        />
      </div>

      <FiBookmark
        size="2.7rem"
        className="cursor-pointer text-primary-600 hover:text-primary-500"
      />
      {/* <BsBookmarkFill size={"2.3rem"} /> */}
    </div>
  );
};

export default IconContainer;
