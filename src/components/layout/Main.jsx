import { bookmarkModal, globalConfigModal } from "atoms/modalAtom";
import BookmarkModal from "components/common/bookMark/bookmarkModal/BookmarkModal";
import GlobalModal from "components/common/globalModal/GlobalModal";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import React from "react";
import cls from "utils/cls";

const Main = ({ hasPadding, children, hasHeader, isScroll }) => {
  const [openGlobalModal] = useRecoilModal(globalConfigModal);
  const [openBookmarkAddModal] = useRecoilModal(bookmarkModal);
  return (
    <main
      id="main-wrapper"
      className={cls(
        "flex h-screen flex-col bg-white scrollbar-hide",
        hasPadding ? "py-[2rem]" : "py-0",
        hasHeader ? " max-h-[calc(100vh-11rem)]" : "max-h-[calc(100vh-6rem)]",
        isScroll && "overflow-x-hidden overflow-y-scroll"
      )}
    >
      {children}
      <AnimatePresence>
        {openGlobalModal && <GlobalModal />}
        {openBookmarkAddModal && <BookmarkModal />}
      </AnimatePresence>
    </main>
  );
};

export default Main;

// overflow-x-hidden overflow-y-scroll
