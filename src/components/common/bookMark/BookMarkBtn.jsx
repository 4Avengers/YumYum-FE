import { bookmarkModal } from "atoms/modalAtom";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { bookmarkBtnAni } from "shared/motionStyle";
//import { BsBookmarkFill } from "react-icons/bs"

const BookMarkBtn = ({ setOpenBookmarkBtn }) => {
  const setOpenBookmarkModal = useSetRecoilState(bookmarkModal);

  // 북마크 버튼 닫기
  const closeBookmarkBtn = useCallback(() => {
    setOpenBookmarkBtn(false);
  }, [setOpenBookmarkBtn]);

  // 북마크 모달 열기
  const handleOpenBookmarkModal = useCallback(() => {
    setOpenBookmarkModal(true);
  }, [setOpenBookmarkModal]);

  // 북마크 버튼을 5초 뒤에 닫기
  useEffect(() => {
    let timer = setTimeout(closeBookmarkBtn, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeBookmarkBtn]);

  return (
    <motion.button
      variants={bookmarkBtnAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween" }}
      onClick={handleOpenBookmarkModal}
      className="border-primary-4 00 Cap5 absolute bottom-0 w-full border-b bg-white py-[1rem] px-[2rem] text-start text-config-blue transition-colors  hover:text-config-hoverBlue"
    >
      북마크 컬렉션에 저장
    </motion.button>
  );
};

export default BookMarkBtn;
