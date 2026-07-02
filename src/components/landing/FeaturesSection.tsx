import { Button } from "@/components/shared/Button";

// Bento grid — composition matched to the chosen v3 direction:
//   1 large hero tile (col-span-2, row-span-2) — Smart Document Capture
//   1 medium tile (col-span-2)                 — Iron-Clad Audit Trail
//   2 small tiles                              — Workspaces, Auto-Fill
//
// The tokens (bg-surface, border-primary/20, primary/20 icon halo) come
// straight from the picked prototype's @theme block.

interface BentoTile {
  title: string;
  body: string;
  size: "hero" | "wide" | "small";
  glyph?: React.ReactNode;
  emoji?: string;
}

function DocGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 4v5h5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M12 3 4 6v6c0 4.5 3.2 8.5 8 9 4.8-.5 8-4.5 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TILES: BentoTile[] = [
  {
    size: "hero",
    title: "Smart Document Capture",
    body: "Snap a photo of any receipt or BIR form. Our proprietary AI extracts data with 99.9% accuracy, categorising expenses automatically.",
    glyph: <DocGlyph />,
  },
  {
    size: "wide",
    title: "Iron-Clad Audit Trail",
    body: "Every filing is stamped and stored in a secure digital vault with a full history of changes.",
    glyph: <ShieldGlyph />,
  },
  { size: "small", title: "Workspaces", body: "Multi-entity support", emoji: "🏢" },
  { size: "small", title: "Auto-Fill", body: "Instant BIR forms", emoji: "⚡" },
];

function TileFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-3xl border p-8 transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--hairline)",
      }}
    >
      {children}
    </div>
  );
}

function IconHalo({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-primary"
      style={{ backgroundColor: "rgba(79, 70, 229, 0.2)" }}
    >
      {children}
    </div>
  );
}

export default function FeaturesSection() {
  const [hero, wide, small1, small2] = TILES;

  return (
    <section
      id="features"
      className="relative scroll-mt-20 overflow-hidden py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading — matches the left-aligned, oversized display type of v3 */}
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Everything for compliance.
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            From capture to submission, we&apos;ve distilled 12 core BIR functions into
            the four things you actually reach for every day.
          </p>
        </div>

        {/* Bento grid — 4 cols × 2 rows on desktop */}
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {/* Hero tile */}
          <TileFrame className="md:col-span-2 md:row-span-2 flex flex-col justify-between hover:border-primary/60">
            <div>
              <IconHalo>{hero.glyph}</IconHalo>
              <h3 className="mb-4 font-heading text-2xl font-bold text-white">
                {hero.title}
              </h3>
              <p className="leading-relaxed text-text-muted">{hero.body}</p>
            </div>
            {/* Product-like preview strip */}
            <div
              className="mt-8 overflow-hidden rounded-xl ring-1"
              style={{
                backgroundColor: "rgba(10, 10, 26, 0.5)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
                {[
                  { k: "Vendor", v: "SM Supermalls" },
                  { k: "Date", v: "May 24, 2026" },
                  { k: "Subtotal", v: "₱4,285.71" },
                  { k: "Output VAT", v: "₱514.29" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between px-4 py-3"
                    style={{ backgroundColor: "var(--surface)" }}
                  >
                    <span className="text-xs uppercase tracking-widest text-text-faint">
                      {row.k}
                    </span>
                    <span className="font-metrics text-sm font-semibold tabular-nums text-white">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="flex items-center justify-between px-4 py-3 text-xs"
                style={{ backgroundColor: "rgba(79, 70, 229, 0.12)" }}
              >
                <span className="uppercase tracking-widest text-primary">
                  Extracted in 1.8s
                </span>
                <span className="font-metrics tabular-nums text-primary">99.9%</span>
              </div>
            </div>
          </TileFrame>

          {/* Wide tile */}
          <TileFrame className="md:col-span-2 hover:border-primary/60">
            <IconHalo>{wide.glyph}</IconHalo>
            <h3 className="mb-2 font-heading text-xl font-bold text-white">
              {wide.title}
            </h3>
            <p className="text-sm text-text-muted">{wide.body}</p>
          </TileFrame>

          {/* Small tiles */}
          {[small1, small2].map((tile) => (
            <TileFrame
              key={tile.title}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="mb-2 text-3xl">{tile.emoji}</div>
              <h4 className="font-bold text-white">{tile.title}</h4>
              <p className="text-xs text-text-muted">{tile.body}</p>
            </TileFrame>
          ))}
        </div>

        {/* Compact CTA row — kept subtle so the grid stays the focus */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-text-muted">
            Every capability included on every paid plan.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" href="#pricing">
              See pricing
            </Button>
            <Button variant="primary" href="/login?mode=signup">
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
