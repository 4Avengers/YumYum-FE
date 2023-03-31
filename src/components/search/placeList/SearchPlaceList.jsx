import { geoLocationAtom } from "atoms/geoLocationAtom";
import useSearchPlaces from "hooks/useSearchPlaces";
import { debounce } from "lodash";
import { MdPlace } from "react-icons/md";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { restaurantModal } from "atoms/modalAtom";
import { restaurantAtom } from "atoms/restaurantAtom";
import useSearch from "hooks/useSearch";

const SearchPlaceList = ({ keyword, status }) => {
  const [page, setPage] = useState(1);
  const { data: tagList } = useSearch({ keyword, status, page });
  const location = useRecoilValue(geoLocationAtom);
  const { places, onChangeQuery, resetPlaces } = useSearchPlaces({ location });
  const setOpenRestaurantModal = useSetRecoilState(restaurantModal);
  const setRestaurant = useSetRecoilState(restaurantAtom);

  const handleOpenModal = (place) => {
    setOpenRestaurantModal(true);
    setRestaurant(place);
  };

  // keyword가 변경될 때마다 places를 다시 조회
  const onChangeKeyword = useCallback(() => {
    debounce(() => {
      if (location.latitude && location.longitude) {
        onChangeQuery(location, keyword);
      }
    }, 300)();
  }, [location, keyword, onChangeQuery]);

  useEffect(() => {
    if (keyword?.trim()?.length) {
      onChangeKeyword();
    } else {
      resetPlaces();
    }
  }, [keyword, onChangeKeyword, resetPlaces]);

  return (
    <ul className="pt-[1rem]">
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
              {(+place?.distance / 1000).toFixed(1)}km
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchPlaceList;
