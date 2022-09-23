// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxfUPaBWdm29wRJE1rqqFHjM1HBr06LM4",
  authDomain: "sinemkt-284fa.firebaseapp.com",
  projectId: "sinemkt-284fa",
  storageBucket: "sinemkt-284fa.appspot.com",
  messagingSenderId: "227872689941",
  appId: "1:227872689941:web:4bcbfdf98c3aa26715631c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;