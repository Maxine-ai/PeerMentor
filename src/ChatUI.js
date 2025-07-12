import React, { useState } from "react";
import "./ChatUI.css";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { sender: "mentor", text: "Hey there! Ready to dive in?" },
    { sender: "mentee", text: "Yes! Let's get started 😊" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "mentee", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <aside className="chat-sidebar">
        <h2>Conversations</h2>
        <ul>
          <li className="active">@mentor01</li>
          <li>@mentor02</li>
          <li>@mentor03</li>
        </ul>
      </aside>

      <main className="chat-window">
        <div className="chat-header">@mentor01</div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-bubble ${msg.sender === "mentee" ? "right" : "left"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </main>
    </div>
  );
};

export default ChatUI;



