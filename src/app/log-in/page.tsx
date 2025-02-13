// app/log-in/page.js
'use client'
import React from "react";
import { useRef } from "react"
import { auth } from '@/app/firebase/config';
import {
    signInWithEmailAndPassword
} from "firebase/auth";
import { browserSessionPersistence } from "firebase/auth";

const login = () => {

    const logemailRef = useRef<any>(null);
    const logpasswordRef = useRef<any>(null);

    const login = (e) => {
        e.preventDefault();

        const email = logemailRef.current.value;
        const password = logpasswordRef.current.value;

        auth.setPersistence(browserSessionPersistence).then(()=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                alert(`Welcome ${user.email} 
    redirecting to GeeksForGeeks`)

                //router to next page
                window.location.href =
                    'http://localhost:3000';

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
        })

      
    }
    return (
        <div>
            <center>
                <h1>Log in screen</h1><br /><br />
                <form onSubmit={login}>
                    <input type="email"
                        placeholder="Enter your email"
                        ref={logemailRef}
                        style={{ color: 'green' }} /><br />
                    <br></br>
                    <input type="password"
                        placeholder="Enter your password"
                        ref={logpasswordRef}
                        style={{ color: 'green' }} /><br />
                    <br /><button type="submit"
                        className="w-200 p-3 bg-indigo-600 
        rounded text-white hover:bg-indigo-500">
                        Log In
                    </button>
                </form>
            </center>
        </div>
    )
}
export default login
