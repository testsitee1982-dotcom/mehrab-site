"use client";

import { useEffect, useState } from "react";

export default function FakeStats() {
  const [visits, setVisits] = useState(128);
  const [online, setOnline] = useState(3);

  useEffect(() => {
    // 👤 هر بار ورود کاربر
    setVisits((v) => v + 1);
    setOnline((o) => o + 1);

    // ⏱️ هر 8 دقیقه
    const interval = setInterval(() => {
      // 1 نفر آنلاین اضافه میشه
      setOnline((o) => o + 1);

      // بعد از 2 دقیقه → تبدیل به بازدید
      setTimeout(() => {
        setOnline((o) => Math.max(o - 1, 1));
        setVisits((v) => v + 1);
      }, 2 * 60 * 1000);
    }, 8 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 text-sm text-white/80">
      <div className="flex justify-between">
        <span>👁️ بازدید کل:</span>
        <span>{visits}</span>
      </div>

      <div className="flex justify-between">
        <span>🟢 آنلاین:</span>
        <span>{online}</span>
      </div>
    </div>
  );
}