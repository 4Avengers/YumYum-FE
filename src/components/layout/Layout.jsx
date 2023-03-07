import React from "react";
import Footer from "./Footer";

import tw from "tailwind-styled-components";
import Header from "./Header";

const Layout = ({ children, hasBack = false, title = "", headerType }) => {
  return (
    <Wrapper>
      <Header hasBack={hasBack} title={title} headerType={headerType} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = tw.div`
  w-screen screen-width mx-auto h-screen relative bg-white pt-[5rem] pb-[6rem]
 
`;
