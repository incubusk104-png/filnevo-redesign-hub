import { Button } from "@/components/shared/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-velocity-blue/20 to-insight-cyan/20">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 8h-2V7h-2v3H7v2h3v3h2v-3h3v-2h-3z" fill="#3b82f6" />
            </svg>
          </span>
          <span className="font-heading text-lg font-bold tracking-tight gradient-text">
            Filnevo
          </span>
        </a>

        {/* In-page nav links (anchors exist on the landing page) */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="font-metrics text-sm text-text-muted transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="font-metrics text-sm text-text-muted transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="font-metrics text-sm text-text-muted transition-colors hover:text-foreground"
          >
            Testimonials
          </a>
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" href="/login">
            Sign In
          </Button>
          <Button variant="primary" size="sm" href="/login">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
}
