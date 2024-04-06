// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL8NZpTRLIGgHvNevT505UIZGtDh1cr5c",
  authDomain: "nmuni-ab8f0.firebaseapp.com",
  projectId: "nmuni-ab8f0",
  storageBucket: "nmuni-ab8f0.appspot.com",
  messagingSenderId: "26161700823",
  appId: "1:26161700823:web:3b579f45c89d39969d3592",
  measurementId: "G-WSQES4ZF8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);