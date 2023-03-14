export const getAddress = (str) => {
  if (!str) return "";
  return str
    ?.split(" ")
    .reverse()
    .find((item) => item[item?.length - 1 || 0] === "동");
};

// "동 or 리"
