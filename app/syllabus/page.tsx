"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import {
prelimsSyllabus,
mainsSyllabus,
} from "../data/syllabus";
import { optionalSubjects } from "../data/optionals";

export default function SyllabusPage() {
const optionalNames = Object.keys(optionalSubjects);

const [selectedOptional, setSelectedOptional] =
useState(optionalNames[0]);

const syllabus =
optionalSubjects[
selectedOptional as keyof typeof optionalSubjects
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



    <h1
      style={{
        fontSize: "3rem",
        marginBottom: "10px",
      }}
    >
      📚 UPSC Syllabus Explorer
    </h1>

    <p
      style={{
        color: "#94a3b8",
        marginBottom: "40px",
      }}
    >
      Complete UPSC Prelims, Mains and Optional
      Subject Syllabus.
    </p>

    {/* PRELIMS */}
    <h2
      style={{
        marginBottom: "25px",
      }}
    >
      🎯 UPSC Prelims
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px",
        marginBottom: "60px",
      }}
    >
      {Object.entries(prelimsSyllabus).map(
        ([subject, topics]) => (
          <div
            key={subject}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <h3>{subject}</h3>

            <ul
              style={{
                marginTop: "15px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>

    {/* MAINS */}
    <h2
      style={{
        marginBottom: "25px",
      }}
    >
      📝 UPSC Mains
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "20px",
        marginBottom: "60px",
      }}
    >
      {Object.entries(mainsSyllabus).map(
        ([paper, topics]) => (
          <div
            key={paper}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <h3>{paper}</h3>

            <ul
              style={{
                marginTop: "15px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>

    {/* OPTIONALS */}
    <h2
      style={{
        marginBottom: "20px",
      }}
    >
      🎓 Optional Subjects
    </h2>

    <select
      value={selectedOptional}
      onChange={(e) =>
        setSelectedOptional(e.target.value)
      }
      style={{
        padding: "14px",
        background: "#1e293b",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "12px",
        minWidth: "250px",
        marginBottom: "30px",
      }}
    >
      {optionalNames.map((subject) => (
        <option
          key={subject}
          value={subject}
        >
          {subject}
        </option>
      ))}
    </select>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
        gap: "20px",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <h3>📖 Paper I</h3>

        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          {syllabus.paper1.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <h3>📖 Paper II</h3>

        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          {syllabus.paper2.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</main>

);
}