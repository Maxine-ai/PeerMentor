// src/ProgressTracker.js
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore";

function ProgressTracker() {
  const [logs, setLogs] = useState([]);
  const [task, setTask] = useState("");
  const [feedback, setFeedback] = useState("");

  const fetchLogs = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(collection(db, "progress"), where("uid", "==", user.uid));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => doc.data());
    setLogs(data);
  };

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (!user || !task.trim()) return;

    const entry = {
      uid: user.uid,
      task,
      feedback,
      timestamp: Date.now()
    };

    await setDoc(doc(db, "progress", `${user.uid}-${Date.now()}`), entry);
    setTask("");
    setFeedback("");
    fetchLogs(); // refresh
  };

  useEffect(() => {
    fetchLogs();
  }, []); // eslint warning okay to ignore here

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">📘 Progress Tracker</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="What did you work on?"
            className="border p-2 w-full mb-2 rounded"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Any feedback or notes?"
            className="border p-2 w-full mb-2 rounded"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Log
          </button>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Your Logs</h3>
          <ul className="space-y-2">
            {logs.map((log, idx) => (
              <li key={idx} className="border p-3 rounded">
                <strong>Task:</strong> {log.task}
                <br />
                {log.feedback && (
                  <>
                    <strong>Feedback:</strong> {log.feedback}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;
