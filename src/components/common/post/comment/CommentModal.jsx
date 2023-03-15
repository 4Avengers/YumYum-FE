import { postIdAtom } from "atoms/postAtom";
import { commentModalAtom } from "atoms/modalAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import CommentForm from "./CommentForm";
import CommentService from "apis/service/CommentService";
import CommentCard from "./CommentCard";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import useUser from "hooks/useUser";

const CommentModal = () => {
  const [postId, setPostId] = useRecoilState(postIdAtom);
  const queryKey = useRecoilValue(postQueryKeyAtom);
  const setModal = useSetRecoilState(commentModalAtom);
  const { data: comments } = CommentService.ReadComments(postId);
  const user = useUser();
  //postId로 데이터 불러오기

  const handleCloseModal = useCallback(() => {
    setModal(false);
    setPostId(null);
  }, [setModal, setPostId]);

  return (
    <ModalLayout
      hasHeader={false}
      hasFooter={false}
      hasPadding={false}
      variants={modalLayoutAni}
    >
      <ModalHeader title="댓글" hasBack onClick={handleCloseModal} has />
      <div className="flex flex-1 flex-col  ">
        <ul className="h-[80vh] overflow-y-auto px-[2rem] scrollbar-hide">
          {comments?.map((comment, idx) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              postId={postId}
              queryKey={queryKey}
              isOwner={user?.id === comment?.user?.id}
            />
          ))}
        </ul>
        <CommentForm postId={postId} queryKey={queryKey} />
      </div>
    </ModalLayout>
  );
};

export default CommentModal;
