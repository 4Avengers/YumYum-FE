export const modalLayoutAni = {
  initial: { x: 500 },
  animate: { x: 0 },
  exit: { x: 500 },
};

export const smallModalAni = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 },
};

export const listModalAni = {
  initial: { y: 500, opacity: 0.4 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 },
};

export const bgAni = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.4)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};

// initial: { backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" },
