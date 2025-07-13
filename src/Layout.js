import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { auth } from "./firebase";


const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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
      {/* Top bar */}
      <header className="layout-header">
        <div className="left-header">
          <button className="menu-icon" onClick={() => setSidebarOpen((prev) => !prev)}>
            ☰
          </button>
          <div className="logo-mini" style={{ flex: 1, textAlign: "center" }}>PeerMentor</div>
        </div>
        <button
          className="logout-btn"
          onClick={async () => {
            await auth.signOut();
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          Logout 🔓
        </button>
      </header>

      {isSidebarOpen && (
        <aside className="sidebar" ref={sidebarRef}>
          <div className="logo-mini">MENU</div>
          <div className="nav-card-wrapper">
            <div className="nav-card" onClick={() => navigate("/home")}>
              🏠 <span className="nav-label">Home</span>
            </div>
            <div className="nav-card" onClick={() => navigate("/dashboard-overview")}>
              📋 <span className="nav-label">Dashboard</span>
            </div>
            <div className="nav-card" onClick={() => navigate("/profile")}>
              👤 <span className="nav-label">Profile</span>
            </div>
            <div className="nav-card" onClick={() => navigate("/chat")}>
              💬 <span className="nav-label">Messages</span>
            </div>
            <div className="nav-card" onClick={() => navigate("/settings")}>
              ⚙️ <span className="nav-label">Settings</span>
            </div>
          </div>
        </aside>
      )}
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;




