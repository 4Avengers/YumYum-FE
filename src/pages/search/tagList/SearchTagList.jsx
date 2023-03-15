import useSearch from "hooks/useSearch";
import React from "react";

const SearchTagList = ({ keyword, status }) => {
  const { data: tagList } = useSearch({ keyword, status });

  return (
    <ul className="pt-[1rem]">
      {tagList?.map((tag) => (
        <li
          key={tag?.id}
          className="flex cursor-pointer items-center   py-[1rem] px-[4rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          // onClick={() => navigate(user?.id)}
        >
          <div className="flex-center h-[4rem] w-[4rem] rounded-full">
            <span className="Cap2">#</span>
          </div>
          <div />
          <span className="Cap2">{tag?.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchTagList;
