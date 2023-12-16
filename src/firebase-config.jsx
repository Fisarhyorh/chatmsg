// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhsynHwMMYUFbjK8cXSpYu5xUDcvoxLk",
  authDomain: "chat-app-3f93f.firebaseapp.com",
  projectId: "chat-app-3f93f",
  storageBucket: "chat-app-3f93f.appspot.com",
  messagingSenderId: "71537027556",
  appId: "1:71537027556:web:ec1b12ae47a3ffe5823ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)