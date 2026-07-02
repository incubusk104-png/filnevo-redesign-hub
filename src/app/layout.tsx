import type { Metadata, Viewport } from "next";
import {
  Syne,
  Plus_Jakarta_Sans,
  Space_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

// Display / headings — Syne carries the "creative startup" energy of the
// Midnight Indigo direction picked in the redesign.
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Body — Plus Jakarta Sans pairs with Syne per the chosen direction.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Kept for metric numerals and monospace data blocks (existing components
// reference these variables — retained so nothing regresses visually).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Filnevo — Automate Your BIR Tax Compliance",
  description:
    "Precision-engineered BIR tax automation for Filipino businesses. From zero-entry document capture to automated form filling — accurate, on-time filings without the friction.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
