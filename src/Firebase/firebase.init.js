// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa98fKnZflX6KjVG15JTbstiB4O_3WrzE",
  authDomain: "bikehaaat-f2ef4.firebaseapp.com",
  projectId: "bikehaaat-f2ef4",
  storageBucket: "bikehaaat-f2ef4.appspot.com",
  messagingSenderId: "307476130920",
  appId: "1:307476130920:web:12e29f2600cdb71ee19fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;