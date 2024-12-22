import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import { BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9yYIVKQgJhdb6aHahn0ptDtXJkPvVMo4",
  authDomain: "loginsignupflow-3a802.firebaseapp.com",
  projectId: "loginsignupflow-3a802",
  storageBucket: "loginsignupflow-3a802.appspot.com",
  messagingSenderId: "28732207046",
  appId: "1:28732207046:web:893c4cff3839ff426e0cc7",
  measurementId: "G-VWGE147B8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)

