import React from "react";
import { FaStar } from "react-icons/fa";

const PostList = ({ setOpenModal, setRestaurantId, posts }) => {
  const handleClick = (id) => {
    setRestaurantId(id);
    setOpenModal();
  };

  return (
    <ul className="flex w-full flex-col pb-[3rem]">
      {posts?.map((post) => (
        <li
          key={post?.id}
          className="flex cursor-pointer space-x-[2rem] px-[2rem] py-[2rem] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
          onClick={() => handleClick(post?.restaurant?.id)}
        >
          <img
            className="h-[10rem] w-[10rem] rounded-[1rem] bg-gray-500 object-cover"
            alt="img"
            src={post.images[0]?.file_url}
          />
          <div className="flex flex-1 flex-col space-y-[0.5rem] ">
            <div className="flex justify-between">
              <h3 className="Cap1">{post?.restaurant?.place_name}</h3>
              <div className="flex items-center space-x-[0.5rem]">
                <FaStar size="2rem" className="text-primary-600" />
                <span className="Cap2">{post?.AvgRating || post?.rating}</span>
              </div>
            </div>
            <p className="Cap4 overflow-hidden text-ellipsis  whitespace-pre-wrap line-clamp-3">
              {post?.content}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
