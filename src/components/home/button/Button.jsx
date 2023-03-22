import React from "react";
import { toast } from "react-toastify";

const Button = () => {
  const handleClick = () => {
    toast.info("개발중인 기능입니다 🤗");
  };
  return (
    <button
      className="Cap3 mt-[2rem] bg-primary-600 py-[1rem] text-center text-primary-100 transition-colors hover:bg-[rgba(0,0,0,0.7)]"
      onClick={handleClick}
    >
      어디 가지? 고민될 땐 클릭 &rarr;
    </button>
  );
};

export default Button;
