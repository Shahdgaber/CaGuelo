// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNASBd-yfSwpABtijkfm9kwPPzHHczRWs",
  authDomain: "appstore-8103b.firebaseapp.com",
  projectId: "appstore-8103b",
  storageBucket: "appstore-8103b.appspot.com",
  messagingSenderId: "427175808978",
  appId: "1:427175808978:web:a60c6c43cae358ec4f820b",
  measurementId: "G-5L9KSJR21M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);