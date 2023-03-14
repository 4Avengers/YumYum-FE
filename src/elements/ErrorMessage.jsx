import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className="grid grid-cols-[1fr_2fr]">
          <span className="Cap6 col-start-2 text-red-400">{errorMessage}</span>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
