export default function HeroSection() {
  return (
    <Section>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating security nodes */}
        <div className="absolute top-16 left-[20%] w-12 h-12 bg-sapphire/10 rounded-full animate-float animate-pulse-soft" />
        <div className="absolute bottom-20 right-[15%] w-8 h-8 bg-emerald/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[70%] w-10 h-10 bg-gold/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        {/* Scanning line effect */}
        <div className="absolute inset-0 animate-scan-line" />
      </div>

      {/* Dark overlay with subtle gradient */}
      <div className="absolute inset-0 bg-obsidian/80 bg-gradient-to-b from-obsidian/90 via-obsidian/80 to-obsidian/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="font-serif-display text-4xl text-ink text-glow-gold mb-6 sm:text-5xl animate-shine">
          Triple-Lock Security for Your Most Sensitive Data
        </h1>
        <p className="font-ledger text-xl text-ink-dim mb-8 max-w-2xl">
          Caveat Vault provides military-grade protection through our unique Triple-Lock Security Architecture—
          combining edge rate limiting, intelligent quota enforcement, and row-level security to create an
          impenetrable barrier against unauthorized access and data breaches.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button variant="outline" href="#features">
            Learn How It Works
          </Button>
          <Button variant="primary" href="#cta">
            Get Started Free
          </Button>
        </div>

        {/* Security stats counter */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:space-x-8">
          <div className="flex items-center gap-3 text-sm text-ink-dim">
            <div className="w-3 h-3 bg-emerald animate-ruby" />
            <span>Protected</span>
            <span className="count-up font-mono">4.2M+</span>
            <span className="text-ink-faint">documents monthly</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-dim">
            <div className="w-3 h-3 bg-sapphire animate-ruby" />
            <span>Blocked</span>
            <span className="count-up font-mono">89B+</span>
            <span className="text-ink-faint">threat attempts</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-dim">
            <div className="w-3 h-3 bg-gold animate-ruby" />
            <span>Zero</span>
            <span className="count-up font-mono">0</span>
            <span className="text-ink-faint">data breaches</span>
          </div>
        </div>
      </div>

      {/* Abstract security pattern with motion */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-t from-obsidian/0 to-obsidian/60"></div>
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-obsidian/0 to-obsidian/60"></div>
        {/* Floating threat detection dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[10%] w-1 h-1 bg-ruby/50 rounded-full animate-threat-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-[60%] left-[80%] w-1 h-1 bg-ruby/50 rounded-full animate-threat-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[15%] left-[90%] w-1 h-1 bg-ruby/50 rounded-full animate-threat-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </Section>
  );
}