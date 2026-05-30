// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXzGrWP7AD9k33F4LAp7iUXdIWLMgEFVA",
  authDomain: "success-coaching-centre-8c542.firebaseapp.com",
  projectId: "success-coaching-centre-8c542",
  storageBucket: "success-coaching-centre-8c542.firebasestorage.app",
  messagingSenderId: "403078348048",
  appId: "1:403078348048:web:95122a91663c24e232f995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("Firebase initialized successfully!");

