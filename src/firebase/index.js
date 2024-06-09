// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZPPUqn2Gdi6UFjV_exHoFbdU1LBfmvpA",
  authDomain: "react-interview-project-afc00.firebaseapp.com",
  projectId: "react-interview-project-afc00",
  storageBucket: "react-interview-project-afc00.appspot.com",
  messagingSenderId: "800506482218",
  appId: "1:800506482218:web:cba205dd850d848d64bd53",
  measurementId: "G-G27Y86Y4J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);