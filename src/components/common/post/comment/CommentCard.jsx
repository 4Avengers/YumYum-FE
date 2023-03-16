import CommentService from "apis/service/CommentService";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import getTime from "utils/getTime";
import { handleProfileError } from "utils/handleImgError";
import { strToBool } from "utils/isLike";
import EditComment from "./EditComment";

const CommentCard = ({ comment, postId, queryKey, isOwner }) => {
  const { mutate: addLike } = CommentService.AddCommentLike(postId);
  const { mutate: removeLike } = CommentService.RemoveCommentLike(postId);
  const { mutate: removeComment } = CommentService.RemoveComment({
    postId,
    queryKey,
  });

  const [editMode, setEditMode] = useState(false);
  // 수정
  const handleEditMode = (e) => {
    e.preventDefault();
    setEditMode((prev) => !prev);
  };

  // 삭제
  const handleRemoveComment = () => {
    removeComment(comment?.id);
  };

  // 좋아요
  const handleToggleList = () => {
    if (strToBool(comment?.isLiked)) {
      removeLike(comment?.id);
    } else {
      addLike(comment?.id);
    }
  };

  return (
    <li className="flex space-x-[1.5rem] py-[1rem] first:pt-[2rem]">
      <img
        className="h-[3rem] w-[3rem] rounded-full object-cover"
        src={comment?.user?.profile_image}
        onError={(e) => handleProfileError(e, comment?.user?.id)}
        alt="프로필"
      />
      <div className="flex flex-1 flex-col  space-y-[0.4rem]">
        <div className="flex items-center space-x-[0.7rem]">
          <span className="Cap5">{comment?.user?.nickname}</span>
          <span className="Cap5 text-primary-500">
            {getTime(comment.updated_at)}
          </span>
          {isOwner && (
            <div className="flex items-center space-x-[0.5rem]">
              <button
                className="text-primary-500 hover:text-config-blue"
                onClick={handleEditMode}
              >
                수정
              </button>
              <button
                className="text-primary-500 hover:text-config-red"
                onClick={handleRemoveComment}
              >
                삭제
              </button>
            </div>
          )}
        </div>
        {editMode ? (
          <EditComment
            comment={comment}
            postId={postId}
            handleEditMode={() => setEditMode(false)}
          />
        ) : (
          <p className="Cap6">{comment?.content}</p>
        )}
      </div>
      {strToBool(comment?.isLiked) ? (
        <AiFillHeart
          size="2rem"
          className="mt-[1rem] cursor-pointer text-primary-600 hover:text-primary-400"
          onClick={handleToggleList}
        />
      ) : (
        <AiOutlineHeart
          size="2rem"
          className="mt-[1rem] cursor-pointer text-primary-500 hover:text-primary-600"
          onClick={handleToggleList}
        />
      )}
    </li>
  );
};

export default CommentCard;
