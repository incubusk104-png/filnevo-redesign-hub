interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/**
 * Filnevo wordmark — redesigned for the Midnight Indigo direction.
 * A tight, uppercase Syne wordmark with a single indigo period as the mark,
 * paired with an optional monogram tile. Reads as a modern fintech seal.
 *
 * Tokens are copied verbatim from the chosen direction:
 *   surface #141432, primary #4f46e5, border rgba(79,70,229,0.2)
 */
export function Logo({ size = 36, withWordmark = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Indigo tile — precision seal */}
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          fill="#141432"
          stroke="#4f46e5"
          strokeOpacity="0.4"
          strokeWidth="1.25"
        />
        {/* Sharp F monogram in Syne-like geometry */}
        <path
          d="M13.5 11 H27.5 M13.5 11 V29 M13.5 20 H23"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Indigo accent dot — the "period" that anchors the wordmark */}
        <circle cx="29.5" cy="27.5" r="2.25" fill="#4f46e5" />
      </svg>

      {withWordmark && (
        <span className="font-heading text-lg font-extrabold uppercase tracking-tighter text-white">
          Filnevo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
