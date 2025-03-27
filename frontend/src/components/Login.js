// frontend/src/components/Login.js
import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
