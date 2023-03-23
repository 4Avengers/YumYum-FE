import PostService from "apis/service/PostService";
import { questPostModal } from "atoms/modalAtom";
import { postIdAtom } from "atoms/postAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import CommentForm from "../comment/CommentForm";
import PostCard from "./PostCard";
import useQueryKey from "hooks/useQueryKey";
import { postQueryKeyAtom } from "atoms/queryKeyAtom";
import CommentList from "../comment/CommentList";

const PostDetailModal = ({ user }) => {
  const setOpenPostDetailModal = useSetRecoilState(questPostModal);
  const [postId] = useRecoilState(postIdAtom);

  const { data: post } = PostService.ReadPostDetail(postId);

  useQueryKey(["post", postId], postQueryKeyAtom);

  const handleCloseModal = () => {
    setOpenPostDetailModal(false);
  };

  return (
    <ModalLayout variants={modalLayoutAni} maxZIndex hasPadding={false}>
      <ModalHeader
        title={post?.restaurant?.place_name}
        hasBack
        onClick={handleCloseModal}
      />
      <div className="flex flex-1 flex-col ">
        <PostCard post={post} />
        <CommentList postId={post?.id} />
        <CommentForm postId={post?.id} user={user} /> */
      </div>
    </ModalLayout>
  );
};

export default PostDetailModal;
