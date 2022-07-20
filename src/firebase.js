// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARq-YAVulZX3k0M4VB4wrOP-rEh3gfMWk",
  authDomain: "clone-5cea2.firebaseapp.com",
  projectId: "clone-5cea2",
  storageBucket: "clone-5cea2.appspot.com",
  messagingSenderId: "707639656318",
  appId: "1:707639656318:web:e0ac5ad6a7411094513d2f",
  measurementId: "G-LFCK947EDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);