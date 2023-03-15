import { useCallback } from "react";
import { BiSearch } from "react-icons/bi";

const SearchForm = ({ setKeyword }) => {
  const onChange = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  return (
    <form
      className="relative flex  items-center px-[2rem] py-[2rem]"
      onSubmit={(e) => e.preventDefault()}
    >
      <BiSearch size="2rem" className="absolute left-[3rem] text-primary-500" />
      <input
        type="text"
        onChange={onChange}
        placeholder="검색어를 입력해주세요"
        className="Cap4 w-full rounded-[1rem] bg-primary-300 py-[0.8rem] pl-[4rem] pr-[1rem] outline-none focus:ring-1 focus:ring-primary-400"
      />
    </form>
  );
};

export default SearchForm;
