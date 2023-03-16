import { geoLocationAtom } from "atoms/geoLocationAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import useSearchPlaces from "hooks/useSearchPlaces";
import { debounce } from "lodash";
import React, { useCallback, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import SearchCard from "./SearchCard";

const SearchModal = ({ setModal, setRestaurant }) => {
  const location = useRecoilValue(geoLocationAtom);
  const { places, onChangeQuery, resetPlaces } = useSearchPlaces({ location });
  const keywordRef = useRef(null);

  // keyword가 변경될 때마다 places를 다시 조회
  const onChangeKeyword = debounce((e) => {
    const keyword = e.target.value;
    if (location.latitude && location.longitude) {
      onChangeQuery(location, keyword);
    }
  }, 200);

  // 키워드와 검색 결과 리셋
  const handleKeywordReset = useCallback(() => {
    if (keywordRef?.current) {
      keywordRef.current.value = "";
      resetPlaces();
    }
  }, [resetPlaces]);

  return (
    <ModalLayout
      hasHeader={false}
      hasFooter={false}
      hasPadding={false}
      variants={modalLayoutAni}
    >
      <ModalHeader title="맛집 검색" hasBack onClick={setModal} />
      <div className="flex flex-col pt-[2rem]">
        <label className="mx-[2rem] flex items-center  justify-between space-x-[1rem] rounded-[1rem] border p-[1rem] focus-within:border-primary-500">
          <div className="flex flex-1 items-center space-x-[1rem]">
            <BiSearch size="2rem" className="text-primary-500" />
            <input
              id="search"
              ref={keywordRef}
              onChange={onChangeKeyword}
              placeholder="검색"
              className="Cap2 flex-1 outline-none placeholder:text-primary-400"
            />
          </div>
          <span
            className="cursor-pointer"
            onClick={(e) => {
              handleKeywordReset();
              setModal(e);
            }}
          >
            <IoMdClose size="2rem" className="text-primary-500" />
          </span>
        </label>
        <ul className="flex flex-col">
          {React.Children.toArray(
            places?.map((place) => (
              <SearchCard
                place={place}
                setRestaurant={setRestaurant}
                setModal={setModal}
              />
            ))
          )}
        </ul>
      </div>
    </ModalLayout>
  );
};

export default SearchModal;
