import { MdPostAdd } from "react-icons/md";

const NotPost = () => {
  return (
    <div className="flex-center flex-1 flex-col space-y-[2rem] pb-[5vh]">
      <MdPostAdd size="8rem" className=" text-primary-400" />
      <h3 className="text-[2.5rem] font-semibold text-primary-400">
        작성된 게시글이 없습니다
      </h3>
    </div>
  );
};

export default NotPost;
