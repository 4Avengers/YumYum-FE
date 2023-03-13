import { motion } from "framer-motion";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { bgAni, smallModalAni } from "shared/motionStyle";
import cls from "utils/cls";

const AcessModal = ({ setModal, setValue, value }) => {
  const onChange = (e) => {
    e.preventDefault();
    setValue("visibility", e.target.value || "public");
    setModal(e);
  };

  console.log(value);
  return (
    <motion.div
      className="flex-center absolute top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.3)]"
      onClick={setModal}
      variants={bgAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.4 }}
    >
      <motion.div
        className="flex w-[30rem] flex-col rounded-[1rem] bg-white"
        variants={smallModalAni}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "easeInOut", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" Cap1 relative flex items-center justify-center p-[1rem]">
          <span>공개 범위</span>
          <span
            className="group absolute top-0 right-0 cursor-pointer p-[1rem]"
            onClick={setModal}
          >
            <IoMdClose size="2rem" className="group-hover:text-primary-500" />
          </span>
        </div>
        <div className="flex-center Cap4 space-x-[1rem] pt-[1rem] pb-[2rem] text-white">
          <button
            className={cls(
              "rounded-[1rem]  p-[1rem]",
              value === "public"
                ? "bg-primary-600"
                : "bg-primary-400 transition-colors hover:bg-primary-500"
            )}
            value="public"
            onClick={onChange}
          >
            전체 공개
          </button>
          <button
            className={cls(
              "rounded-[1rem]  p-[1rem]",
              value === "private"
                ? "bg-primary-600"
                : "bg-primary-400 transition-colors hover:bg-primary-500"
            )}
            value="private"
            onClick={onChange}
          >
            팔로워 공개
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AcessModal;
