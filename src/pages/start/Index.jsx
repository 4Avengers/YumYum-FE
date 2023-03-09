import { Outlet } from "react-router-dom";
import tw from "tailwind-styled-components";

const Start = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Start;

const Wrapper = tw.div`
  w-screen screen-width mx-auto h-screen relative bg-white px-[5vw]
`;
