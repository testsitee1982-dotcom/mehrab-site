"use client";

import React, { useId, useMemo, useState } from "react";

const OFFICE_ADDRESS =
  "استان تهران - شهرستان ری - بخش خاوران - روستای خاوران غربی - شهر لپه زنک - محله لپه زنک - خیابان آزادی - کوچه گلستان سوم - پلاک ۲۰ - طبقه همکف - کدپستی ۱۸۶۵۱۴۱۰۰۹";

const OFFICE_LATITUDE = 35.571440;
const OFFICE_LONGITUDE = 51.593410;

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${OFFICE_LATITUDE},${OFFICE_LONGITUDE}&z=19&output=embed`;
export function ContactSection() {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const mapTitle = useMemo(() => "نقشه موقعیت دفتر شرکت", []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("لطفاً همه فیلدهای ضروری را تکمیل کنید.");
      return;
    }

    setIsSending(true);

    try {
      alert("پیام شما ثبت شد. در مرحله بعد API ارسال ایمیل را وصل می‌کنیم.");
      setName("");
      setEmail("");
      setMessage("");
    } finally {
      setIsSending(false);
    }
  };

const openMap = () => {
  window.open(
    `https://www.google.com/maps?q=${OFFICE_LATITUDE},${OFFICE_LONGITUDE}`,
    "_blank",
    "noopener,noreferrer"
  );
};

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.title}>تماس با ما</h3>
                <p style={styles.subtitle}>
                  برای دریافت مشاوره یا ثبت درخواست، پیام خود را ارسال کنید.
                </p>
              </div>
            </div>

            <form id={formId} onSubmit={onSubmit} style={styles.form}>
              <div style={styles.row}>
                <div style={styles.field}>
                  <label htmlFor={nameId} style={styles.label}>
                    نام
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    style={styles.input}
                    required
                    autoComplete="name"
                  />
                </div>

                <div style={styles.field}>
                  <label htmlFor={emailId} style={styles.label}>
                    ایمیل
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    style={styles.input}
                    type="email"
                    required
                    autoComplete="email"
                    dir="ltr"
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label htmlFor={messageId} style={styles.label}>
                  پیام
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  style={styles.textarea}
                  required
                />
              </div>

              <div style={styles.actions}>
                <button
                  type="submit"
                  style={styles.primaryButton}
                  disabled={isSending}
                >
                  {isSending ? "در حال ارسال..." : "ارسال پیام"}
                </button>
              </div>
            </form>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.title}>موقعیت دفتر شرکت</h3>
                <p style={styles.subtitle}>
                  آدرس دقیق و مسیر دسترسی را در نقشه مشاهده کنید.
                </p>
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
                onClick={openMap}
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
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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