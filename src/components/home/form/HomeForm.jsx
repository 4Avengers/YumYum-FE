import React from "react";
import { useNavigate } from "react-router-dom";

const HomeForm = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative aspect-[16/9] cursor-pointer bg-gray-300  bg-cover"
      style={{
        backgroundImage: "url('image/banner.webp')",
      }}
    >
      <form
        className="absolute bottom-[-2rem] flex w-full cursor-pointer"
        onClick={() => navigate("/search")}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="mx-auto w-full px-[4rem]">
          <input
            className="Cap4 w-full rounded-[0.8rem] bg-[#F4F4F4] py-[0.6rem] px-[1rem] outline-none ring-offset-1 placeholder:text-center focus:ring-1 focus:ring-primary-400"
            placeholder="Search"
            disabled
          />
        </label>
      </form>
    </div>
  );
};

export default HomeForm;
