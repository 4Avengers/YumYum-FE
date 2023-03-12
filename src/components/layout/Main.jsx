import React from "react";
import cls from "utils/cls";

const Main = ({ hasPadding, children }) => {
  return (
    <main
      className={cls(
        "flex h-screen max-h-[calc(100vh-11rem)] flex-col overflow-scroll bg-white scrollbar-hide",
        hasPadding ? "py-[2rem]" : "py-0"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
