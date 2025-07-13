import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import userAvatar from "./imageholder.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { matchMentorsForMentee, createPairing } from "./matchMentors";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [mentorMatches, setMentorMatches] = useState([]);
  const [value, setValue] = useState(new Date());
  const [showSessionCard, setShowSessionCard] = useState(false);
  const [sessionTitle, setSessionTitle] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [setReminder, toggleReminder] = useState(false);
  const [savedSessions, setSavedSessions] = useState([]);

  const formattedDate = value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const todayISO = new Date().toISOString().slice(0, 10);
  const selectedDateISO = value.toISOString().slice(0, 10);

  const requestMentor = (mentorId) => {
    console.log(`Requesting mentorship with mentor ID: ${mentorId}`);
    // Additional logic to request mentorship
  };

  useEffect(() => {
    async function fetchMatches() {
      if (!currentUser?.uid) return;
      const menteeSnap = await getDoc(doc(db, "mentees", currentUser.uid));
      const profile = menteeSnap.data();
      console.log("Running mentor match logic...");
      const matches = await matchMentorsForMentee(profile);
      console.log("Matched mentors:", matches);
      setMentorMatches(matches);
      setSessionTime("10:00");
    }

    fetchMatches();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <span>Your mentorship journey continues today!</span>
        </header>

        <div className="matches-panel"> 
          <h2>Your Top Mentor Matches</h2>
          {mentorMatches.length === 0 ? (
            <p>No mentors matched yet. Try updating your preferences.</p>
          ) : (
            mentorMatches.map((mentor) => (
              <div className="mentor-card" key={mentor.id}>
                <h3>{mentor.name}</h3>
                <p><strong>Expertise:</strong> {mentor.expertise.join(", ")}</p>
                <p><strong>Bio:</strong> {mentor.bio}</p>
                <button onClick={() => requestMentor(mentor.id)}>Request Mentorship</button>
              </div>
            ))
          )}
        </div>

        <section className="metrics-section">
          <div className="metric-card"><h3>Matches This Week</h3><p>6 new mentees</p></div>
          <div className="metric-card"><h3>Sessions Completed</h3><p>12 total</p></div>
          <div className="metric-card"><h3>Confidence Score</h3><p>78%</p></div>
        </section>

        <section className="activity-section">
          <h2>Recent Mentorship Topics</h2>
          <ul>
            <li>🧠 Confidence Building</li>
            <li>💼 Resume Polish</li>
            <li>🔍 Career Exploration</li>
            <li>🚰 Technical Debugging</li>
          </ul>
        </section>

        <section className="chart-section">
          <h2>Mentorship Progress</h2>
          <div className="chart-widget">
            <div className="chart-bar" style={{ width: "78%" }}>Confidence</div>
            <div className="chart-bar secondary" style={{ width: "52%" }}>Goal Completion</div>
            <div className="chart-bar highlight" style={{ width: "92%" }}>Engagement Rate</div>
          </div>
        </section>

        <section className="highlights">
          <div className="highlight-card"><h3>Most Engaged Month</h3><p>34 sessions • July 2025</p></div>
          <div className="highlight-card"><h3>Active Goal</h3><p>Career Readiness Pathway</p></div>
        </section>

        <section className="schedule-section">
          <h2>Today’s Schedule</h2>
          <ul className="schedule-list">
            <li><strong>10:00 AM</strong> — Resume Audit w/ @olivia</li>
            <li><strong>01:00 PM</strong> — Confidence Boost w/ @aaron</li>
            <li><strong>03:15 PM</strong> — Circle: Storytelling for Design</li>
            {savedSessions.filter((entry) => entry.date === todayISO).map((entry, idx) => (
              <li key={idx}><strong>{entry.time}</strong> — {entry.title}</li>
            ))}
          </ul>
        </section>

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

      <aside className="dashboard-profile">
        <img src={userAvatar} alt="User Avatar" className="avatar" />
        <h2>Felix Macintosh</h2>
        <p>Creative Director @ Acne</p>
        <button className="profile-btn">View Profile</button>
        <button className="profile-btn accent">Create Goal</button>

        <section className="calendar-header">
          <h2>Mentorship Calendar – July 2025</h2>
          <button className="schedule-btn" onClick={() => setShowSessionCard(true)}>+ Schedule Session</button>
        </section>

        <Calendar onChange={setValue} value={value} locale="en-US" />

        {showSessionCard && (
          <div className="schedule-session-card">
            <h3>📅 Schedule New Session</h3>
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
                    date: selectedDateISO
                  };
                  setSavedSessions((prev) => [...prev, newEntry]);
                  setShowSessionCard(false);
                  setSessionTitle("");
                  toggleReminder(false);
                }}
              >
                Save
              </button>
              <button className="cancel-btn" onClick={() => setShowSessionCard(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Dashboard;

