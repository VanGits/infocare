// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkH57y1BSwxhYHkSsHdj8JleqRIQhA6gQ",
  authDomain: "fir-24sc.firebaseapp.com",
  projectId: "fir-24sc",
  storageBucket: "fir-24sc.appspot.com",
  messagingSenderId: "802082619360",
  appId: "1:802082619360:web:34809b11b63888dbfef585",
  measurementId: "G-MX4332MW3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signInWithCredentials = signInWithEmailAndPassword();
export default app;
