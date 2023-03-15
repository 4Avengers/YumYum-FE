import React from "react";
import cls from "utils/cls";

const Button = ({ className, children, ...options }) => {
  return (
    <button
      className={cls(
        className,
        "mt-[2rem] w-full rounded-[1rem] bg-primary-600 py-[1.5rem] text-[1.6rem] font-semibold text-white transition-colors disabled:bg-primary-300"
      )}
      {...options}
    >
      {children}
    </button>
  );
};

export default Button;
