// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ6600vbWE9b0azcWJJZjT4QR3TOxoip0",
  authDomain: "pass-pass-1cdc9.firebaseapp.com",
  projectId: "pass-pass-1cdc9",
  storageBucket: "pass-pass-1cdc9.firebasestorage.app",
  messagingSenderId: "83817464372",
  appId: "1:83817464372:web:9104773879ab3a5ed68061",
  measurementId: "G-HRMLWNHNJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);