// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9yYIVKQgJhdb6aHahn0ptDtXJkPvVMo4",
  authDomain: "loginsignupflow-3a802.firebaseapp.com",
  projectId: "loginsignupflow-3a802",
  storageBucket: "loginsignupflow-3a802.firebasestorage.app",
  messagingSenderId: "28732207046",
  appId: "1:28732207046:web:893c4cff3839ff426e0cc7",
  measurementId: "G-VWGE147B8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;