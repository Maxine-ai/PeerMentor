import React from "react";
import "./Dashboard.css";
import userAvatar from "./imageholder.png";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Main Dashboard */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <header className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <span>Your mentorship journey continues today!</span>
        </header>

        {/* Stats */}
        <section className="metrics-section">
          <div className="metric-card">
            <h3>Matches This Week</h3>
            <p>6 new mentees</p>
          </div>
          <div className="metric-card">
            <h3>Sessions Completed</h3>
            <p>12 total</p>
          </div>
          <div className="metric-card">
            <h3>Confidence Score</h3>
            <p>78%</p>
          </div>
        </section>

        {/* Recent Topics */}
        <section className="activity-section">
          <h2>Recent Mentorship Topics</h2>
          <ul>
            <li>🧠 Confidence Building</li>
            <li>💼 Resume Polish</li>
            <li>🔍 Career Exploration</li>
            <li>🛠️ Technical Debugging</li>
          </ul>
        </section>

        {/* Mentorship Progress Chart */}
        <section className="chart-section">
          <h2>Mentorship Progress</h2>
          <div className="chart-widget">
            <div className="chart-bar" style={{ width: "78%" }}>Confidence</div>
            <div className="chart-bar secondary" style={{ width: "52%" }}>Goal Completion</div>
            <div className="chart-bar highlight" style={{ width: "92%" }}>Engagement Rate</div>
          </div>
        </section>

        {/* Calendar Header */}
        <section className="calendar-header">
          <h2>Mentorship Calendar – July 2025</h2>
          <button className="schedule-btn">+ Schedule Session</button>
        </section>

        {/* Highlights */}
        <section className="highlights">
          <div className="highlight-card">
            <h3>Most Engaged Month</h3>
            <p>34 sessions • July 2025</p>
          </div>
          <div className="highlight-card">
            <h3>Active Goal</h3>
            <p>Career Readiness Pathway</p>
          </div>
        </section>

        {/* Today’s Schedule */}
        <section className="schedule-section">
          <h2>Today’s Schedule</h2>
          <ul className="schedule-list">
            <li><strong>10:00 AM</strong> — Resume Audit w/ @olivia</li>
            <li><strong>01:00 PM</strong> — Confidence Boost w/ @aaron</li>
            <li><strong>03:15 PM</strong> — Circle: Storytelling for Design</li>
          </ul>
        </section>

        {/* Reminders Panel */}
        <section className="reminder-panel">
          <h2>Reminders</h2>
          <ul>
            <li>🕒 Upcoming: Career Planning with @felix at 6:00 PM</li>
            <li>📨 Unread message from @olivia</li>
            <li>📁 Files shared for session at 3:15 PM</li>
            <li>⏰ Session Feedback pending</li>
          </ul>
        </section>
      </main>

      {/* Profile Sidebar */}
      <aside className="dashboard-profile">
        <img src={userAvatar} alt="User Avatar" className="avatar" />
        <h2>Felix Macintosh</h2>
        <p>Creative Director @ Acne</p>
        <button className="profile-btn">View Profile</button>
        <button className="profile-btn accent">Create Goal</button>
      </aside>
    </div>
  );
};

export default Dashboard;

