import CommentService from "apis/service/CommentService";
import React, { useCallback, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const EditComment = ({ comment, postId, handleEditMode }) => {
  const textRef = useRef(null);
  const { mutate: editComment, isSuccess } = CommentService.EditComment(postId);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      editComment({ commentId: comment?.id, content: textRef?.current?.value });
    },
    [comment, editComment]
  );

  useEffect(() => {
    if (textRef?.current) {
      textRef.current.value = comment.content;
    }
  }, [comment]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("댓글이 수정되었습니다.");
      handleEditMode();
    }
  }, [isSuccess, handleEditMode]);

  return (
    <form
      className="flex w-full flex-col items-end space-y-[0.8rem]"
      onSubmit={onSubmit}
    >
      <textarea ref={textRef} className="Cap5 w-full border" />
      <button className="border">수정</button>
    </form>
  );
};

export default EditComment;
