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
      }}
    >
      <Link href="/" style={{ color: "white" }}>
        🏠 Dashboard
      </Link>

      <Link href="/plan" style={{ color: "white" }}>
        📅 Planner
      </Link>

      <Link href="/current-affairs" style={{ color: "white" }}>
        📰 Current Affairs
      </Link>

      <Link href="/answer-writing" style={{ color: "white" }}>
        ✍ Evaluator
      </Link>
    </nav>
  );
}