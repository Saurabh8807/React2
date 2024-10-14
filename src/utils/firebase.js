// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNjcm82wEF-fXOPaG7ucYInVG3H4_LRSk",
  authDomain: "netflixgpt-23e48.firebaseapp.com",
  projectId: "netflixgpt-23e48",
  storageBucket: "netflixgpt-23e48.appspot.com",
  messagingSenderId: "279528988995",
  appId: "1:279528988995:web:3e079d2e2aca4a78c4cff6",
  measurementId: "G-ZQSF0W5GMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth  = getAuth()