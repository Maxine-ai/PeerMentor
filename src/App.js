// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleSelect from "./RoleSelect";
import LoginSignup from "./LoginSignup";
import DashboardMentor from "./DashboardMentor";
import Layout from "./Layout";
import Home from "./Homepage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Chat from "./ChatUI";
import EditProfile from "./EditProfile"; // If you have a separate component

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page for role selection */}
        <Route path="/" element={<RoleSelect />} />

        {/* ✅ Added correct /signup route */}
        <Route path="/signup" element={<LoginSignup />} />

        {/* Optional: keep /login if needed */}
        <Route path="/login" element={<LoginSignup />} />

        {/* Protected routes wrapped inside Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/mentor-dashboard" element={<DashboardMentor />} />
          <Route path="/dashboard-overview" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
