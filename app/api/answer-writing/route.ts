import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { question, answer } = await request.json();

    const prompt = `
You are a UPSC Mains evaluator.

Question:
${question}

Candidate's Answer:
${answer}

Evaluate the answer on:

1. Score out of 10
2. Introduction
3. Content Quality
4. Structure
5. Use of Examples
6. Conclusion
7. Missing Points
8. Improvement Suggestions

Provide detailed UPSC-style feedback.

Format:

Score: X/10

Strengths:
- ...

Weaknesses:
- ...

Missing Points:
- ...

Improvement Suggestions:
- ...

Model Answer Structure:
- Introduction
- Body
- Conclusion
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    });

    const result =
      completion.choices[0]?.message?.content ||
      "No evaluation generated.";

    return Response.json({ result });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to evaluate answer",
      },
      { status: 500 }
    );
  }
}