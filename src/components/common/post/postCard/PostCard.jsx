import UserContainter from "./UserContainter";
import LocationWithRating from "./LocationWithRating";
import IconContainer from "./IconContainer";
import Paragragh from "./Paragragh";
import { useSetRecoilState } from "recoil";
import { commentModalAtom } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import { useCallback } from "react";
import { handleImgError } from "utils/handleImgError";

const PostCard = ({ post }) => {
  const setShowModal = useSetRecoilState(commentModalAtom);
  const setPostId = useSetRecoilState(postIdAtom);

  const handleCommentModal = useCallback(() => {
    setShowModal(true);
    setPostId(post.id);
  }, [setPostId, setShowModal]);

  return (
    <>
      <li className="flex flex-col border-b pt-[2rem] pb-[2rem] ">
        <UserContainter post={post} />
        <LocationWithRating post={post} />
        <img
          src={post?.img_url}
          alt="product"
          className="w-full object-cover"
          onError={handleImgError}
        />
        <IconContainer handleCommentModal={handleCommentModal} />
        <p className="Cap3 px-[2rem]">좋아요 {post?.totalLikes}개</p>
        <Paragragh post={post} />
        <button
          className="Cap4 mt-[0.8rem] cursor-pointer px-[2rem] text-start text-primary-500"
          onClick={handleCommentModal}
        >{`댓글 ${21}개 모두 보기`}</button>
      </li>
    </>
  );
};

export default PostCard;
