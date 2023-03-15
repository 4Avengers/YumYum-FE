import { postConfigModalAtom } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PostService from "apis/service/PostService";
import { useNavigate } from "react-router-dom";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import { bgAni, smallModalAni } from "shared/motionStyle";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useUser from "hooks/useUser";

const PostConfigModal = () => {
  const postId = useRecoilValue(postIdAtom);
  const queryKey = useRecoilValue(postQueryKeyAtom);
  const setShowPostConfig = useSetRecoilState(postConfigModalAtom);
  const navigate = useNavigate();
  const [user] = useUser();

  const {
    mutate: removePost,
    isSuccess,
    isError,
  } = PostService.RemovePost(queryKey, user?.id);

  /** 게시글 삭제 */
  const handleDeletePost = () => {
    removePost(postId);
  };

  // 삭제 성공시
  useEffect(() => {
    if (isSuccess) {
      toast.success("게시글이 삭제되었습니다.");
      setShowPostConfig(false);
    }
  }, [isSuccess, setShowPostConfig]);

  // 삭제  실패시
  useEffect(() => {
    if (isError) toast.error("게시글 삭제에 실패하였습니다.");
  }, [isError]);

  return (
    <motion.div
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      className="absolute top-0 z-[200] mx-auto flex h-screen w-full items-end bg-[rgba(0,0,0,0.4)]"
      onClick={() => setShowPostConfig(false)}
    >
      <motion.ul
        variants={smallModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", duration: 0.4 }}
        className="Cap2 flex w-full flex-col space-y-[1rem] p-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <li className="flex flex-col items-center rounded-[1.5rem] bg-config-btn">
          <button
            className="w-full border-b  border-primary-400 p-[2rem] text-config-blue hover:text-config-hoverBlue"
            onClick={() => navigate(`/post/${postId}/edit`)}
          >
            게시글 수정
          </button>
          <button
            className="w-full p-[2rem]  text-config-red hover:text-config-hoverRed "
            onClick={handleDeletePost}
          >
            삭제
          </button>
        </li>
        <li className="flex-center rounded-[1.5rem] bg-config-btn text-config-blue  hover:text-config-hoverBlue ">
          <button
            className="w-full  p-[2rem]"
            onClick={() => setShowPostConfig(false)}
          >
            닫기
          </button>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default PostConfigModal;
