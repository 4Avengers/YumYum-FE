import React from "react";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import cls from "utils/cls";
import Main from "components/layout/Main";
import { motion } from "framer-motion";

const ModalLayout = ({
  children,
  hasBack = false,
  title = "",
  headerType,
  hasHeader = true,
  hasPadding = true,
  hasFooter = true,
  className = "",
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      className={cls(
        "screen-width mx-auto h-screen  w-screen bg-white pb-[6rem] pt-[5rem]",
        // hasHeader ? "pt-[5rem]" : "pt-0",
        "absolute top-0",
        className
      )}
    >
      {hasHeader && (
        <Header hasBack={hasBack} title={title} headerType={headerType} />
      )}

      <Main hasPadding={hasPadding}>{children}</Main>
      {hasFooter && <Footer />}
    </motion.div>
  );
};

export default ModalLayout;
