import { motion } from "framer-motion";
import React from "react";
import cls from "utils/cls";
import { FaUserTag } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";

const ProfileStatus = ({ isTag, setIsTag }) => {
  return (
    <div className="Cap4 grid grid-cols-2">
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          !isTag ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setIsTag(false)}
      >
        <IoMdGrid size="2.5rem " />
        {!isTag && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400  py-[0.1rem]"
            layoutId="profileStatus"
          />
        )}
      </button>
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          isTag ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setIsTag(true)}
      >
        <FaUserTag size="2.3rem" />
        {isTag && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400 py-[0.1rem]"
            layoutId="profileStatus"
          />
        )}
      </button>
    </div>
  );
};

export default ProfileStatus;
