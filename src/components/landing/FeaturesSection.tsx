import Section from "@/components/shared/Section";

export default function FeaturesSection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-3xl text-ink mb-4 sm:text-4xl">
            How Triple-Lock Security Works
          </h2>
          <p className="font-ledger text-xl text-ink-dim max-w-2xl mx-auto">
            Our patented Triple-Lock Security Architecture creates three independent but complementary security layers,
            each designed to stop different attack vectors while working together as a unified defense system.
          </p>
        </div>

        {/* Interactive feature explorer */}
        <div className="relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="font-ledger text-sm text-ink-faint uppercase tracking-wider">
              Hover over each lock to see threat prevention details
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Lock 1: Edge Rate Limiter */}
            <div className="relative group overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-all duration-500 border-emerald/30 hover:border-emerald/50 hover:bg-obsidian-700/80">
              <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 h-12 w-12 bg-sapphire/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-sapphire/10 animate-shine" />
                    <svg className="h-6 w-6 text-sapphire relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4v3c0 1.1.9 2 2 2h4a2 2 0 002-2v-3c0-2.21-1.79-4-4-4zm0 10c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl text-ink mb-2">Lock 1: Edge Rate Limiter</h3>
                    <p className="font-ledger text-ink-dim">
                      Stops brute-force and DDoS attacks at the network edge before they reach your infrastructure.
                      Uses adaptive algorithms to distinguish legitimate traffic from malicious patterns.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <p className="font-ledger text-xs text-ink-faint">
                    • Processes 1M+ requests/second<br/>
                    • <99.9% attack detection accuracy<br/>
                    • Zero false positives on legitimate traffic
                  </p>
                </div>

                {/* Threat prevention details - appears on hover */}
                <div className="mt-4 pt-3 border-t border-hairline/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-emerald animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Blocks credential stuffing attacks</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-emerald animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Mitigates API abuse and scraping</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-4 w-4 bg-emerald animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Prevents credential brute force</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock 2: PL/pgSQL Quota Function */}
            <div className="relative group overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-all duration-500 border-sapphire/30 hover:border-sapphire/50 hover:bg-obsidian-700/80">
              <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 h-12 w-12 bg-emerald/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald/10 animate-shine" />
                    <svg className="h-6 w-6 text-emerald relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4v3c0 1.1.9 2 2 2h4a2 2 0 002-2v-3c0-2.21-1.79-4-4-4zM12 14c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl text-ink mb-2">Lock 2: Intelligent Quota Enforcement</h3>
                    <p className="font-ledger text-ink-dim">
                      Database-level resource governance that prevents abuse through intelligent quota allocation.
                      Dynamically adjusts limits based on user behavior patterns and risk scores.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <p className="font-ledger text-xs text-ink-faint">
                    • Row-level quota tracking<br/>
                    • Adaptive limits based on risk<br/>
                    • Automatic suspension for abuse patterns
                  </p>
                </div>

                {/* Threat prevention details - appears on hover */}
                <div className="mt-4 pt-3 border-t border-hairline/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-sapphire animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Stops quota exhaustion attacks</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-sapphire animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Prevents API overuse abuse</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-4 w-4 bg-sapphire animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Blocks credential stuffing loops</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock 3: Row-Level Security */}
            <div className="relative group overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-all duration-500 border-gold/30 hover:border-gold/50 hover:bg-obsidian-700/80">
              <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 h-12 w-12 bg-gold/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold/10 animate-shine" />
                    <svg className="h-6 w-6 text-gold relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4v3c0 1.1.9 2 2 2h4a2 2 0 002-2v-3c0-2.21-1.79-4-4-4zm0 10c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl text-ink mb-2">Lock 3: Military-Grade RLS</h3>
                    <p className="font-ledger text-ink-dim">
                      Fine-grained access control that ensures users can only see data they're explicitly authorized to access.
                      Implemented at the database level for maximum security and performance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <p className="font-ledger text-xs text-ink-faint">
                    • Policy-based access control<br/>
                    • Zero-trust architecture<br/>
                    • Cryptographic audit trails
                  </p>
                </div>

                {/* Threat prevention details - appears on hover */}
                <div className="mt-4 pt-3 border-t border-hairline/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-gold animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Prevents data exfiltration</span>
                  </div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 h-4 w-4 bg-gold animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Stops privilege escalation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-4 w-4 bg-gold animate-ruby" />
                    <span className="font-ledger text-xs text-ink">Blocks unauthorized data access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}