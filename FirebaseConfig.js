// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: "dropify-77310.firebaseapp.com",
  projectId: "dropify-77310",
  storageBucket: "dropify-77310.appspot.com",
  messagingSenderId: "806904429330",
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

// console.log(process?.env)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
