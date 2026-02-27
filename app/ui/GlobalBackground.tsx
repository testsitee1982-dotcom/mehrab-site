import React from "react";

export function GlobalBackground() {
  // tiny seamless noise (SVG) encoded as data URL
  const noise =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjgnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wMycvPjwvc3ZnPg==";

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-50 pointer-events-none">
      {/* Base deep gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 8% 12%, rgba(14,110,253,.22), transparent 45%)," +
            "radial-gradient(1100px 650px at 92% 0%, rgba(245,158,11,.18), transparent 45%)," +
            "linear-gradient(180deg,#070b17 0%, #0b1220 35%, #0a0f1e 100%)",
        }}
      />

      {/* Animated subtle ribbon */}
      <div className="absolute -top-40 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 rotate-[-12deg] opacity-35 blur-3xl">
        <div className="h-full w-full bg-[conic-gradient(from_120deg,#0ea5e9,#6366f1,#f59e0b,#0ea5e9)] will-change-transform bg-anim" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 0%, transparent 0%, rgba(0,0,0,.10) 60%, rgba(0,0,0,.22) 100%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-40"
        style={{ backgroundImage: `url(${noise})` }}
      />
    </div>
  );
}
