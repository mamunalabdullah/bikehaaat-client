// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEzuOcFNfXgE3O48UjlN1YR_5jHxvV2fA",
  authDomain: "bikehaaat-d8dde.firebaseapp.com",
  projectId: "bikehaaat-d8dde",
  storageBucket: "bikehaaat-d8dde.appspot.com",
  messagingSenderId: "350241028202",
  appId: "1:350241028202:web:b087c078124c76c011b213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;