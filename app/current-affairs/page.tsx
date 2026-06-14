"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CurrentAffairsPage() {
const [topic, setTopic] = useState("");
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);

const generateLinkage = async () => {
try {
setLoading(true);

  const response = await fetch("/api/current-affairs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
    }),
  });

  const data = await response.json();

  setResult(data.result);
} catch (error) {
  console.error(error);
  setResult("Failed to generate linkage.");
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
maxWidth: "1100px",
margin: "0 auto",
}}
>



    <h1
      style={{
        fontSize: "3rem",
        marginBottom: "10px",
      }}
    >
      📰 Current Affairs Linkage
    </h1>

    <p
      style={{
        color: "#94a3b8",
        marginBottom: "40px",
      }}
    >
      Connect current affairs with the static UPSC syllabus,
      GS papers, prelims themes and mains dimensions.
    </p>

    <input
      type="text"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder="Example: Semiconductor Mission"
      style={{
        width: "100%",
        padding: "16px",
        background: "#1e293b",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    />

    <button
      onClick={generateLinkage}
      disabled={loading}
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "16px 28px",
        borderRadius: "12px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {loading
        ? "Generating..."
        : "🚀 Generate Linkage"}
    </button>

    {result && (
      <div
        style={{
          marginTop: "40px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <h2>📖 UPSC Linkage Analysis</h2>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          {result}
        </pre>
      </div>
    )}
  </div>
</main>

);
}