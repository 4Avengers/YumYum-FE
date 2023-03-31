import BookmarkService from "apis/service/BookmarkService";
import { questPostModal } from "atoms/modalAtom";
import BookmarkDetailCard from "components/bookmark/detail/BookmarkDetailCard";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";
import Header from "components/layout/Header";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import { useParams, useSearchParams } from "react-router-dom";
import { modalLayoutAni } from "shared/motionStyle";

const BookmarkDetail = () => {
  const { collectionId } = useParams();
  const { data: posts } = BookmarkService.ReadBookmarkCollectionPosts(
    +collectionId
  );
  const [user] = useUser();
  const [openPostDetailModal] = useRecoilModal(questPostModal);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("name");

  return (
    <ModalLayout variants={modalLayoutAni} hasPadding={false}>
      <CustomHelmet title={query} />
      <Header headerType="BELL" hasBack title={query} />
      <div className="grid flex-1 cursor-pointer auto-rows-min grid-cols-3  gap-[1rem] px-[2rem] pt-[2rem] pb-[7rem]">
        {posts?.map((post) => (
          <BookmarkDetailCard key={post?.id} post={post} />
        ))}
      </div>
      <AnimatePresence>
        {openPostDetailModal && <PostDetailModal user={user} />}
      </AnimatePresence>
    </ModalLayout>
  );
};

export default BookmarkDetail;
