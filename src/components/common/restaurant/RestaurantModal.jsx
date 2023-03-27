import { restaurantModal } from "atoms/modalAtom";
import { restaurantAtom } from "atoms/restaurantAtom";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMap from "./RestaurantMap";
import RestaurantPostlist from "./RestaurantPostlist";

const RestaurantModal = ({ isSearch = true }) => {
  const setOpenRestaurantModal = useSetRecoilState(restaurantModal);
  const restaurant = useRecoilValue(restaurantAtom);
  const handleCloseModal = () => {
    setOpenRestaurantModal(false);
  };

  return (
    <ModalLayout variants={modalLayoutAni}>
      <RestaurantHeader
        title={restaurant && restaurant?.place_name}
        hasBack
        onClick={handleCloseModal}
      />
      <div className="flex flex-1 flex-col pt-[1.6rem] ">
        <RestaurantMap place={restaurant} />
        <div className="Cap4 flex flex-col space-y-[0.7rem] px-[2rem] py-[1.5rem]">
          <div className="flex items-center space-x-[1rem]">
            <div className="Cap6 rounded-[0.3rem] border border-primary-400 px-[0.2rem] text-primary-500">
              도로명
            </div>
            <span>{restaurant?.road_address_name}</span>
          </div>
          <div className="flex items-center space-x-[1rem]">
            <div className="Cap6 rounded-[0.3rem] border border-primary-400 px-[0.2rem] text-primary-500">
              지번
            </div>
            <span>{restaurant?.address_name}</span>
          </div>
        </div>
        <RestaurantPostlist
          placeId={isSearch ? restaurant?.id : restaurant?.kakao_place_id}
        />
      </div>
    </ModalLayout>
  );
};

export default RestaurantModal;
