import { initializeApp } from "firebase/app";


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

export { app };