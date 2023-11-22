// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import { initializeApp } from '@react-native-firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPGKmIGXqeJqdpKl4h_kPW_faj8qVufT8",
  authDomain: "get-me-tifiin.firebaseapp.com",
  projectId: "get-me-tifiin",
  storageBucket: "get-me-tifiin.appspot.com",
  messagingSenderId: "279077343937",
  appId: "1:279077343937:web:f74937d2f8e9bd303dfa40",
  measurementId: "G-F7XP31NQG1",
  databaseURL: "https://console.firebase.google.com/project/get-me-tifiin/firestore/data/~2FOrders~2FjG9JUKRUBs9pgMQsAnKy"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const config = firebaseConfig;
// export default firebaseConfig;

// initializeApp(firebaseConfig)

// const analytics = getAnalytics(FIREBASE_APP);
