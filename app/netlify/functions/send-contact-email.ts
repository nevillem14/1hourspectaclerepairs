import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event) => {
  console.log("HTTP METHOD:", event.httpMethod);

  // Always return OK for non-POST (no 405 anymore)
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, method: event.httpMethod }),
    };
  }

  try {
    const { name, company, email, phone, message } = JSON.parse(event.body || "{}");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"WSDXI Website" <wsdxi43@gmail.com>`,
      to: "hello@wsdxi.co.za",
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Message:
${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Email failed" };
  }
};
