"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AnswerWritingPage() {
const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);

const evaluateAnswer = async () => {
try {
setLoading(true);

  const response = await fetch("/api/answer-writing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      answer,
    }),
  });

  const data = await response.json();

  if (data.error) {
    setResult(data.error);
  } else {
    setResult(data.result);
  }
} catch (error) {
  console.error(error);
  setResult("Failed to evaluate answer.");
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
      ✍ UPSC Answer Writing Evaluator
    </h1>

    <p
      style={{
        color: "#94a3b8",
        marginBottom: "40px",
      }}
    >
      Get AI-powered UPSC-style evaluation, scoring,
      feedback and improvement suggestions.
    </p>

    <label
      style={{
        display: "block",
        marginBottom: "10px",
        fontWeight: "bold",
      }}
    >
      UPSC Question
    </label>

    <textarea
      rows={4}
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Paste UPSC Question"
      style={{
        width: "100%",
        padding: "16px",
        background: "#1e293b",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "12px",
        marginBottom: "25px",
      }}
    />

    <label
      style={{
        display: "block",
        marginBottom: "10px",
        fontWeight: "bold",
      }}
    >
      Your Answer
    </label>

    <textarea
      rows={12}
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Paste your answer here..."
      style={{
        width: "100%",
        padding: "16px",
        background: "#1e293b",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "12px",
        marginBottom: "25px",
      }}
    />

    <button
      onClick={evaluateAnswer}
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
        ? "Evaluating..."
        : "🚀 Evaluate Answer"}
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
        <h2>📊 Evaluation Report</h2>

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