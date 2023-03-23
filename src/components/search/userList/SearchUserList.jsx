import useObserver from "hooks/useObserver";
import useSearch from "hooks/useSearch";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleProfileError } from "utils/handleImgError";

const SearchUserList = ({ keyword, status }) => {
  const [page, setPage] = useState(1);
  const { data: userList } = useSearch({ status, keyword, page });
  const navigate = useNavigate();

  const fetchNextPage = useCallback(() => {
    if (userList?.length > 14 && userList?.length % 15 === 0)
      setPage((prev) => prev + 1);
  }, [userList]);

  const [observerRef] = useObserver(fetchNextPage);

  return (
    <ul className=".inner-height flex flex-col overflow-x-hidden overflow-y-scroll pt-[1rem]   scrollbar-hide">
      {React.Children.toArray(
        userList?.map((user) => (
          <li
            key={user?.id}
            className="flex cursor-pointer items-center  space-x-[1rem] py-[1rem] px-[4rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
            onClick={() => navigate(`/profile/${user?.id}`)}
          >
            <img
              className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary-300 object-cover"
              src={user?.profile_image}
              alt="avatar"
              onError={(e) => handleProfileError(e, user?.id)}
            />
            <div />
            <span className="Cap2">{user?.nickname}</span>
          </li>
        ))
      )}
      <li ref={observerRef} />
    </ul>
  );
};

export default SearchUserList;
