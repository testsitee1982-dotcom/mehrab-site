"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  base?: number; // مقدار شروع (پیش‌فرض 108)
};

function todayKey() {
  // کلید روز (بر اساس تاریخ محلی)
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function DailyVisits({ base = 108 }: Props) {
  const [count, setCount] = useState<number>(base);

  const key = useMemo(() => `daily_visits_${todayKey()}`, []);

  useEffect(() => {
    try {
      const current = Number(localStorage.getItem(key) ?? "0");

      // هر بار لود این کامپوننت، یک بازدید اضافه می‌کنیم
      const next = current + 1;
      localStorage.setItem(key, String(next));

      setCount(base + next);
    } catch {
      // اگر localStorage در دسترس نبود
      setCount(base + 1);
    }
  }, [base, key]);

  return (
    <div style={{ fontSize: 12.5, color: "rgba(226,232,240,0.78)" }}>
      بازدید روزانه:{" "}
      <span style={{ color: "rgba(248,250,252,0.92)", fontWeight: 800 }}>
        {count}
      </span>
    </div>
  );
}
