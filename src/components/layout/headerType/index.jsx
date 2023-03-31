import { isListAtom } from "atoms/mapAtom";
import {
  bookmarkConfigModal,
  globalConfigModal,
  myListConfigModal,
} from "atoms/modalAtom";
import { BiSearch, BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { BsList, BsMap } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import cls from "utils/cls";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const setGlobalModal = useSetRecoilState(globalConfigModal);
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li
        onClick={() => navigate("/search")}
        className="cursor-pointer hover:text-primary-500"
      >
        <BiSearch size="2.5rem" className="#444444" strokeWidth="0.1" />
      </li>
      <li
        onClick={() => setGlobalModal(true)}
        className="cursor-pointer hover:text-primary-500"
      >
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
  const setGlobalModal = useSetRecoilState(globalConfigModal);
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li
        onClick={() => setGlobalModal(true)}
        className="cursor-pointer hover:text-primary-500"
      >
        <BsList size="2.5rem" className="#444444" strokeWidth="0.3" />
      </li>
    </ul>
  );
};

const HeaderBell = () => {
  const setOpenBookmarkCofingModal = useSetRecoilState(bookmarkConfigModal);
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444 cursor-pointer transition-colors hover:text-primary-500"
          strokeWidth="0.1"
          onClick={() => setOpenBookmarkCofingModal(true)}
        />
      </li>
    </ul>
  );
};

const HeaderPlus = () => {
  const navigate = useNavigate();
  const setOpenListConfigModal = useSetRecoilState(myListConfigModal);
  return (
    <ul className="flex items-center space-x-[1.5rem]">
      <li onClick={() => navigate("/post/write")}>
        <BiPlus
          size="2.5rem"
          className="#444444 cursor-pointer transition-colors hover:text-primary-500"
          strokeWidth="0.1"
        />
      </li>
      <li onClick={() => setOpenListConfigModal((prev) => !prev)}>
        <BiDotsVerticalRounded
          size="2.5rem"
          className="#444444  cursor-pointer transition-colors hover:text-primary-500"
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
