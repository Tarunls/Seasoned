// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUQ6t6qx0fNqAPHmAbVo7iTH47kZxz15E",
  authDomain: "please-ff941.firebaseapp.com",
  projectId: "please-ff941",
  storageBucket: "please-ff941.appspot.com",
  messagingSenderId: "259179922148",
  appId: "1:259179922148:web:6f069ec26f14b9a08ba2f1",
  measurementId: "G-YDT5FCRMMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
