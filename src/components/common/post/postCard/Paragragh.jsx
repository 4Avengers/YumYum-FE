import React, { useState } from "react";
import cls from "utils/cls";

const Paragragh = ({ post }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className=" flex flex-col space-y-[0.4rem] px-[2rem] ">
      <div className="flex items-center space-x-[1rem] pt-[0.8rem]">
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

        {!showFullText && (
          <button
            className="Cap4 cursor-pointer text-primary-500"
            onClick={toggleShowFullText}
          >
            더보기
          </button>
        )}
      </div>
      {showFullText && (
        <ul className="Cap6 p  flex flex-wrap  items-center">
          {React.Children.toArray(
            post?.hashtags?.map((hashtag) => (
              <li className="mr-[0.4rem] whitespace-nowrap text-config-blue">
                #{hashtag}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Paragragh;
