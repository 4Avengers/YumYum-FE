import { motion } from "framer-motion";

const StatusHeader = ({ setIsCurrent, isCurrent }) => {
  return (
    <div className="Cap4 grid grid-cols-2">
      <button
        className="relative flex flex-col items-center border-b"
        onClick={() => setIsCurrent(true)}
      >
        <span className="py-[1rem]">최신 포스팅</span>
        {isCurrent && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400  py-[0.1rem]"
            layoutId="staus"
          />
        )}
      </button>
      <button
        className="relative flex flex-col items-center border-b"
        onClick={() => setIsCurrent(false)}
      >
        <span className="py-[1rem]">내 주변 피드</span>
        {!isCurrent && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400  py-[0.1rem]"
            layoutId="staus"
          />
        )}
      </button>
    </div>
  );
};

export default StatusHeader;
