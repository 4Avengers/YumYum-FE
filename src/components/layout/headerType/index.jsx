import {
  BiSearch,
  BiDotsVerticalRounded,
  BiMenu,
  BiMapAlt,
  BiPlus,
} from "react-icons/bi";
import { CiPaperplane } from "react-icons/ci";
import BellSvg from "assets/svg/BellSvg";
import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li onClick={() => navigate("/search")}>
        <BiSearch size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
      <li>
        <BellSvg />
      </li>
      <li>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444"
          strokeWidth="0.1"
        />
      </li>
    </ul>
  );
};

const HeaderMap = () => {
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li>
        <BiMenu size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
      <li>
        <BiMapAlt size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
    </ul>
  );
};

const HeaderDm = () => {
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li className="mt-[-0.3rem] rotate-[-45deg]">
        <CiPaperplane size="2.5rem" className="#444444" strokeWidth="0.7" />
      </li>
      <li>
        <BellSvg />
      </li>
      <li>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444"
          strokeWidth="0.1"
        />
      </li>
    </ul>
  );
};

const HeaderBell = () => {
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li>
        <BellSvg />
      </li>
      <li>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444"
          strokeWidth="0.1"
        />
      </li>
    </ul>
  );
};

const HeaderPlus = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li onClick={() => navigate("/post/write")}>
        <BiPlus size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
      <li>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444"
          strokeWidth="0.1"
        />
      </li>
    </ul>
  );
};

const HEADER_TYPE = {
  SEARCH: <HeaderSearch />,
  MAP: <HeaderMap />,
  DM: <HeaderDm />,
  BELL: <HeaderBell />,
  PLUS: <HeaderPlus />,
};

export default HEADER_TYPE;
