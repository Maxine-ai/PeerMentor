// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import ChatUI from "./ChatUI";
import EditProfile from "./EditProfile";

function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <Routes>
      {/* Public route for landing/home page */}
      <Route path="/" element={<Homepage />} />

      {/* Routes with sidebar layout */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/dashboard-overview" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
