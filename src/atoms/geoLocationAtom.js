const { atom } = require("recoil");

export const geoLocationAtom = atom({
  key: "geoLocation",
  default: { latitude: null, longitude: null },
});
