import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quest");
  };
  return (
    <button
      className="Cap3 mt-[4rem] bg-primary-600 py-[1rem] text-center text-primary-100 transition-colors hover:bg-[rgba(0,0,0,0.7)]"
      onClick={handleClick}
    >
      어디 가지? 고민될 땐 클릭 &rarr;
    </button>
  );
};

export default Button;
