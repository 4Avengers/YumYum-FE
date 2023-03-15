import UserContainter from "./UserContainter";
import LocationWithRating from "./LocationWithRating";
import IconContainer from "./IconContainer";
import Paragragh from "./Paragragh";
import { useSetRecoilState } from "recoil";
import { commentModalAtom, postConfigModalAtom } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import { useCallback } from "react";
import { defaultImage, handleImgError } from "utils/handleImgError";

const PostCard = ({ post, isOwner }) => {
  const setShowCommentModal = useSetRecoilState(commentModalAtom);
  const setShowPostConfigModal = useSetRecoilState(postConfigModalAtom);
  const setPostId = useSetRecoilState(postIdAtom);

  // 해당 포스트 id에 해당하는 설정 모달을 가져오는 기능
  const handlePostConfigModal = useCallback(() => {
    setShowPostConfigModal(true);
    setPostId(post.id);
  }, [post, setShowPostConfigModal, setPostId]);

  // 해당 포스트 id에 해당하는 코멘트 모달을 가져오는 기능
  const handleCommentModal = useCallback(() => {
    setShowCommentModal(true);
    setPostId(post.id);
  }, [setPostId, setShowCommentModal, post]);

  return (
    <>
      <li className="flex flex-col border-b pt-[2rem] pb-[2rem] ">
        <UserContainter
          post={post}
          handlePostConfigModal={handlePostConfigModal}
          isOwner={isOwner}
        />
        <LocationWithRating post={post} />
        <img
          src={post?.images[0]?.file_url || defaultImage}
          alt="product"
          className="w-full object-cover"
          onError={handleImgError}
        />
        <IconContainer handleCommentModal={handleCommentModal} post={post} />
        <p className="Cap3 px-[2rem]">좋아요 {post?.totalLikes}개</p>
        <Paragragh post={post} />
        {!!post?.comments?.length && (
          <button
            className="Cap4 mt-[0.8rem] cursor-pointer px-[2rem] text-start text-primary-500"
            onClick={handleCommentModal}
          >
            {`댓글 ${post?.comments?.length}개 모두 보기`}
          </button>
        )}
      </li>
    </>
  );
};

export default PostCard;
