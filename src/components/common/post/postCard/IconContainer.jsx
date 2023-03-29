import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiBookmark } from "react-icons/fi";
import { strToBool } from "utils/isLike";
import PostService from "apis/service/PostService";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { postIdAndImageAtom } from "atoms/postAtom";
import BookmarkService from "apis/service/BookmarkService";

const IconContainer = ({ handleCommentModal, post, setOpenBookmarkBtn }) => {
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  //const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);
  const setPostIdAndImage = useSetRecoilState(postIdAndImageAtom);
  const queryKey = useRecoilValue(postQueryKeyAtom);

  const { mutate: addPostLike, isLoading: addLoading } =
    PostService.AddPostLike(queryKey);
  const { mutate: removePostLike } = PostService.RemovePostLike(queryKey);
  const { mutate: addBookmark } = BookmarkService.AddAllCollectionPost({
    queryKey,
  });
  const { mutate: removeBookmark } = BookmarkService.RemoveAllCollectionPost({
    queryKey,
  });

  // 좋아요 상태에 따라 다른 api
  const handleToggleLike = () => {
    if (isLikeLoading) return;
    if (strToBool(post?.isLiked)) {
      removePostLike(post?.id);
    } else {
      addPostLike(post?.id);
    }
  };

  // 북마크 추가 / 삭제
  const handleToggleBookmark = () => {
    //if (isBookmarkLoading) return;
    if (strToBool(post?.isBookmarked)) {
      // 삭제
      removeBookmark(post?.id);
      setOpenBookmarkBtn(false);
    } else {
      // 추가
      setPostIdAndImage({ id: post?.id, image: post?.images[0]?.file_url });
      addBookmark(post?.id);
      setOpenBookmarkBtn(true);
    }
  };

  // 좋아요 적용중일 때는 api요청 발생하지 않기 위한 loading state
  useEffect(() => {
    if (addLoading) {
      setIsLikeLoading(true);
    } else {
      setIsLikeLoading(false);
    }
  }, [addLoading]);

  return (
    <div className="flex items-center justify-between px-[2rem] py-[1rem]  text-primary-600 ">
      <div className="flex items-center space-x-[1.5rem]">
        {strToBool(post?.isLiked) ? (
          <AiFillHeart
            size="2.7rem"
            className="cursor-pointer text-primary-600 hover:text-primary-400"
            onClick={handleToggleLike}
          />
        ) : (
          <AiOutlineHeart
            size="2.7rem"
            className="cursor-pointer hover:text-primary-500"
            onClick={handleToggleLike}
          />
        )}

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
      {strToBool(post?.isBookmarked) ? (
        <FaBookmark
          size="2.5rem"
          className="cursor-pointer text-primary-600 hover:text-primary-500"
          strokeWidth="1.5"
          onClick={handleToggleBookmark}
        />
      ) : (
        <FiBookmark
          size="3rem"
          className="mr-[-0.3rem]   cursor-pointer text-primary-600 hover:text-primary-500"
          strokeWidth="1.5"
          onClick={handleToggleBookmark}
        />
      )}
    </div>
  );
};

export default IconContainer;
