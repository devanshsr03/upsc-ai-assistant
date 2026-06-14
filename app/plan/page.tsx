
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const gsSubjects = [
    "Polity",
    "Economy",
    "Environment",
    "Geography",
    "Modern History",
    "Ancient History",
    "Art & Culture",
    "Science & Technology",
    "International Relations",
    "Internal Security",
  ];

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [optional, setOptional] = useState("");
  const [hours, setHours] = useState("");
  const [revisionPlan, setRevisionPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(
        selectedSubjects.filter((s) => s !== subject)
      );
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const generatePlan = async () => {
    try {
      if (selectedSubjects.length === 0) {
        alert("Please select at least one GS subject.");
        return;
      }

      setLoading(true);
      setRevisionPlan("Generating AI revision plan...");

      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subjects: selectedSubjects,
          optional,
          hours,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setRevisionPlan(data.error);
      } else {
        setRevisionPlan(data.plan);
      }
    } catch (error) {
      console.error(error);
      setRevisionPlan("Failed to generate revision plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
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
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        UPSC Revision Planner
      </h1>

      <h3>Select GS Subjects</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        {gsSubjects.map((subject) => (
          <label
            key={subject}
            style={{
              border: "1px solid #444",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={selectedSubjects.includes(subject)}
              onChange={() => toggleSubject(subject)}
            />
            {" "}
            {subject}
          </label>
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Optional Subject</label>
        <br />

        <input
          type="text"
          value={optional}
          onChange={(e) => setOptional(e.target.value)}
          placeholder="Sociology"
          style={{
            border: "1px solid white",
            padding: "10px",
            marginTop: "5px",
            width: "100%",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Hours Available Per Day</label>
        <br />

        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="4"
          style={{
            border: "1px solid white",
            padding: "10px",
            marginTop: "5px",
            width: "120px",
          }}
        />
      </div>

      <button
        onClick={generatePlan}
        disabled={loading}
        style={{
          padding: "12px 20px",
          border: "1px solid white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      {revisionPlan && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Your AI Revision Plan</h2>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
            }}
          >
            {revisionPlan}
          </pre>
        </div>
      )}
    </main>
  );
}