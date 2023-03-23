import { globalConfigModal } from "atoms/modalAtom";
import GlobalModal from "components/common/globalModal/GlobalModal";
import { AnimatePresence } from "framer-motion";
import useRecoilModal from "hooks/useRecoilModal";
import React from "react";
import cls from "utils/cls";

const Main = ({ hasPadding, children, hasHeader }) => {
  const [openGlobalModal] = useRecoilModal(globalConfigModal);
  return (
    <main
      className={cls(
        "flex h-screen flex-col overflow-scroll bg-white scrollbar-hide",
        hasPadding ? "py-[2rem]" : "py-0",
        hasHeader ? " max-h-[calc(100vh-11rem)]" : "max-h-[calc(100vh-6rem)]"
      )}
    >
      {children}
      <AnimatePresence>{openGlobalModal && <GlobalModal />}</AnimatePresence>
    </main>
  );
};

export default Main;
