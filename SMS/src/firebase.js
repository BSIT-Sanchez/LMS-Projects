// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lms-learningsystem.firebaseapp.com",
  projectId: "lms-learningsystem",
  storageBucket: "lms-learningsystem.appspot.com",
  messagingSenderId: "379408143034",
  appId: "1:379408143034:web:f32c08212f5c751f1ce883",
  measurementId: "G-5QKK2ZJ1KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
