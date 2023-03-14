import React, { useState } from "react";
import cls from "utils/cls";

const Paragragh = ({ post }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className="flex space-x-[1rem] px-[2rem] pt-[0.8rem]">
      <p
        className={cls(
          "Cap4 text-primary-600",

          !showFullText &&
            "max-w-[60%] overflow-hidden text-ellipsis whitespace-nowrap"
        )}
      >
        <span className="Cap3 mr-[0.7rem] whitespace-nowrap text-primary-700">
          {post?.user?.nickname}
        </span>
        {post?.content}
      </p>

      {!showFullText ? (
        <button
          className="Cap4 cursor-pointer text-primary-500"
          onClick={toggleShowFullText}
        >
          더보기
        </button>
      ) : (
        <ul className="flex  space-x-[0.4rem]">
          {React.Children.toArray(
            post?.hashtags?.map((hashtag) => (
              <li className="text-config-blue">#{hashtag?.name}</li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Paragragh;
