import { bookmarkDetailModal } from "atoms/modalAtom";
import BookmarkDetailCard from "components/bookmark/detail/BookmarkDetailCard";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import PostDetailModal from "components/common/post/detailModal/PostDetailModal";
import Header from "components/layout/Header";
import CustomHelmet from "elements/CustomHelmet";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import useUser from "hooks/useUser";
import { modalLayoutAni } from "shared/motionStyle";

const BookmarkDetail = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const [user] = useUser();
  const [openPostDetailModal] = useRecoilModal(bookmarkDetailModal);

  return (
    <ModalLayout variants={modalLayoutAni} hasPadding={false}>
      <CustomHelmet title={"컬렉션"} />
      <Header headerType="BELL" hasBack title="컬렉션" />
      <div className="grid flex-1 cursor-pointer grid-cols-3  gap-[1rem] px-[2rem] pt-[2rem] pb-[7rem]">
        {data?.map((item) => (
          <BookmarkDetailCard key={item} />
        ))}
      </div>
      <AnimatePresence>
        {openPostDetailModal && <PostDetailModal user={user} />}
      </AnimatePresence>
    </ModalLayout>
  );
};

export default BookmarkDetail;
