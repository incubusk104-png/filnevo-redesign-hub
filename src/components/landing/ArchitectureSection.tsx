import Section from "@/components/shared/Section";

export default function ArchitectureSection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-3xl text-ink mb-4 sm:text-4xl">
            The Triple-Lock Security Architecture
          </h2>
          <p className="font-ledger text-xl text-ink-dim max-w-2xl mx-auto">
            Each lock operates at a different layer of your stack, creating defense in depth.
            Together, they form a unified security posture that is greater than the sum of its parts.
          </p>
        </div>

        <div className="space-y-16">
          {/* Lock 1: Edge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl text-ink">Lock 1: Edge Rate Limiter</h3>
              <p className="font-ledger text-ink-dim">
                Deployed at the network edge (Cloudflare Workers or similar), this lock analyzes
                incoming traffic in real-time to block DDoS, brute-force, and credential stuffing
                attacks before they reach your origin servers.
              </p>
              <div className="space-y-4">
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-emerald/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Sub-millisecond decision latency</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-emerald/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Blocks 99.9% of malicious traffic</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-emerald/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Adaptive threat intelligence</span>
                </p>
              </div>
            </div>
            <div className="relative h-[300px]">
              <div className="absolute inset-0 bg-obsidian-700/50 rounded-xl overflow-hidden">
                <div className="pointer-events-none inset-0 vault-grid opacity-[0.18]" />
                <div className="absolute inset-0 flex items-center justify-center text-ink/50 text-xl">
                  Edge Network<br/>Rate Limiter
                </div>
              </div>
            </div>
          </div>

          {/* Lock 2: Quota */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:lg-cols-reverse">
            <div className="relative h-[300px] order-1 lg:order-2">
              <div className="absolute inset-0 bg-obsidian-700/50 rounded-xl overflow-hidden">
                <div className="pointer-events-none inset-0 vault-grid opacity-[0.18]" />
                <div className="absolute inset-0 flex items-center justify-center text-ink/50 text-xl">
                  Intelligent<br/>Quota Enforcement
                </div>
              </div>
            </div>
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="font-serif-display text-2xl text-ink">Lock 2: Intelligent Quota Enforcement</h3>
              <p className="font-ledger text-ink-dim">
                Implemented as a PL/pgSQL function in Supabase, this lock monitors resource usage
                per user and tenant, applying dynamic limits based on behavior patterns and risk scores.
                It prevents abuse while ensuring fair resource allocation.
              </p>
              <div className="space-y-4">
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-sapphire/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Row-level usage tracking</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-sapphire/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Adaptive limits based on risk</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-sapphire/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Automatic suspension for abuse</span>
                </p>
              </div>
            </div>
          </div>

          {/* Lock 3: RLS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl text-ink">Lock 3: Military-Grade RLS</h3>
              <p className="font-ledger text-ink-dim">
                Row-Level Security policies in Supabase ensure that users can only access data
                they are explicitly authorized to see. This zero-trust approach prevents data
                leaks even if other layers are bypassed.
              </p>
              <div className="space-y-4">
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-gold/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Policy-based access control</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-gold/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Zero-trust architecture</span>
                </p>
                <p className="font-ledger text-ink-dim flex items-start">
                  <svg className="flex-shrink-0 h-4 w-4 text-gold/50 mt-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Cryptographic audit trails</span>
                </p>
              </div>
            </div>
            <div className="relative h-[300px]">
              <div className="absolute inset-0 bg-obsidian-700/50 rounded-xl overflow-hidden">
                <div className="pointer-events-none inset-0 vault-grid opacity-[0.18]" />
                <div className="absolute inset-0 flex items-center justify-center text-ink/50 text-xl">
                  Row-Level<br/>Security (RLS)
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
}