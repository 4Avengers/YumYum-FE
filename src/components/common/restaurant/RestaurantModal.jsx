import { restaurantModal } from "atoms/modalAtom";
import ModalHeader from "components/common/modalLayout/ModalHeader";
import ModalLayout from "components/common/modalLayout/ModalLayout";
import { useSetRecoilState } from "recoil";
import { modalLayoutAni } from "shared/motionStyle";

const RestaurantModal = () => {
  const setOpenRestaurantModal = useSetRecoilState(restaurantModal);

  const handleCloseModal = () => {
    setOpenRestaurantModal(false);
  };

  return (
    <ModalLayout variants={modalLayoutAni} maxZIndex hasPadding={false}>
      <ModalHeader title={""} hasBack onClick={handleCloseModal} />
      <div className="flex flex-1 flex-col "></div>
    </ModalLayout>
  );
};

export default RestaurantModal;
