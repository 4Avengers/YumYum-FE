import React from "react";
import cls from "utils/cls";

const Main = ({ hasPadding, children, hasHeader }) => {
  return (
    <main
      className={cls(
        "flex h-screen flex-col overflow-scroll bg-white scrollbar-hide",
        hasPadding ? "py-[2rem]" : "py-0",
        hasHeader ? " max-h-[calc(100vh-11rem)]" : "max-h-[calc(100vh-6rem)]"
      )}
    >
      {children}
    </main>
  );
};

export default Main;
