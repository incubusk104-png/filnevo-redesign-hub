import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export default function PricingSection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif-display text-3xl text-ink mb-4 sm:text-4xl">
            Choose Your Security Plan
          </h2>
          <p className="font-ledger text-xl text-ink-dim max-w-2xl mx-auto">
            Flexible plans for teams of all sizes. All plans include our Triple-Lock Security Architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free Tier */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-6 backdrop-blur-sm transition-colors duration-500 border-hairline">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <div className="mb-6">
                <h3 className="font-serif-display text-xl text-ink mb-2">Free</h3>
                <p className="font-ledger text-ink-faint">For individuals and small projects</p>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="font-serif-display text-4xl text-ink">$0</span>
                <span className="font-ledger text-xs uppercase tracking-widest text-ink-faint ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-left font-ledger text-ink-dim">
                <li>• 1,000 documents/month</li>
                <li>• Basic Triple-Lock protection</li>
                <li>• Community support</li>
                <li>• Audit logs (7-day retention)</li>
              </ul>

              <Button variant="outline" size="sm">
                Get Started
                <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
              </Button>
            </div>
          </div>

          {/* Starter Tier */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-6 backdrop-blur-sm transition-colors duration-500 border-emerald/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <div className="mb-6">
                <h3 className="font-serif-display text-xl text-ink mb-2">Starter</h3>
                <p className="font-ledger text-ink-faint">For growing teams</p>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="font-serif-display text-4xl text-ink">$29</span>
                <span className="font-ledger text-xs uppercase tracking-widest text-ink-faint ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-left font-ledger text-ink-dim">
                <li>• 10,000 documents/month</li>
                <li>• Full Triple-Lock protection</li>
                <li>• Email support</li>
                <li>• Audit logs (30-day retention)</li>
                <li>• API access</li>
              </ul>

              <Button variant="outline" size="sm">
                Choose Plan
                <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
              </Button>
            </div>
          </div>

          {/* Business Pro Tier */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-6 backdrop-blur-sm transition-colors duration-500 border-sapphire/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <div className="mb-6">
                <h3 className="font-serif-display text-xl text-ink mb-2">Business Pro</h3>
                <p className="font-ledger text-ink-faint">For established businesses</p>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="font-serif-display text-4xl text-ink">$99</span>
                <span className="font-ledger text-xs uppercase tracking-widest text-ink-faint ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-left font-ledger text-ink-dim">
                <li>• 100,000 documents/month</li>
                <li>• Advanced Triple-Lock + Priority Monitoring</li>
                <li>• 24/7 priority support</li>
                <li>• Audit logs (1-year retention)</li>
                <li>• SSO & SCIM provisioning</li>
                <li>• Dedicated account manager</li>
              </ul>

              <Button variant="primary" size="sm">
                Choose Plan
                <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
              </Button>
            </div>
          </div>

          {/* Agency Core Tier */}
          <div className="relative overflow-hidden rounded-2xl border bg-obsidian-700/70 p-6 backdrop-blur-sm transition-colors duration-500 border-gold/30">
            <div className="pointer-events-none absolute inset-0 vault-grid opacity-[0.18]" />
            <div className="relative">
              <div className="mb-6">
                <h3 className="font-serif-display text-xl text-ink mb-2">Agency Core</h3>
                <p className="font-ledger text-ink-faint">For agencies and enterprises</p>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="font-serif-display text-4xl text-ink">$299</span>
                <span className="font-ledger text-xs uppercase tracking-widest text-ink-faint ml-2">/ month</span>
              </div>

              <ul className="space-y-4 text-left font-ledger text-ink-dim">
                <li>• Unlimited documents</li>
                <li>• Enterprise-grade Triple-Lock</li>
                <li>• 24/7 dedicated support</li>
                <li>• Unlimited audit log retention</li>
                <li>• Custom security policies</li>
                <li>• On-premise deployment option</li>
                <li>• SLA-guaranteed uptime</li>
              </ul>

              <Button variant="outline" size="sm">
                Contact Sales
                <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    );
}