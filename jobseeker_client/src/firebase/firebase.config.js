// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrsSv4IFYyyzR4dDQ9Mbu1ymKhwVb-P10",
  authDomain: "jobseeker-53f84.firebaseapp.com",
  projectId: "jobseeker-53f84",
  storageBucket: "jobseeker-53f84.firebasestorage.app",
  messagingSenderId: "107707896517",
  appId: "1:107707896517:web:17909ed521c034d33bd6ac",
  measurementId: "G-Z8Q0PX1M6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app