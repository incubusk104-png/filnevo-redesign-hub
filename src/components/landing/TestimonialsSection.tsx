import Section from "@/components/shared/Section";

export default function TestimonialsSection() {
  return (
    <Section className="py-20 bg-obsidian-600/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-3xl text-ink mb-4 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="font-ledger text-xl text-ink-dim max-w-2xl mx-auto">
            Trusted by security-conscious organizations worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-colors duration-500 border-emerald/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <p className="font-ledger text-ink-dim italic mb-6">
                "Caveat Vault's Triple-Lock Security gave us peace of mind during our Series B funding round.
                We've blocked over 100k malicious attempts in the first month alone."
              </p>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-emerald/20 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8.69V4a2 2 0 00-2-2h-5.69a2 2 0 00-1.41.59l-.83 1.06A2 2 0 019.16 7H12a2 2 0 012 2v1.17a2 2.01 0 00-.58 1.41l-1.17.3a2 2 0 01-1.41-.42l-.83-1.06A2 2 0 006.69 6H4a2 2 0 00-2 2v10.31c0 .59.23 1.14.59 1.57l4 1.5a2 2 0 002.16.9l2.5-1a2 2 0 012 .93l4-1.5c.36-.43.59-1 .59-1.57V10.69a2 2 0 00-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-ink mb-1">Alex Rivera</h3>
                  <p className="font-ledger text-xs text-ink-faint">CTO, FinTech Startup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-colors duration-500 border-sapphire/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <p className="font-ledger text-ink-dim italic mb-6">
                "As a healthcare provider, HIPAA compliance is non-negotiable. Caveat Vault's RLS implementation
                ensured we passed our audit with zero findings."
              </p>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-sapphire/20 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-sapphire" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8.69V4a2 2 0 00-2-2h-5.69a2 2 0 00-1.41.59l-.83 1.06A2 2 0 019.16 7H12a2 2 0 012 2v1.17a2 2.01 0 00-.58 1.41l-1.17.3a2 2 0 01-1.41-.42l-.83-1.06A2 2 0 006.69 6H4a2 2 0 00-2 2v10.31c0 .59.23 1.14.59 1.57l4 1.5a2 2 0 002.16.9l2.5-1a2 2 0 012 .93l4-1.5c.36-.43.59-1 .59-1.57V10.69a2 2 0 00-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-ink mb-1">Dr. Samantha Chen</h3>
                  <p className="font-ledger text-xs text-ink-faint">Chief Security Officer, MedHealth Corp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-8 backdrop-blur-sm transition-colors duration-500 border-gold/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <p className="font-ledger text-ink-dim italic mb-6">
                "We migrated from a legacy security solution to Caveat Vault and reduced our security incidents by 90%
                while cutting costs by 40%. The dashboard gives us real-time visibility into threats."
              </p>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-gold/20 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8.69V4a2 2 0 00-2-2h-5.69a2 2 0 00-1.41.59l-.83 1.06A2 2 0 019.16 7H12a2 2 0 012 2v1.17a2 2.01 0 00-.58 1.41l-1.17.3a2 2 0 01-1.41-.42l-.83-1.06A2 2 0 006.69 6H4a2 2 0 00-2 2v10.31c0 .59.23 1.14.59 1.57l4 1.5a2 2 0 002.16.9l2.5-1a2 2 0 012 .93l4-1.5c.36-.43.59-1 .59-1.57V10.69a2 2 0 00-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-ink mb-1">Marcus Johnson</h3>
                  <p className="font-ledger text-xs text-ink-faint">VP of Engineering, Global Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
}