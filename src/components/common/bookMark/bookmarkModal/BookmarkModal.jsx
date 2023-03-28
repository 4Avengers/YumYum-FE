import { bookmarkModal } from "atoms/modalAtom";
import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { FaBookmark } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { useSetRecoilState } from "recoil";
import { bgAni, listModalAni } from "shared/motionStyle";
import BookmarkCard from "./BookmarkCard";
import BookmarkForm from "./BookmarkForm";

const BookmarkModal = () => {
  const data = [1, 2, 3, 4];

  const setOpenModal = useSetRecoilState(bookmarkModal);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  return (
    <motion.div
      className=" absolute top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={handleCloseModal}
    >
      <motion.div
        className="absolute bottom-0  flex h-[80vh] w-full flex-col rounded-[1rem] bg-white pb-[2rem]"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  justify-between border-b p-[2rem]">
          <div className="flex gap-[2rem]">
            <div className="h-[7rem] w-[7rem] rounded-[0.8rem] bg-gray-200" />
            <div className="flex flex-col py-[0.7rem]">
              <span className="Cap1">저장됨</span>
              <span className="Cap4 text-primary-500">모든 북마크</span>
            </div>
          </div>
          {true ? (
            <FiBookmark
              size="3rem"
              className="mr-[-0.3rem] mt-[-0.3rem]  cursor-pointer text-primary-500 hover:text-primary-600"
              strokeWidth="1.5"
            />
          ) : (
            <FaBookmark
              size="2.5rem"
              className="cursor-pointer text-primary-600 hover:text-primary-500"
              strokeWidth="1.5"
            />
          )}
        </div>

        <BookmarkForm />
        <div className="flex flex-1 flex-col ">
          <span className="Cap1  px-[2rem]">컬렉션</span>
          <ul className="flex flex-col">
            {React.Children.toArray(
              data?.map((item) => <BookmarkCard bookmarkData={item} />)
            )}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookmarkModal;
