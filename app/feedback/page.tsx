"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FeedbackPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const submitFeedback = async () => {
try {
setLoading(true);
setStatus("");

  const response = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    setStatus("✅ Feedback sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  } else {
    setStatus("❌ Failed to send feedback.");
  }
} catch (error) {
  console.error(error);
  setStatus("❌ Failed to send feedback.");
} finally {
  setLoading(false);
}

};

return (
<main
style={{
minHeight: "100vh",
background: "#0f172a",
color: "white",
padding: "40px 20px",
}}
>
<div
style={{
maxWidth: "800px",
margin: "0 auto",
}}
>



    <h1
      style={{
        fontSize: "3rem",
        marginBottom: "10px",
      }}
    >
      📝 Feedback
    </h1>

    <p
      style={{
        color: "#94a3b8",
        marginBottom: "30px",
      }}
    >
      Help improve UPSC AI Assistant.
    </p>

    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={inputStyle}
    />

    <input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={inputStyle}
    />

    <textarea
      rows={8}
      placeholder="Share your feedback..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      style={{
        ...inputStyle,
        resize: "vertical",
      }}
    />

    <button
      onClick={submitFeedback}
      disabled={loading}
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "14px 24px",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {loading
        ? "Sending..."
        : "🚀 Submit Feedback"}
    </button>

    {status && (
      <p
        style={{
          marginTop: "20px",
        }}
      >
        {status}
      </p>
    )}
  </div>
</main>

);
}

const inputStyle = {
width: "100%",
padding: "14px",
marginBottom: "20px",
background: "#1e293b",
color: "white",
border: "1px solid #334155",
borderRadius: "12px",
};