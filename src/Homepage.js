import React from "react";
import "./Homepage.css";
import mentorAvatar from "./imageholder.png";

const mentors = [
  {
    name: "James Smith",
    role: "Media UX/UI",
    projects: 22,
    ongoing: 18,
    progress: 3,
    productivity: "60%",
  },
  {
    name: "Kevin Kim",
    role: "Senior Graphic",
    projects: 85,
    ongoing: 80,
    progress: 2,
    productivity: "80%",
  },
  {
    name: "Lisa Shulz",
    role: "Junior Graphic",
    projects: 7,
    ongoing: 5,
    progress: 1,
    productivity: "50%",
  },
  {
    name: "Jaspal Cortes",
    role: "Junior UX/UI",
    projects: 12,
    ongoing: 10,
    progress: 2,
    productivity: "70%",
  },
  {
    name: "Elliot Morrison",
    role: "Senior UX/UI",
    projects: 45,
    ongoing: 40,
    progress: 3,
    productivity: "75%",
  },
  {
    name: "Jace O'Quinn",
    role: "Media Graphic",
    projects: 20,
    ongoing: 15,
    progress: 5,
    productivity: "65%",
  },
];

const Homepage = () => {
  return (
    <div className="homepage-container">
        {/* Tagline Header */}
      <section className="homepage-tagline">
       <h2>Unlock your future with mentorship that matters 🚀</h2>
      </section>
      {/* Search + Filter Section */}
      <section className="search-section">
        <input type="text" placeholder="Search mentors..." className="search-bar" />
        <div className="filter-tabs">
          <button className="active">Top</button>
          <button>People</button>
          <button>Publications</button>
          <button>Posts</button>
          <button>Notes</button>
        </div>
        <h2 className="results-title">People</h2>
      </section>

      {/* Mentor Grid */}
      <section className="mentor-grid">
        {mentors.map((mentor, idx) => (
          <div className="mentor-card" key={idx}>
            <img src={mentorAvatar} alt={mentor.name} className="mentor-img" />
            <h3>{mentor.name}</h3>
            <span className="role">{mentor.role}</span>
            <div className="stats">
              <p><strong>Projects:</strong> {mentor.projects}</p>
              <p><strong>Ongoing:</strong> {mentor.ongoing}</p>
              <p><strong>Progress:</strong> {mentor.progress}</p>
            </div>
            <div className="productivity">
              <span>Productivity</span>
              <strong>{mentor.productivity}</strong>
            </div>
            <button className="connect-btn">Connect</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Homepage;
