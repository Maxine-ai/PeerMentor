import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Collapse when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="layout">
      {/* Top bar with menu icon */}
      <header className="layout-header">
        <button className="menu-icon" onClick={() => setSidebarOpen((prev) => !prev)}>
          ☰
        </button>
        <div className="logo-mini">MAKE</div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="sidebar" ref={sidebarRef}>
          <div className="logo">MAKE</div>
          <ul className="nav-icons">
            <li onClick={() => navigate("/home")}>🏠 <span className="nav-label">Home</span></li>
            <li onClick={() => navigate("/dashboard-overview")}>📋 <span className="nav-label">Dashboard</span></li>
            <li onClick={() => navigate("/profile")}>👤 <span className="nav-label">Profile</span></li>
            <li onClick={() => navigate("/chat")}>💬 <span className="nav-label">Messages</span></li>
            <li onClick={() => navigate("/settings")}>⚙️ <span className="nav-label">Settings</span></li>
          </ul>
        </aside>
      )}

      {/* Main content */}
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

