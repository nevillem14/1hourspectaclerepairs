import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per IP per minute

// Simple in-memory rate limit (OK for low traffic sites)
/** @type {Map<string, number[]>} */
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];

  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  recent.push(now);
  rateLimitMap.set(ip, recent);

  return recent.length > RATE_LIMIT_MAX;
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const ip =
      event.headers["x-forwarded-for"] ||
      event.headers["client-ip"] ||
      "unknown";

    if (isRateLimited(ip)) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          error: "Too many requests. Please try again later.",
        }),
      };
    }

    const { name, company, email, phone, message, recaptchaToken } = JSON.parse(
      event.body || "{}"
    );

    if (!name || !email || !message || !recaptchaToken) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // 🔐 Verify reCAPTCHA v3
    const recaptchaSecret = process.env.SITE_RECAPTCHA_SECRET;
    if (!recaptchaSecret) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server misconfiguration" }),
      };
    }
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "reCAPTCHA failed" }),
      };
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // e.g. wsdxi43@gmail.com
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "hello@wsdxi.co.za",
      subject: `Contact Form: ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
