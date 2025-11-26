// app/api/place-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // برای nodemailer

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, items, total } = body as {
      customer: {
        name: string;
        phone: string;
        address?: string;
        note?: string;
      };
      items: {
        id: string;
        name: string;
        qty: number;
        price: number;
        lineTotal: number;
      }[];
      total: number;
    };

    // اگر سفارشی نبود، خطا
    if (!items || !items.length) {
      return NextResponse.json(
        { ok: false, error: "سبد خالی است" },
        { status: 400 }
      );
    }

    // ساخت متن و HTML ایمیل
    const lines = items.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} × ${item.qty} = ${item.lineTotal.toLocaleString(
          "fa-IR"
        )} تومان`
    );

    const totalText = total.toLocaleString("fa-IR");

    const textMessage = `
🧾 سفارش جدید از وب‌سایت

👤 نام: ${customer.name}
📞 تلفن: ${customer.phone}
📍 آدرس: ${customer.address || "-"}
📝 توضیحات: ${customer.note || "-"}

📦 اقلام سفارش:
${lines.join("\n")}

💰 جمع کل: ${totalText} تومان
`.trim();

    const htmlMessage = `
      <div style="font-family:Tahoma,Arial,sans-serif; direction:rtl; text-align:right">
        <h2>🧾 سفارش جدید از وب‌سایت</h2>
        <p><strong>👤 نام:</strong> ${customer.name}</p>
        <p><strong>📞 تلفن:</strong> ${customer.phone}</p>
        <p><strong>📍 آدرس:</strong> ${customer.address || "-"}</p>
        <p><strong>📝 توضیحات:</strong> ${customer.note || "-"}</p>
        <hr />
        <h3>📦 اقلام سفارش:</h3>
        <ul>
          ${items
            .map(
              (item, idx) => `
            <li>
              ${idx + 1}. ${item.name} &times; ${item.qty}
              = ${item.lineTotal.toLocaleString("fa-IR")} تومان
            </li>
          `
            )
            .join("")}
        </ul>
        <p style="margin-top:16px">
          <strong>💰 جمع کل:</strong>
          ${totalText} تومان
        </p>
      </div>
    `;

    // تنظیم SMTP از روی env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // اگر 465 استفاده می‌کنی بگذار true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.error("ADMIN_EMAIL is not set in env");
      return NextResponse.json(
        { ok: false, error: "Server email not configured" },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `"فروشگاه سایت" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `سفارش جدید از ${customer.name}`,
      text: textMessage,
      html: htmlMessage,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/place-order:", err);
    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
