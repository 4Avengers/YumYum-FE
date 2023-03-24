import { MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotPost = ({ text = "작성된 게시글이 없습니다" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-center flex-1  pb-[5vh]">
      <div
        className="flex cursor-pointer flex-col items-center space-y-[2rem] text-primary-400 transition-colors hover:text-primary-500"
        onClick={() => navigate("/post/write")}
      >
        <MdPostAdd size="8rem" className="" />
        <h3 className="text-[2.5rem] font-semibold  ">{text}</h3>
      </div>
    </div>
  );
};

export default NotPost;
