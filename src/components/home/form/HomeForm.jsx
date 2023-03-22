import React from "react";

const HomeForm = () => {
  return (
    <div className="relative h-[20rem] bg-gray-300">
      <form
        className="absolute bottom-[-2rem] flex w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="mx-auto w-full px-[4rem]">
          <input
            className="Cap4 w-full rounded-[1rem] bg-[#F4F4F4] py-[0.6rem] px-[1rem] outline-none ring-offset-1 placeholder:text-center focus:ring-1 focus:ring-primary-400"
            placeholder="Search"
          />
        </label>
      </form>
    </div>
  );
};

export default HomeForm;
