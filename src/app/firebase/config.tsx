// app/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import firebase from "firebase/compat/app";

const firebaseConfig = {
    // Make sure to paste your own SDK here
    //your own key
    apiKey: "AIzaSyDDkff52DOYb9CqChldbeTBcGLbCdO1i-c",
    authDomain: "login-cbc90.firebaseapp.com",
    projectId: "login-cbc90",
    storageBucket: "login-cbc90.firebasestorage.app",
    messagingSenderId: "838595018544",
    appId: "1:838595018544:web:a564a041830748272112f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default function () { (<>Dummy function</>) }
