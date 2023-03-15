import { motion } from "framer-motion";
import React from "react";
import cls from "utils/cls";

const FollowStatus = ({ isFollowing, setIsFollowing }) => {
  return (
    <div className="Cap4 grid grid-cols-2">
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          isFollowing ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setIsFollowing(true)}
      >
        <span className={cls(isFollowing ? "Cap3" : "Cap4")}>팔로잉</span>
        {isFollowing && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400  py-[0.1rem]"
            layoutId="followStatus"
          />
        )}
      </button>
      <button
        className={cls(
          "relative flex flex-col items-center border-b py-[0.8rem]",
          !isFollowing ? "text-primary-600" : "text-primary-400"
        )}
        onClick={() => setIsFollowing(false)}
      >
        <span className={cls(!isFollowing ? "Cap3" : "Cap4")}>팔로워</span>
        {!isFollowing && (
          <motion.div
            className="absolute  bottom-[-0.2rem] w-full bg-primary-400 py-[0.1rem]"
            layoutId="followStatus"
          />
        )}
      </button>
    </div>
  );
};

export default FollowStatus;
