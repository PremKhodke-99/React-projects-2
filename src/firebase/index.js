// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
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
const auth = getAuth(app);

async function loginUsingEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
  }
}

async function registerUsingEmailAndPassword(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    console.log(error);
  }
}

async function logout() {
  signOut(auth)
}

export {
  auth,
  loginUsingEmailAndPassword,
  logout,
  registerUsingEmailAndPassword
}
// const analytics = getAnalytics(app);