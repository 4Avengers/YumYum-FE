import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useRecoilModal = (atom) => {
  const [openModal, setOpenModal] = useRecoilState(atom);

  useEffect(() => {
    return () => setOpenModal(false);
  }, [setOpenModal]);
  return [openModal, setOpenModal];
};

export default useRecoilModal;
