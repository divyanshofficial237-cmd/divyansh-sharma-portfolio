import { NextResponse } from "next/server";
import { Resend } from "resend";
import { socials } from "@/content/socials";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Graceful fallback for local development or template usage
      console.log("=== DEV MODE CONTACT FORM SUBMISSION ===");
      console.log(`Date: ${new Date().toISOString()}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log("========================================");
      
      return NextResponse.json({
        success: true,
        message: "Message received successfully (Dev fallback logged to console).",
      });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: socials.email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Contact Form API Exception:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
