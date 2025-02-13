// app/sign-up/page.js
'use client'
import React from "react";
import { useRef } from 'react'
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth
 } from '@/app/firebase/config';
import {
    redirect
} from "next/dist/server/api-utils";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signup = () => {

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

  

    const loginWithGoogle = () =>{
        const provider = new GoogleAuthProvider();  

        const auth = getAuth();

        signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.href =
        'http://localhost:3000';
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        
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
        console.log("err",error);
        
      });

    }
console.log(auth.currentUser)

    
    const signup = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                alert(`Successfully signup 
                redirecting to Log in page`);
                window.location.href = './log-in/';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    }
    return (

        <div>
            <center>
                <h1>Sign Up screen</h1><br /><br />
                <form onSubmit={signup}>
                    <input type="email"
                        placeholder="Enter your email"
                        ref={emailRef}
                        style={{ color: 'green' }} />
                    <br /><br></br>
                    <input type="password"
                        placeholder="Enter your password"
                        ref={passwordRef}
                        style={{ color: 'green' }} /><br />
                    <br />
                    <button type="submit"
                        className="w-200 p-3 bg-indigo-600 
                     rounded text-white hover:bg-indigo-500">
                        Sign Up
                    </button>
                    <button type="button" onClick={()=>loginWithGoogle()}
                        className="w-200 p-3 bg-indigo-600 
                     rounded text-white hover:bg-indigo-500">
                        Google log in
                    </button>
                </form>
            </center>
        </div>
    )
}

export default signup
