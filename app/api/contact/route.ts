import * as brevo from "@getbrevo/brevo";
import { NextResponse } from "next/server";

const BOT_DETECTION_TIME_THRESHOLD = 10000; // 10 seconds

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!
);

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, company, service, message, honeypot, formLoadTime } =
      body;

    // Honeypot check - if filled, it's a bot
    if (honeypot && honeypot.trim() !== "") {
      console.log("Bot detected: honeypot filled");
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Time-based check - form must be open for at least 3 seconds
    // Bots typically submit instantly
    const submissionTime = Date.now();
    const timeElapsed = submissionTime - formLoadTime;
    if (timeElapsed < BOT_DETECTION_TIME_THRESHOLD) {
      console.log("Bot detected: submission too fast", { timeElapsed });
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare email
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: process.env.BREVO_FROM_NAME!,
      email: process.env.BREVO_FROM_EMAIL!,
    };
    sendSmtpEmail.to = [{ email: process.env.BREVO_TO_EMAIL! }];
    sendSmtpEmail.replyTo = { email, name };
    sendSmtpEmail.subject = `Contact Form: ${service || "General Inquiry"} - ${name}`;
    sendSmtpEmail.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${service ? `<p><strong>Interest:</strong> ${service}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    // Send email via Brevo
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Brevo API error:", error);

    // Brevo-specific error handling
    const errorMessage =
      error instanceof Error && 'response' in error
        ? (error as { response?: { body?: { message?: string }; statusCode?: number } }).response?.body?.message || error.message
        : error instanceof Error
        ? error.message
        : "Failed to send email";

    return NextResponse.json(
      { error: errorMessage },
      {
        status: error instanceof Error && 'response' in error
          ? (error as { response?: { statusCode?: number } }).response?.statusCode || 500
          : 500
      }
    );
  }
}
