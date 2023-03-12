import { BiSearch } from "react-icons/bi";
import cls from "utils/cls";

const SearchBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        "flex items-center space-x-[1rem] bg-[#F7F6F6]",
        "rounded-[1rem] border p-[1rem]"
      )}
    >
      <BiSearch size="2rem" className="text-primary-500" />
      <span className="Cap2 text-primary-400">검색</span>
    </button>
  );
};

export default SearchBtn;
