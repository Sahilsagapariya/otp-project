import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF54rwT1ySrho5_ySH8D6cuJgfXuoPuVg",
  authDomain: "otp-project-72e3b.firebaseapp.com",
  projectId: "otp-project-72e3b",
  storageBucket: "otp-project-72e3b.appspot.com",
  messagingSenderId: "266154046678",
  appId: "1:266154046678:web:bed9b7b5fd9dae113b4577",
  measurementId: "G-9B8TG69C9G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);