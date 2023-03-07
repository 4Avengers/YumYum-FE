/** tailwind를 위한 문자열을 합쳐주는 함수 */
export const cls = (...classes) =>
  classes
    .filter((className) => className && typeof className === "string")
    .join(" ");

export default cls;
