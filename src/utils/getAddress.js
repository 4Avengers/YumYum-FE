export const getAddress = (str) => {
  if (!str) return "";
  return str
    ?.split(" ")
    .reverse()
    .find(
      (item) =>
        item[item?.length - 1] === "동" || item[item?.length - 1] === "리"
    );
};

// "동 or 리"
