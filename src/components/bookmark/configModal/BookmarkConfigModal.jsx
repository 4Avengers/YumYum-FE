import BookmarkService from "apis/service/BookmarkService";
import { bookmarkConfigModal } from "atoms/modalAtom";
import BookmarkForm from "components/common/bookMark/bookmarkModal/BookmarkForm";
import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { bgAni, listModalAni } from "shared/motionStyle";
import BookmarkCard from "./BookmarkCard";

const BookmarkConfigModal = () => {
  const setBookmarkConfigModal = useSetRecoilState(bookmarkConfigModal);
  const { data: collections } = BookmarkService.ReadBookmarkList();

  const setModal = useCallback(() => {
    setBookmarkConfigModal((prev) => !prev);
  }, [setBookmarkConfigModal]);

  return (
    <motion.div
      className=" absolute top-0 z-[999] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={setModal}
    >
      <motion.div
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-[2rem]">
          <h2 className="H1 ">북마크 컬렉션 편집</h2>
          <IoMdClose
            size="2.5rem"
            className="cursor-pointer text-primary-600 hover:text-primary-500"
            onClick={() => setModal(false)}
          />
        </div>

        <BookmarkForm />
        <div className="flex flex-col ">
          <span className="Cap1 px-[2rem]">리스트</span>
          <div className="flex flex-col">
            {collections?.slice(1)?.map((collection) => (
              <BookmarkCard key={collection?.id} collection={collection} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookmarkConfigModal;
