// src/LoginSignup.js - Styled with modern gradient UI and social login options
import React, { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created!");
      }
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Logged in with Google ✅");
      navigate("/");
    } catch (error) {
      alert("Google sign-in failed");
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Logged in with Facebook ✅");
      navigate("/");
    } catch (error) {
      alert("Facebook sign-in failed");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">PeerMentor</div>
        <h2>Welcome to the Future of Learning!</h2>
        <p>Join our peer-to-peer community and start collaborating today.</p>
      </div>
      <div className="login-right">
        <div className="avatar-placeholder"></div>
        <p className="login-msg">
          {isLogin ? "Login below to get started." : "Create your account to join us."}
        </p>
        <form className="login-form" onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="E-mail Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="primary-button">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
        <div className="social-login">
          <button onClick={handleGoogleLogin} className="social-btn google">Google</button>
          <button onClick={handleFacebookLogin} className="social-btn facebook">Facebook</button>
        </div>
        <p className="switch-auth">
          {isLogin ? "New User?" : "Already have an account?"} <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register here." : "Login here."}</span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;





