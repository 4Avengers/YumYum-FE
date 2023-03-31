import { motion } from "framer-motion";
import React from "react";
import cls from "utils/cls";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";

const ProfileStatus = ({ status, setStatus }) => {
  return (
    <div className="Cap4 mt-[1rem] grid grid-cols-2">
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          status === "USER" ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setStatus("USER")}
      >
        <IoMdGrid size="2.5rem " />
        {status === "USER" && (
          <motion.div
            className="absolute  bottom-[-0.2rem]  w-full  bg-primary-400 py-[0.1rem]"
            layoutId="profileStatus"
          />
        )}
      </button>
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          status === "MAP" ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setStatus("MAP")}
      >
        <FaMapMarkerAlt size="2rem" />
        {status === "MAP" && (
          <motion.div
            className="absolute  bottom-[-0.2rem]  w-full bg-primary-400 py-[0.1rem] "
            layoutId="profileStatus"
          />
        )}
      </button>
    </div>
  );
};

export default ProfileStatus;
