import { postIdAtom } from "atoms/postAtom";
import { commentModalAtom } from "atoms/modalAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import CommentForm from "./CommentForm";
import CommentService from "apis/service/CommentService";
import CommentCard from "./CommentCard";

const CommentModal = () => {
  const [postId, setPostId] = useRecoilState(postIdAtom);
  const setModal = useSetRecoilState(commentModalAtom);
  const { data: comments } = CommentService.ReadComments(postId);

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
            <CommentCard key={comment.id} comment={comment} postId={postId} />
          ))}
        </ul>
        <CommentForm postId={postId} />
      </div>
    </ModalLayout>
  );
};

export default CommentModal;
