import React from "react";
import FooterAdmin from "./FooterAdmin";
import Header from "./Header";
import cls from "utils/cls";
import Main from "./Main";

const LayoutAdmin = ({
  children,
  hasBack = false,
  title = "",
  headerType,
  hasHeader = true,
  hasPadding = true,
  isModal = false,
  hasFooter = true,
  className = "",
  isScroll = true,
}) => {
  return (
    <div
      className={cls(
        "screen-width mx-auto h-screen w-screen overflow-hidden bg-white pb-[6rem] shadow-xl nm:ml-[47rem] nm:mr-0",
        // hasHeader ? "pt-[5rem]" : "pt-0",
        isModal ? "absolute top-0" : "relative",
        hasHeader ? "pt-[5rem]" : "pt-0",
        className
      )}
    >
      {hasHeader && (
        <Header hasBack={hasBack} title={title} headerType={headerType} />
      )}

      <Main hasPadding={hasPadding} hasHeader={hasHeader} isScroll={isScroll}>
        {children}
      </Main>

      {hasFooter && <FooterAdmin />}
    </div>
  );
};

export default LayoutAdmin;
