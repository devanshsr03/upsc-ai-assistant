"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PlanPage() {
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
      📅 UPSC Revision Planner
    </h1>

    <p
      style={{
        color: "#94a3b8",
        marginBottom: "40px",
      }}
    >
      Generate personalized AI-powered revision schedules.
    </p>

    <h3>Select GS Subjects</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "15px",
        marginBottom: "30px",
      }}
    >
      {gsSubjects.map((subject) => (
        <label
          key={subject}
          style={{
            background: selectedSubjects.includes(subject)
              ? "#2563eb"
              : "#1e293b",
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid #334155",
            cursor: "pointer",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            checked={selectedSubjects.includes(subject)}
            onChange={() => toggleSubject(subject)}
          />
          {subject}
        </label>
      ))}
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label>Optional Subject</label>

      <input
        type="text"
        value={optional}
        onChange={(e) => setOptional(e.target.value)}
        placeholder="Sociology"
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "8px",
          background: "#1e293b",
          color: "white",
          border: "1px solid #334155",
          borderRadius: "10px",
        }}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label>Hours Available Per Day</label>

      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="4"
        style={{
          width: "150px",
          padding: "14px",
          marginTop: "8px",
          background: "#1e293b",
          color: "white",
          border: "1px solid #334155",
          borderRadius: "10px",
        }}
      />
    </div>

    <button
      onClick={generatePlan}
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
        : "🚀 Generate AI Revision Plan"}
    </button>

    {revisionPlan && (
      <div
        style={{
          marginTop: "40px",
          background: "#1e293b",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <h2>📖 Your AI Revision Plan</h2>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          {revisionPlan}
        </pre>
      </div>
    )}
  </div>
</main>

);
}