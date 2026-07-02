import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/products/p1",
        destination: "/products/active-bentonite-earthing-ground-enhancement",
        permanent: true,
      },
      {
        source: "/products/p2",
        destination: "/products/micronized-bentonite-earth-pit-earthing",
        permanent: true,
      },
      {
        source: "/products/p3",
        destination: "/products/lrm-grounding-gel-earth-resistance-reducer",
        permanent: true,
      },
      {
        source: "/products/p4",
        destination: "/products/lrm-ground-enhancement-material-conductive-bentonite",
        permanent: true,
      },
      {
        source: "/products/p5",
        destination: "/products/export-super-active-ground-enhancement-material",
        permanent: true,
      },
      {
        source: "/products/p6",
        destination: "/products/grm-ground-recovering-material-earthing",
        permanent: true,
      },
      {
        source: "/products/p7",
        destination: "/products/sodium-bentonite-electrolyte-ground-enhancement",
        permanent: true,
      },
      {
        source: "/products/p8",
        destination: "/products/multi-active-industrial-earthing-powder",
        permanent: true,
      },

      {
        source: "/products/active-bentonite",
        destination: "/products/active-bentonite-earthing-ground-enhancement",
        permanent: true,
      },
      {
        source: "/products/micronized-bentonite",
        destination: "/products/micronized-bentonite-earth-pit-earthing",
        permanent: true,
      },
      {
        source: "/products/lom",
        destination: "/products/lrm-grounding-gel-earth-resistance-reducer",
        permanent: true,
      },
      {
        source: "/products/lrm",
        destination: "/products/lrm-ground-enhancement-material-conductive-bentonite",
        permanent: true,
      },
      {
        source: "/products/super-active-bentonite",
        destination: "/products/export-super-active-ground-enhancement-material",
        permanent: true,
      },
      {
        source: "/products/grm",
        destination: "/products/grm-ground-recovering-material-earthing",
        permanent: true,
      },
      {
        source: "/products/sodium-bentonite-electrolyte",
        destination: "/products/sodium-bentonite-electrolyte-ground-enhancement",
        permanent: true,
      },
      {
        source: "/products/multi-active-powder",
        destination: "/products/multi-active-industrial-earthing-powder",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;