// Import the functions you need from the SDKs you need
import firebase from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM6Rhpl2_IjMzX1iLkFnEaYUjehX1jkAU",
  authDomain: "netflix-clone-daf75.firebaseapp.com",
  projectId: "netflix-clone-daf75",
  storageBucket: "netflix-clone-daf75.appspot.com",
  messagingSenderId: "738527698399",
  appId: "1:738527698399:web:dc4d8c637d2c0398e7b86a",
  measurementId: "G-56BJHS8DQV"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;