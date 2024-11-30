import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, purpose, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: false,
      tls: {
        ciphers: "SSLv3",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Purpose: ${purpose}
        Message: ${message}
      `,
      html: `
        <h1>New contact form submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
