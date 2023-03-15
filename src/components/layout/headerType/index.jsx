import { isListAtom } from "atoms/mapAtom";
import {
  BiSearch,
  BiDotsVerticalRounded,
  BiMapAlt,
  BiPlus,
} from "react-icons/bi";
import { BsList, BsBell, BsMap } from "react-icons/bs";
import { CiPaperplane } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import cls from "utils/cls";

const HeaderSearch = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li onClick={() => navigate("/search")}>
        <BiSearch size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
      <li>
        <BsBell size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
      <li>
        <BsList size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
    </ul>
  );
};

const HeaderMap = () => {
  const [isList, setIsList] = useRecoilState(isListAtom);
  return (
    <div className="flex items-center space-x-[0.5rem] ">
      <button
        disabled={!isList}
        className={cls(
          "flex-center h-[3.5rem] w-[3.5rem] rounded-[0.5rem]",
          !isList && "bg-primary-300"
        )}
        onClick={() => setIsList((prev) => !prev)}
      >
        <BsMap
          size="2.1rem"
          className={cls(!isList ? "#444444" : "text-primary-500")}
          strokeWidth="0.4"
        />
      </button>
      <button
        disabled={isList}
        className={cls(
          "flex-center h-[3.5rem] w-[3.5rem] rounded-[0.5rem]",
          isList && "bg-primary-300"
        )}
        onClick={() => setIsList((prev) => !prev)}
      >
        <BsList
          size="2.5rem"
          className={cls(isList ? "#444444" : "text-primary-500")}
          strokeWidth="0.3"
        />
      </button>
    </div>
  );
};

const HeaderDm = () => {
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li className="mt-[-0.3rem] rotate-[-45deg]">
        <CiPaperplane size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
      <li>
        <BsBell size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
      <li>
        <BsList size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
    </ul>
  );
};

const HeaderBell = () => {
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li>
        <BsBell size="2.5rem" className="#444444" strokeWidth="0.3" />
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
