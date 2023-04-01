import { postIdAtom } from "atoms/postAtom";
import { commentModalAtom } from "atoms/modalAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import React, { Suspense, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import CommentForm from "./CommentForm";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import useUser from "hooks/useUser";
// import CommentList from "./CommentList";
import FakeCommentList from "components/skeleton/comment/FakeCommentList";

const CommentList = React.lazy(() => import("./CommentList"));

const CommentModal = () => {
  const [postId, setPostId] = useRecoilState(postIdAtom);
  const queryKey = useRecoilValue(postQueryKeyAtom);
  const setModal = useSetRecoilState(commentModalAtom);
  const [user] = useUser();

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
      <ModalHeader title="댓글" hasBack onClick={handleCloseModal} />
      <div className="flex flex-1 flex-col  ">
        <Suspense fallback={<FakeCommentList />}>
          <CommentList postId={postId} />
        </Suspense>

        <CommentForm postId={postId} queryKey={queryKey} user={user} />
      </div>
    </ModalLayout>
  );
};

export default CommentModal;
