import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import ChatUI from "./ChatUI";
import EditProfile from "./EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Routes with sidebar layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/dashboard-overview" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatUI />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


