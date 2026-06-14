import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { subjects, optional, hours } = await request.json();

    const prompt = `
You are an expert UPSC mentor and revision planner.

Create a detailed 7-day UPSC revision plan.

Selected GS Subjects:
${subjects.join(", ")}

Optional Subject:
${optional || "None"}

Hours Available Per Day:
${hours}

IMPORTANT RULES:

1. Use ONLY the GS subjects selected by the user.
2. Do NOT add any GS subject that is not selected.
3. If an optional subject is provided, include it daily.
4. Divide study hours logically between GS and Optional.
5. Mention specific topics under each subject.
6. Include answer writing practice every day.
7. Include current affairs revision every day.
8. Generate a Day 1 to Day 7 schedule.
9. Use clean formatting.

Example:

Day 1
- Polity: Fundamental Rights
- Sociology: Thinkers
- Current Affairs: Governance
- Answer Writing: GS-2

Day 2
...
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.4,
    });

    const plan =
      completion.choices[0]?.message?.content ||
      "Unable to generate revision plan.";

    return Response.json({
      plan,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    return Response.json(
      {
        error: "Failed to generate revision plan",
      },
      { status: 500 }
    );
  }
}