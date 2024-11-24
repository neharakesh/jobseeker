import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config.js"


const login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            
            const user = result.user;
            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
  return (
    <>
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>

    </div>
    </>
  )
}

export default login
