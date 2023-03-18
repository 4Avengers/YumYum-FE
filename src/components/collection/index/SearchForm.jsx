import React, { useCallback, useState } from "react";

import { BiSearch } from "react-icons/bi";
import { HiOutlineAdjustments } from "react-icons/hi";
const SearchForm = () => {
  const [keyword, setKeyword] = useState("");

  const onChange = useCallback(
    (e) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="relative flex  items-center  px-[2rem]"
      onSubmit={handleSubmit}
    >
      <BiSearch size="2rem" className="absolute left-[4rem] text-primary-500" />
      <input
        type="text"
        onChange={onChange}
        value={keyword}
        placeholder="검색어를 입력해주세요"
        className="Cap4 h-[4.5rem] w-full flex-1 rounded-[1rem] border bg-[#FCFCFD] pl-[4rem] pr-[1rem] outline-none focus:border-none focus:ring-1 focus:ring-primary-400"
      />
      <button className=" flex-center ml-[1rem] h-[4.5rem] w-[4.5rem] rounded-[1rem] border text-primary-500 transition-colors hover:border-primary-400 hover:text-primary-600 ">
        <HiOutlineAdjustments className="rotate-[-90deg] " size="2rem" />
      </button>
    </form>
  );
};

export default SearchForm;
