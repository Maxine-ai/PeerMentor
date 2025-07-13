// src/RoleSelect.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelect.css";

function RoleSelect() {
  const navigate = useNavigate();

  const handleRoleChoice = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/signup");
  };

  return (
    <div className="role-select-wrapper">
      <div className="role-select-card">
        <h1 className="role-logo">PeerMentor</h1> {/* Logo in cursive */}
        <p className="tagline">Empowering learners through mentorship</p>
        <p className="choose-intro">Choose how you want to join the platform</p>
        <div className="role-buttons">
          <button onClick={() => handleRoleChoice("mentor")} className="role-btn mentor">
            🙋‍♂️ Join as Mentor
          </button>
          <button onClick={() => handleRoleChoice("mentee")} className="role-btn mentee">
            🙋‍♀️ Join as Mentee
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;



