import { motion } from "framer-motion";

const StatusHeader = ({ setIsCurrent, isCurrent }) => {
  return (
    <div className="Cap4 grid grid-cols-2">
      <button
        className="flex flex-col items-center"
        onClick={() => setIsCurrent(true)}
      >
        <span className="py-[1rem]">팔로워</span>
        {isCurrent && (
          <motion.div
            className="w-full bg-primary-400 py-[0.1rem]"
            layoutId="staus"
          />
        )}
      </button>
      <button
        className="flex flex-col items-center"
        onClick={() => setIsCurrent(false)}
      >
        <span className="py-[1rem]">팔로잉</span>
        {!isCurrent && (
          <motion.div
            className="w-full bg-primary-400 py-[0.1rem]"
            layoutId="staus"
          />
        )}
      </button>
    </div>
  );
};

export default StatusHeader;
