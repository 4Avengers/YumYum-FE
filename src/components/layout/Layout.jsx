import React from "react";
import Footer from "./Footer";

import tw from "tailwind-styled-components";
import Header from "./Header";

const Layout = ({
  children,
  hasBack = false,
  title = "",
  headerType,
  hasHeader = true,
}) => {
  return (
    <Wrapper $hasHeader={hasHeader}>
      {hasHeader && (
        <Header hasBack={hasBack} title={title} headerType={headerType} />
      )}

      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = tw.div`
  ${({ hasHeader }) => (hasHeader ? "pt-[5rem]" : "pt-0")}
  w-screen screen-width mx-auto h-screen relative bg-white  pb-[6rem]
`;
