// app/applications/[slug]/page.tsx
import { redirect, notFound } from "next/navigation";

// This route exists only to support legacy / alternative slugs.
// The canonical application pages live in:
// - /applications/grounding-systems
// - /applications/substation-grounding
// - /applications/transformer-oil
// - /applications/cable-trenching
export default function ApplicationSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Legacy/alias slugs -> canonical routes
  const aliasMap: Record<string, string> = {
    "grounding-and-lightning": "/applications/grounding-systems",
    "substation-backfill": "/applications/substation-grounding",
  };

  if (slug in aliasMap) redirect(aliasMap[slug]);

  // If someone hits the canonical slugs through this dynamic route, redirect too.
  const canonical = new Set([
    "grounding-systems",
    "substation-grounding",
    "transformer-oil",
    "cable-trenching",
  ]);
  if (canonical.has(slug)) redirect(`/applications/${slug}`);

  // Unknown slug
  notFound();
}
