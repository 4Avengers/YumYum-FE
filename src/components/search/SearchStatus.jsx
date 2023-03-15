import { motion } from "framer-motion";
import React from "react";
import cls from "utils/cls";

const SearchStatus = ({ status, setStatus }) => {
  return (
    <div className="Cap4 grid grid-cols-3">
      {React.Children.toArray(
        STATUS_VALUES?.map((item) => (
          <button
            className={cls(
              "Cap3 relative flex flex-col items-center border-b py-[0.8rem]",
              status === item.value ? "text-primary-600" : "text-primary-400"
            )}
            onClick={() => setStatus(item.value)}
          >
            {item.name}
            {status === item.value && (
              <motion.div
                className="absolute  bottom-[-0.2rem] w-full bg-primary-400  py-[0.1rem]"
                layoutId="searchStatus"
              />
            )}
          </button>
        ))
      )}
    </div>
  );
};

export default SearchStatus;

const STATUS_VALUES = [
  { name: "계정", value: "user" },
  { name: "태그", value: "hashtag" },
  { name: "장소", value: "restaurant" },
];
