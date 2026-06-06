interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/**
 * Filnevo brand mark — an "F" whose arms become forward chevrons ("fast
 * forward"), conveying speed, set in a solid rounded tile for reliability.
 * Uses the Precision Metrics brand gradient (velocity-blue → insight-cyan).
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
        <defs>
          <linearGradient id="flnGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Reliable, solid tile */}
        <rect
          x="2.5"
          y="2.5"
          width="35"
          height="35"
          rx="10"
          fill="url(#flnGrad)"
          fillOpacity="0.12"
          stroke="url(#flnGrad)"
          strokeWidth="1.5"
        />

        {/* Trailing speed lines */}
        <g stroke="url(#flnGrad)" strokeWidth="2.2" strokeLinecap="round" opacity="0.5">
          <path d="M6 16 H10" />
          <path d="M5.5 22 H9" />
        </g>

        {/* "F" spine + forward chevrons (speed) */}
        <g stroke="url(#flnGrad)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 11 V29" />
          <path d="M15 11 H25" />
          <path d="M22 7.5 L25.5 11 L22 14.5" />
          <path d="M15 19.5 H22" />
          <path d="M19 16.5 L22.5 19.5 L19 22.5" />
        </g>
      </svg>

      {withWordmark && (
        <span className="gradient-text font-heading text-lg font-bold tracking-tight">
          Filnevo
        </span>
      )}
    </span>
  );
}
