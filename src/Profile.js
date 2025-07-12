import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for routing
import "./Profile.css";
import imageholder from "./imageholder.png";

const Profile = () => {
  const navigate = useNavigate(); // ✅ Enables button navigation
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-main">
      <div className="header">
        <span className="username">@felix</span>
        <button
          className="edit-button"
          onClick={() => navigate("/edit-profile")} // ✅ Navigates to edit screen
        >
          Edit Profile
        </button>
      </div>

      <div className="profile-card">
        <label htmlFor="upload" className="avatar-upload">
          <img
            src={selectedImage || imageholder}
            alt="Profile"
            className="avatar"
          />
          <input
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>

        <div className="info">
          <h2>Felix Macintosh</h2>
          <h4>Creative Director @ Acne</h4>
          <p>
            I’ve been designing for 7 years with clients worldwide and recently
            moved to Berlin.
          </p>
          <ul className="contact">
            <li>📧 felix@acne.com</li>
            <li>🐦 @felix</li>
            <li>📞 303-909-1900</li>
            <li>🌐 felixmacintosh.com</li>
          </ul>
        </div>
      </div>

      <section className="skills">
        <h3>Skills & Interests</h3>
        <div className="tags">
          <span>Design</span>
          <span>UI/UX</span>
          <span>Yoga</span>
          <span>Directing Creativity</span>
          <span>Microsoft Word</span>
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p>
          <strong>School of the Hardknocks</strong>
          <br /> Master’s Degree, Fine Art (MFA)
          <br /> 1999 – ∞
        </p>
      </section>

      <section className="coffee-invite">
        <p>
          Looks like you and Felix have something in common. Set up a coffee?
        </p>
        <div className="cta-buttons">
          <button>Yes</button>
          <button>No</button>
          <button>Maybe</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
