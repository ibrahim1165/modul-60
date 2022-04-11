// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMScjJt2JKCGiJQhVK-qSzycaORsd6uK8",
  authDomain: "genius-car-servicse-60.firebaseapp.com",
  projectId: "genius-car-servicse-60",
  storageBucket: "genius-car-servicse-60.appspot.com",
  messagingSenderId: "185934154333",
  appId: "1:185934154333:web:1bfc16b0b74a8d21e11bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;