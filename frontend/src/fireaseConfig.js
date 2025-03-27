import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-PfAFSdpVtRKSKsswk8CXOTLQlYWv8C4",
    authDomain: "warrantyme-auth-44093.firebaseapp.com",
    projectId: "warrantyme-auth-44093",
    storageBucket: "warrantyme-auth-44093.firebasestorage.app",
    messagingSenderId: "552417860423",
    appId: "1:552417860423:web:f6480e11a33c76750c0a62",
    measurementId: "G-FDFXRP0QCJ"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
