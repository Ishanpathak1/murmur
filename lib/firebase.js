// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYnrSbXirarmZQDR51VONH664Fm6uAvd8",
    authDomain: "murmur-897f9.firebaseapp.com",
    projectId: "murmur-897f9",
    storageBucket: "murmur-897f9.firebasestorage.app",
    messagingSenderId: "791451483399",
    appId: "1:791451483399:web:36ba7344bb302df7f259a2",
    measurementId: "G-MCFEEBXWVE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
