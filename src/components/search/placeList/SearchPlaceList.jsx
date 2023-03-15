import useSearch from "hooks/useSearch";
import React from "react";

const SearchPlaceList = ({ keyword, status }) => {
  const { data: placeList } = useSearch({ keyword, status });

  return (
    <ul className="pt-[1rem]">
      {placeList?.map((place) => (
        <li
          key={place?.id}
          className="flex cursor-pointer items-center  space-x-[1rem] py-[1rem] px-[4rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          // onClick={() => navigate(user?.id)}
        >
          <div className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary-300 " />
          <div />
          <span className="Cap2">{place?.place_name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchPlaceList;
