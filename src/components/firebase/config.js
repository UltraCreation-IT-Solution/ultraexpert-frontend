import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDiwB0ZbDqBTA-KauQnRcqbpfBK23h3YJA",
  authDomain: "ultracreation-b6a11.firebaseapp.com",
  projectId: "ultracreation-b6a11",
  storageBucket: "ultracreation-b6a11.appspot.com",
  messagingSenderId: "509375131504",
  appId: "1:509375131504:web:700cc63bdd0da430ace9b5",
};

const app = initializeApp(firebaseConfig);

export const imageDB = getStorage(app);
