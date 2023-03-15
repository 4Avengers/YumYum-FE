import { useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = (e) => {
    if (e) e.preventDefault();
    setOpenModal((prev) => !prev);
  };

  return [openModal, handleToggleModal];
};

export default useModal;
