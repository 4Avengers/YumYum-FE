import React from "react";
import cls from "utils/cls";

const ErrorMessage = ({ errorMessage, isProfile = false }) => {
  return (
    <>
      {errorMessage && (
        <div className={cls(isProfile ? "flex" : "grid grid-cols-[1fr_2fr]")}>
          <span
            className={cls("Cap6  text-red-400", !isProfile && "col-start-2")}
          >
            {errorMessage}
          </span>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
