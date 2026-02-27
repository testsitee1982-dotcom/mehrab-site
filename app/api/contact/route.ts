import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerEnv } from "@/app/lib/env";
import { rateLimit } from "@/app/lib/rateLimit";

type Payload = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit: 10 درخواست در 15 دقیقه برای هر IP
    const rl = rateLimit(ip, 10, 15 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Payload;

    // honeypot برای بات‌ها
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const env = getServerEnv();

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });

    const subject = `پیام جدید از سایت: ${body.name}`;
    const text = `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}\n`;

    await transporter.sendMail({
      from: env.SMTP_FROM,
      to: env.CONTACT_TO,
      replyTo: body.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error." },
      { status: 500 }
    );
  }
}
