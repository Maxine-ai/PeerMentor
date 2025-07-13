// src/LoginSignup.js
import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem("userRole");
    return savedRole === "mentor" || savedRole === "mentee" ? savedRole : "mentee";
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userRole", userRole);
        navigate(userRole === "mentor" ? "/mentor-dashboard" : "/mentee-dashboard");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("userRole", userRole);
      navigate(userRole === "mentor" ? "/mentor-dashboard" : "/mentee-dashboard");
    } catch (error) {
      alert("Google sign-in failed");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("userRole", userRole);
      navigate(userRole === "mentor" ? "/mentor-dashboard" : "/mentee-dashboard");
    } catch (error) {
      alert("Facebook sign-in failed");
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

        {!isLogin && (
          <div className="role-toggle">
            <label>
              <input
                type="radio"
                value="mentor"
                checked={userRole === "mentor"}
                onChange={() => setUserRole("mentor")}
              />
              Join as Mentor
            </label>
            <label>
              <input
                type="radio"
                value="mentee"
                checked={userRole === "mentee"}
                onChange={() => setUserRole("mentee")}
              />
              Join as Mentee
            </label>
          </div>
        )}

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
          <button onClick={handleGoogleLogin} className="social-btn google">
            Google
          </button>
          <button onClick={handleFacebookLogin} className="social-btn facebook">
            Facebook
          </button>
        </div>

        <p className="switch-auth">
          {isLogin ? "New User?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here." : "Login here."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;









