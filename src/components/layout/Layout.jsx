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
}) => {
  return (
    <div
      className={cls(
        "screen-width relative mx-auto h-screen w-screen bg-white pb-[6rem]",
        hasHeader ? "pt-[5rem]" : "pt-0"
      )}
    >
      <>
        {hasHeader && (
          <Header hasBack={hasBack} title={title} headerType={headerType} />
        )}
      </>
      <Main hasPadding={hasPadding}>{children}</Main>

      <Footer />
    </div>
  );
};

export default Layout;
