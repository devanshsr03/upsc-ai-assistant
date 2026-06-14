"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "40px",
        padding: "16px 20px",
        background: "#1e293b",
        borderRadius: "12px",
        border: "1px solid #334155",
        flexWrap: "wrap",
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        🏠 Dashboard
      </Link>

      <Link href="/plan" style={{ color: "white", textDecoration: "none" }}>
        📅 Planner
      </Link>

      <Link
        href="/current-affairs"
        style={{ color: "white", textDecoration: "none" }}
      >
        📰 Current Affairs
      </Link>

      <Link
        href="/answer-writing"
        style={{ color: "white", textDecoration: "none" }}
      >
        ✍ Evaluator
      </Link>

      <Link
        href="/syllabus"
        style={{ color: "white", textDecoration: "none" }}
      >
        📚 Syllabus
      </Link>

      <Link
        href="/feedback"
        style={{ color: "white", textDecoration: "none" }}
      >
        📝 Feedback
      </Link>
    </nav>
  );
}