// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABoGACXCKgI5d8knS14x_qsjehP3NS6SY",
  authDomain: "coffee-store-8e3e1.firebaseapp.com",
  projectId: "coffee-store-8e3e1",
  storageBucket: "coffee-store-8e3e1.appspot.com",
  messagingSenderId: "408303533635",
  appId: "1:408303533635:web:3b1426b3dfcae08ad55ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);