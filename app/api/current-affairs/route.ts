import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { topic } = await request.json();

    const prompt = `
You are a UPSC mentor.

For the current affairs topic:

${topic}

Generate:

1. Relevant GS Papers
2. Static Subjects Linked
3. Prelims Focus Areas
4. Mains Focus Areas
5. Government Schemes
6. Possible UPSC Questions

Format clearly with headings.
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
      completion.choices[0]?.message?.content ??
      "No result generated.";

    return Response.json({ result });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to generate linkage",
      },
      { status: 500 }
    );
  }
}