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
  apiKey: "AIzaSyDzrT7AJbDhdn0WOsdibeuzP768pVs1qus",
  authDomain: "routes3-7d3b5.firebaseapp.com",
  projectId: "routes3-7d3b5",
  storageBucket: "routes3-7d3b5.appspot.com",
  messagingSenderId: "70561635740",
  appId: "1:70561635740:web:837119735bb71a5a263c59",
  measurementId: "G-PP4SQJJZ68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export{auth , db };
