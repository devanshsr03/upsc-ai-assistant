
"use client";
import Link from "next/link";
import { useState } from "react";

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

      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult("Failed to evaluate answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "30px", maxWidth: "1000px" }}>
      <h1>UPSC Answer Writing Evaluator</h1>

      <br />

      <textarea
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Paste UPSC Question"
        style={{
          width: "100%",
          padding: "10px",
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

      <textarea
        rows={12}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Paste Your Answer"
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid white",
        }}
      />

      <br />
      <br />

      <button onClick={evaluateAnswer}>
        {loading ? "Evaluating..." : "Evaluate Answer"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid white",
            padding: "20px",
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