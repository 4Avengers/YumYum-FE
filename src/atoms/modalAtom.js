import { atom } from "recoil";

export const commentModalAtom = atom({
  key: "commentModal",
  default: false,
});

export const postConfigModalAtom = atom({
  key: "postConfigModal",
  default: false,
});
