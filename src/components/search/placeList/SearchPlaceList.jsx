import { MdPlace } from "react-icons/md";
import React, { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { restaurantModal } from "atoms/modalAtom";
import { restaurantAtom } from "atoms/restaurantAtom";
import useSearch from "hooks/useSearch";
import useObserver from "hooks/useObserver";
import useGeolocation from "hooks/useGeoLocation";
import getDistance from "utils/getDistance";

const SearchPlaceList = ({ keyword, status }) => {
  const [page, setPage] = useState(1);
  const { data: places } = useSearch({ keyword, status, page });
  const { location } = useGeolocation();
  const setOpenRestaurantModal = useSetRecoilState(restaurantModal);
  const setRestaurant = useSetRecoilState(restaurantAtom);

  const handleOpenModal = (place) => {
    setOpenRestaurantModal(true);
    setRestaurant(place);
  };

  const fetchNextPage = useCallback(() => {
    if (places?.length > 14 && places?.length % 15 === 0)
      setPage((prev) => prev + 1);
  }, [places]);
  const [observerRef] = useObserver(fetchNextPage);

  return (
    <ul className=".inner-height  flex flex-1 flex-col overflow-x-hidden overflow-y-scroll  pt-[1rem]   scrollbar-hide">
      {places?.map((place) => (
        <li
          key={place?.id}
          className="flex cursor-pointer space-x-[2rem] border-b p-[2rem] last:border-none"
          onClick={() => handleOpenModal(place)}
        >
          <span className="mt-[0.2rem]">
            <MdPlace size="2rem" className="text-primary-500" />
          </span>
          <div className="flex flex-1 flex-col ">
            <strong className="Cap1">{place?.place_name}</strong>
            <p className="Cap4 text-primary-500">{place?.road_address_name}</p>
          </div>
          <div className="flex flex-col items-center text-primary-500">
            <span className="Cap5">
              {place?.category_name?.split(">")?.reverse()[0]?.trim()}
            </span>
            <span className="Cap5">
              {getDistance(
                location?.latitude,
                location?.longitude,
                +place?.y,
                +place?.x
              ).toFixed(1)}
              km
            </span>
          </div>
        </li>
      ))}
      <li ref={observerRef} className="w-full justify-self-end" />
    </ul>
  );
};

export default SearchPlaceList;
