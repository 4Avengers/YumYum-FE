import useObserver from "hooks/useObserver";
import useSearch from "hooks/useSearch";
import React, { useCallback, useState } from "react";
import TagCard from "./TagCard";

const SearchTagList = ({ keyword, status }) => {
  const [page, setPage] = useState(1);
  const { data: tagList } = useSearch({ keyword, status, page });

  const fetchNextPage = useCallback(() => {
    if (tagList?.length > 14 && tagList?.length % 15 === 0)
      setPage((prev) => prev + 1);
  }, [tagList]);

  const [observerRef] = useObserver(fetchNextPage);

  return (
    <ul className=".inner-height  flex flex-1 flex-col overflow-x-hidden overflow-y-scroll  pt-[1rem]   scrollbar-hide">
      {React.Children.toArray(tagList?.map((tag) => <TagCard tag={tag} />))}

      <li ref={observerRef} className="w-full justify-self-end" />
    </ul>
  );
};

export default SearchTagList;
