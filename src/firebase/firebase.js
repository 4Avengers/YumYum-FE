import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "yumyum-7fd8b.firebaseapp.com",
  projectId: "yumyum-7fd8b",
  storageBucket: "yumyum-7fd8b.appspot.com",
  messagingSenderId: "927898915540",
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: "G-0JX3ENS5DW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
