import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import cls from "utils/cls";
import Main from "./Main";

const Layout = ({
  children,
  hasBack = false,
  title = "",
  headerType,
  hasHeader = true,
  hasPadding = true,
  isModal = false,
  hasFooter = true,
  className = "",
}) => {
  return (
    <div
      className={cls(
        "screen-width  h-screen  w-screen overflow-hidden bg-white pb-[6rem] ",
        // hasHeader ? "pt-[5rem]" : "pt-0",
        isModal ? "absolute top-0" : "relative",
        hasHeader ? "pt-[5rem]" : "pt-0",
        className
      )}
    >
      {hasHeader && (
        <Header hasBack={hasBack} title={title} headerType={headerType} />
      )}

      <Main hasPadding={hasPadding} hasHeader={hasHeader}>
        {children}
      </Main>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
