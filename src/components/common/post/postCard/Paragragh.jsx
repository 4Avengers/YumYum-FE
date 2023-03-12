import React, { useState } from "react";
import cls from "utils/cls";

const Paragragh = ({ post }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className="flex px-[2rem] pt-[0.8rem]">
      <p
        className={cls(
          "Cap4 text-primary-600",

          !showFullText &&
            "w-[60%] overflow-hidden text-ellipsis whitespace-nowrap"
        )}
      >
        <span className="Cap3 mr-[0.7rem] whitespace-nowrap text-primary-700">
          {post.user.nickname}
        </span>
        {post.content}
      </p>
      {!showFullText && (
        <button
          className="Cap4 cursor-pointer text-primary-500"
          onClick={toggleShowFullText}
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default Paragragh;
