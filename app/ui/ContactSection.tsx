"use client";

import React, { useId, useMemo, useState } from "react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1620.114558265374!2d51.42422728650661!3d35.695979067133514!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1767857030698!5m2!1sfa!2s";

const OFFICE_ADDRESS =
  "تهران - خیابان لاله‌زار - کوچه حمیدی امین‌زاده - مرکز تجاری ایران - پلاک (10) - طبقه دوم - واحد (14)";

export function ContactSection() {
  const formId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mapTitle = useMemo(() => "نقشه موقعیت دفتر شرکت", []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // اینجا اگر API ارسال پیام داری وصلش می‌کنیم (فعلاً جلوگیری از خطا)
    // TODO: integrate POST /api/contact
    alert("پیام شما ثبت شد (دمو). در مرحله بعد API را وصل می‌کنیم.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        {/* ✅ Grid دو ستونه: فرم (چپ) - نقشه (راست) */}
        <div style={styles.grid}>
          {/* ✅ FORM (اول) */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.title}>تماس با ما</h3>
                <p style={styles.subtitle}>برای دریافت مشاوره یا ثبت درخواست، پیام خود را ارسال کنید.</p>
              </div>
            </div>

            <form id={formId} onSubmit={onSubmit} style={styles.form}>
              <div style={styles.row}>
                <div style={styles.field}>
                  <label style={styles.label}>نام</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    placeholder=""
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>ایمیل</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    placeholder=""
                    type="email"
                    required
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>پیام</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={styles.textarea}
                  placeholder=""
                  required
                />
              </div>

              <div style={styles.actions}>
                <button type="submit" style={styles.primaryButton}>
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>

          {/* ✅ MAP (دوم) */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.title}>موقعیت دفتر شرکت</h3>
                <p style={styles.subtitle}>آدرس دقیق و مسیر دسترسی را در نقشه مشاهده کنید.</p>
              </div>
            </div>

            <div style={styles.mapWrap}>
              <iframe
                title={mapTitle}
                src={MAP_EMBED_SRC}
                style={styles.iframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div style={styles.cardFooter}>
              <button
                type="button"
                style={styles.primaryButton}
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}`,
                    "_blank"
                  )
                }
              >
                باز کردن در نقشه
              </button>

              <div style={styles.addressBox}>
                <div style={styles.addressLabel}>آدرس:</div>
                <div style={styles.addressText}>{OFFICE_ADDRESS}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "28px 0 18px",
  },
  container: {
    width: "min(1200px, calc(100% - 32px))",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    alignItems: "stretch",
  },
  card: {
    borderRadius: 16,
    background: "rgba(15, 23, 42, 0.35)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    backdropFilter: "blur(10px)",
    overflow: "hidden",
  },
  cardHeader: {
    padding: "14px 16px 10px",
    borderBottom: "1px solid rgba(148, 163, 184, 0.14)",
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    color: "rgba(248, 250, 252, 0.92)",
  },
  subtitle: {
    margin: "6px 0 0",
    fontSize: 12.5,
    color: "rgba(226, 232, 240, 0.7)",
    lineHeight: 1.6,
  },
  mapWrap: {
    height: 260,
    background: "rgba(2, 6, 23, 0.35)",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
    display: "block",
  },
  cardFooter: {
    padding: "12px 16px 14px",
    display: "grid",
    gap: 10,
    borderTop: "1px solid rgba(148, 163, 184, 0.14)",
  },
  addressBox: {
    display: "grid",
    gap: 6,
    background: "rgba(2, 6, 23, 0.25)",
    border: "1px solid rgba(148, 163, 184, 0.12)",
    borderRadius: 12,
    padding: "10px 12px",
  },
  addressLabel: {
    fontSize: 12,
    color: "rgba(226, 232, 240, 0.7)",
  },
  addressText: {
    fontSize: 12.5,
    color: "rgba(248, 250, 252, 0.9)",
    lineHeight: 1.7,
  },
  form: {
    padding: "12px 16px 14px",
    display: "grid",
    gap: 12,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  field: {
    display: "grid",
    gap: 6,
  },
  label: {
    fontSize: 12,
    color: "rgba(226, 232, 240, 0.75)",
  },
  input: {
    height: 38,
    borderRadius: 12,
    border: "1px solid rgba(148, 163, 184, 0.18)",
    background: "rgba(2, 6, 23, 0.25)",
    padding: "0 12px",
    outline: "none",
    color: "rgba(248, 250, 252, 0.92)",
  },
  textarea: {
    minHeight: 120,
    borderRadius: 12,
    border: "1px solid rgba(148, 163, 184, 0.18)",
    background: "rgba(2, 6, 23, 0.25)",
    padding: "10px 12px",
    outline: "none",
    color: "rgba(248, 250, 252, 0.92)",
    resize: "vertical",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-start",
  },
  primaryButton: {
    height: 38,
    borderRadius: 12,
    border: "none",
    background: "#f59e0b",
    color: "#0b1220",
    fontWeight: 800,
    padding: "0 14px",
    cursor: "pointer",
    width: "fit-content",
  },
};