import React from "react";
import cls from "utils/cls";

const Textarea = ({ style, register }) => {
  return (
    <label className={cls(style.verticalContainer)}>
      <span className={cls(style.title)}>리뷰</span>
      <textarea
        {...register}
        className={cls(
          style.border,
          "Cap2 h-[10vh] overflow-scroll outline-none scrollbar-hide placeholder:text-primary-400 focus:border-primary-500 focus:ring-transparent"
        )}
        placeholder="리뷰을 입력해주세요."
      />
    </label>
  );
};

export default Textarea;
