import Link from "next/link";
import {
  Calendar,
  Newspaper,
  PenSquare,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const cards = [
    {
      title: "Revision Planner",
      description:
        "Generate personalized UPSC revision schedules based on your subjects and available time.",
      href: "/plan",
      icon: <Calendar size={30} />,
    },
    {
      title: "Current Affairs Linkage",
      description:
        "Connect current affairs topics with static UPSC syllabus, GS papers and PYQ themes.",
      href: "/current-affairs",
      icon: <Newspaper size={30} />,
    },
    {
      title: "Answer Writing Evaluator",
      description:
        "Get AI-powered UPSC style feedback, scores and improvement suggestions.",
      href: "/answer-writing",
      icon: <PenSquare size={30} />,
    },
  ];

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
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          🚀 UPSC AI Assistant
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.2rem",
            maxWidth: "800px",
            lineHeight: "1.7",
          }}
        >
          Prepare smarter with AI-powered revision planning,
          current affairs linkage and answer writing evaluation.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "18px 28px",
              borderRadius: "14px",
            }}
          >
            <h2>10+</h2>
            <p style={{ color: "#94a3b8" }}>
              GS Subjects
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "18px 28px",
              borderRadius: "14px",
            }}
          >
            <h2>3</h2>
            <p style={{ color: "#94a3b8" }}>
              AI Tools
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "18px 28px",
              borderRadius: "14px",
            }}
          >
            <h2>Free</h2>
            <p style={{ color: "#94a3b8" }}>
              Beta Access
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "35px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/plan">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🚀 Start Revision Planning
            </button>
          </Link>

          <Link href="/current-affairs">
            <button
              style={{
                background: "#1e293b",
                color: "white",
                border: "1px solid #334155",
                padding: "14px 24px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              📰 Current Affairs
            </button>
          </Link>
        </div>

        {/* Tool Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#1e293b",
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid #334155",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                {card.icon}

                <h2
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  {card.title}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.7",
                  }}
                >
                  {card.description}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#38bdf8",
                  }}
                >
                  Open Tool
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "80px",
            borderTop: "1px solid #334155",
            paddingTop: "25px",
            color: "#94a3b8",
          }}
        >
          Built for UPSC 2026 Aspirants • AI Powered • Free Beta
        </footer>
      </div>
    </main>
  );
}