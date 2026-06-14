
"use client";
import Link from "next/link";
import { useState } from "react";

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
    <main style={{ padding: "30px", maxWidth: "900px" }}>
      <h1>Current Affairs → Static Linkage</h1>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter Current Affairs Topic"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          border: "1px solid white",
        }}
      />

      <br />
      <br />
        <div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
  }}
>
  <Link href="/">🏠 Dashboard</Link>
  <Link href="/plan">📅 Planner</Link>
  <Link href="/current-affairs">📰 Current Affairs</Link>
  <Link href="/answer-writing">✍ Evaluator</Link>
</div>
      <button onClick={generateLinkage}>
        {loading ? "Generating..." : "Generate Linkage"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid white",
          }}
        >
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {result}
          </pre>
        </div>
      )}
    </main>
  );
}