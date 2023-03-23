import { globalConfigModal } from "atoms/modalAtom";
import { motion } from "framer-motion";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { bgAni, listModalAni } from "shared/motionStyle";
import cls from "utils/cls";
import { removeToken } from "apis/token";

const GlobalModal = () => {
  const setGlobalModal = useSetRecoilState(globalConfigModal);
  const navigate = useNavigate();

  const handleBookClick = () => {
    toast.info("현재 개발중인 기능입니다. 🤗");
    setGlobalModal(false);
  };

  const handleLogout = () => {
    removeToken();
    setGlobalModal(false);
    window.location.replace("/");
  };

  return (
    <motion.div
      className=" absolute top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.3)]"
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
      onClick={() => setGlobalModal(false)}
    >
      <motion.ul
        className="absolute bottom-0  flex h-[40vh] w-full flex-col rounded-[1rem_1rem_0rem_0rem] bg-white py-[2rem]"
        variants={listModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <li className={cls(styles.li)} onClick={handleBookClick}>
          <FiBookmark
            size="2.5rem"
            strokeWidth="1.5"
            className="justify-self-center text-primary-600 "
          />
          <span>북마크</span>
        </li>
        <li className={cls(styles.li)} onClick={() => navigate("/search")}>
          <BiSearch
            size="2.5rem"
            className="justify-self-center text-primary-600"
            strokeWidth="0.1"
          />
          <span>검색</span>
        </li>
        <li className={cls(styles.li)} onClick={handleLogout}>
          <CiLogout
            size="2.5rem"
            strokeWidth="1"
            className="justify-self-center text-primary-600"
          />
          <span>로그아웃</span>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default GlobalModal;

const styles = {
  li: "Cap1 grid cursor-pointer grid-cols-[3rem_1fr] items-center space-x-[1.5rem] border-b border-[rgba(0,0,0,0.05)] px-[2rem] py-[1.5rem] transition-colors hover:bg-[rgba(0,0,0,0.1)]",
};
