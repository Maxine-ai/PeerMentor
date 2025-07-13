import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import userAvatar from "./imageholder.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const DashboardMentor = () => {
  const [value, setValue] = useState(new Date());
  const [showSessionCard, setShowSessionCard] = useState(false);
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [setReminder, toggleReminder] = useState(false);
  const [scheduled, setScheduled] = useState([]);

  const formattedDate = value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const todayISO = new Date().toISOString().slice(0, 10);
  const selectedISO = value.toISOString().slice(0, 10);

  useEffect(() => {
    setSessionTime("10:00");
  }, [value]);

  return (
    <div className="dashboard-wrapper">
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Hello Mentor 👋</h1>
          <span>Time to inspire. Your mentees are counting on you!</span>
        </header>

        <section className="metrics-section">
          <div className="metric-card"><h3>Mentees Linked</h3><p>18 Active</p></div>
          <div className="metric-card"><h3>Sessions This Month</h3><p>22 Completed</p></div>
          <div className="metric-card"><h3>Avg Feedback Score</h3><p>4.8 / 5</p></div>
        </section>

        <section className="activity-section">
          <h2>Recent Support Topics</h2>
          <ul>
            <li>📚 Study Strategies</li>
            <li>💼 Interview Prep</li>
            <li>🧠 Growth Mindset</li>
            <li>🎯 Career Coaching</li>
          </ul>
        </section>

        <section className="chart-section">
          <h2>Impact Overview</h2>
          <div className="chart-widget">
            <div className="chart-bar" style={{ width: "85%" }}>Mentee Progress</div>
            <div className="chart-bar secondary" style={{ width: "64%" }}>Goal Alignment</div>
            <div className="chart-bar highlight" style={{ width: "90%" }}>Engagement Quality</div>
          </div>
        </section>

        <section className="highlights">
          <div className="highlight-card"><h3>Top Mentee</h3><p>@aaron — 12 sessions</p></div>
          <div className="highlight-card"><h3>Active Goal</h3><p>UX Portfolio Sprint</p></div>
        </section>

        <section className="schedule-section">
          <h2>Today’s Sessions</h2>
          <ul className="schedule-list">
            <li><strong>10:00 AM</strong> — Mock Interview w/ @felix</li>
            <li><strong>02:00 PM</strong> — Design Critique w/ @olivia</li>
            <li><strong>04:30 PM</strong> — Career Chat w/ @aaron</li>
            {scheduled
              .filter((s) => s.date === todayISO)
              .map((s, idx) => (
                <li key={idx}>
                  <strong>{s.time}</strong> — {s.title}
                </li>
              ))}
          </ul>
        </section>

        <section className="reminder-panel">
          <h2>Mentor To-Dos</h2>
          <ul>
            <li>✅ Feedback due for session w/ @felix</li>
            <li>📝 Review resume from @olivia</li>
            <li>📨 Unread message from @aaron</li>
            <li>📌 Prep questions for goal review</li>
          </ul>
        </section>
      </main>

      <aside className="dashboard-profile">
        <img src={userAvatar} alt="User Avatar" className="avatar" />
        <h2>Mentor: Felix Macintosh</h2>
        <p>UI/UX Coach • PeerMentor Leader</p>
        <button className="profile-btn">View Mentor Profile</button>
        <button className="profile-btn accent">Start Goal Review</button>

        <section className="calendar-header">
          <h2>Your Calendar – July 2025</h2>
          <button className="schedule-btn" onClick={() => setShowSessionCard(true)}>+ Add Session</button>
        </section>

        <Calendar
          onChange={setValue}
          value={value}
          locale="en-US"
        />

        {showSessionCard && (
          <div className="schedule-session-card">
            <h3>📅 Add New Mentorship Session</h3>
            <p className="selected-date">📆 Selected Date: {formattedDate}</p>

            <input
              type="text"
              placeholder="Session Title"
              value={sessionTitle}
              onChange={(e) => setSessionTitle(e.target.value)}
            />

            <label>
              Time:
              <input
                type="time"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
              />
            </label>

            <label className="reminder-toggle">
              <input
                type="checkbox"
                checked={setReminder}
                onChange={() => toggleReminder(!setReminder)}
              />
              Set Reminder Notification
            </label>

            <div className="session-card-actions">
              <button
                className="save-btn"
                onClick={() => {
                  const newEntry = {
                    time: sessionTime,
                    title: sessionTitle,
                    date: selectedISO
                  };
                  setScheduled((prev) => [...prev, newEntry]);
                  setShowSessionCard(false);
                  setSessionTitle("");
                  toggleReminder(false);
                }}
              >
                Save
              </button>
              <button className="cancel-btn" onClick={() => setShowSessionCard(false)}>Cancel</button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default DashboardMentor;
