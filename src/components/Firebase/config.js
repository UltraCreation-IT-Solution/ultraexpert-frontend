import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCPOy4vzvTV9rkc7RjMznDrhG6OAUj3f4k",
  authDomain: "ultraxpert-a8ac6.firebaseapp.com",
  projectId: "ultraxpert-a8ac6",
  storageBucket: "ultraxpert-a8ac6.appspot.com",
  messagingSenderId: "732364861247",
  appId: "1:732364861247:web:255c6cb86be88d0cbaad8a",
  measurementId: "G-ZEH35NH80J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
