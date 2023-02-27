// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA_xyUXO765HIoYZUwinduhveGyOk2Hws",
  authDomain: "mejortech-256fb.firebaseapp.com",
  projectId: "mejortech-256fb",
  storageBucket: "mejortech-256fb.appspot.com",
  messagingSenderId: "169272104337",
  appId: "1:169272104337:web:e0ce84867c73566176f630",
  measurementId: "G-DMDWE9E8ZB"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth,app };