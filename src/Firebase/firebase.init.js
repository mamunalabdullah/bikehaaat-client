// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTHwBYNFDTpUNJpzXC_a9agpbpq4mwt08",
  authDomain: "bikehaaat.firebaseapp.com",
  projectId: "bikehaaat",
  storageBucket: "bikehaaat.appspot.com",
  messagingSenderId: "922961734260",
  appId: "1:922961734260:web:3bd819b0153b8bda0a3f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;