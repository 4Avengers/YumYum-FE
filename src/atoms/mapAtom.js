import { atom } from "recoil";

export const isListAtom = atom({
  key: "isList",
  default: false,
});

export const mapAtom = atom({
  key: "map",
  default: null,
});
