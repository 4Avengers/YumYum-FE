import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiWY0VOFoacUDDWDkyv0c4041l5GapYAw",
  authDomain: "yumyum-7fd8b.firebaseapp.com",
  projectId: "yumyum-7fd8b",
  storageBucket: "yumyum-7fd8b.appspot.com",
  messagingSenderId: "927898915540",
  appId: "1:927898915540:web:63442bc75359889ea8e141",
  measurementId: "G-0JX3ENS5DW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
