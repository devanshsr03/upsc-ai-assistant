import Link from "next/link";

export default function Dashboard() {
  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>🚀 UPSC AI Assistant</h1>

      <p>
        AI-powered tools for UPSC CSE Preparation
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link href="/plan">
          <div
            style={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <h2>📅 Revision Planner</h2>
            <p>Create AI-powered revision schedules.</p>
          </div>
        </Link>

        <Link href="/current-affairs">
          <div
            style={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <h2>📰 Current Affairs Linkage</h2>
            <p>Connect current affairs with static syllabus.</p>
          </div>
        </Link>

        <Link href="/answer-writing">
          <div
            style={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <h2>✍ Answer Writing Evaluator</h2>
            <p>Get UPSC-style answer feedback instantly.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}