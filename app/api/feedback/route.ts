import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
try {
const { name, email, message } = await req.json();

const data = await resend.emails.send({
  from: "UPSC AI Assistant <onboarding@resend.dev>",
  to: ["devanshsr030400@gmail.com"],
  subject: "New Feedback - UPSC AI Assistant",
  html: `
    <h2>New Feedback Received</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <hr />

    <p>${message}</p>
  `,
});

return NextResponse.json({
  success: true,
  data,
});

} catch (error) {
console.error(error);

return NextResponse.json(
  {
    error: "Failed to send feedback",
  },
  {
    status: 500,
  }
);

}
}