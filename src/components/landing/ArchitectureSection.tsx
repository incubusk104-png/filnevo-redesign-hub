export default function ArchitectureSection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background - subtle circuit/data flow pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22><rect width=%2260%22 height=%2260%22 fill=%22none%22/><path d=%22M0 30Q15 20 30 30T60 30%22 stroke=%22%231e293b%22 stroke-width=%220.5%22 opacity=%220.06%22 fill=%22none%22/></svg>')]"/>
        <div className="absolute inset-0 animate-data-flow" aria-hidden="true"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-tight">
            Triple-Lock Security Architecture for BIR Tax Compliance
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Bank-grade security with triple-layer protection ensuring absolute data isolation,
            profit protection, and abuse prevention while delivering accurate BIR tax automation.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative">
          {/* Main visualization */}
          <div className="relative h-[500px]">
            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 vault-grid opacity-[0.08]" />
            </div>

            {/* Data flow connections */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Input to Lock 1 (Edge) */}
              <div className="absolute left-16 top-20 w-[1px] h-[60px] bg-gradient-to-b from-transparent via-velocity-blue/20 to-velocity-blue" />
              {/* Lock 1 to Lock 2 */}
              <div className="absolute left-16 top-80 w-[1px] h-[80px] bg-gradient-to-b from-transparent via-insight-cyan/20 to-insight-cyan" />
              {/* Lock 2 to Lock 3 */}
              <div className="absolute left-16 top-160 w-[1px] h-[80px] bg-gradient-to-b from-transparent via-efficiency-green/20 to-efficiency-green" />
              {/* Lock 3 to Features */}
              <div className="absolute left-16 top-240 w-[1px] h-[80px] bg-gradient-to-b from-transparent via-warning-amber/20 to-warning-amber" />
            </div>

            {/* Lock 1: Compute Guard (Edge) */}
            <div className="absolute left-10 top-20">
              <div className="data-card p-6 w-64">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-alert-red/10 rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 000-2zm4 6a1 1 0 100 0 2 1 1 0 000-2zm-4 0a1 1 0 100 0 2 1 1 0 000-2zm2-4a1 1 0 100 0 2 1 1 0 000-2z" fill="%23ef4444" opacity="0.2"/>
                      <path d="M4 4h8v8H4V4zm1 1H6v6h2V5zm0 4H6v2h2V9z" fill="%23ef4444"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-metrics text-sm text-alert-red font-semibold mb-1">
                      Lock 1: Compute Guard
                    </h3>
                    <p className="text-xs text-text-muted">
                      Edge rate limiting & 2MB payload protection<br/>
                      Cloudflare Pages & Vercel Edge Functions
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-velocity-blue/80">99.99%</span>
                  <span className="text-velocity-blue">uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Lock 2: Profit Safeguard (Quota) */}
            <div className="absolute left-10 top={100}">
              <div className="data-card p-6 w-64">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-insight-cyan/10 rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2a2 2 0 100 4 2 2 0 000-4zm0 1a1 1 0 110 2 1 1 0 000-2zm4 6a1 1 0 100 0 2 1 1 0 000-2zm-4 0a1 1 0 100 0 2 1 1 0 000-2zm2-4a1 1 0 100 0 2 1 1 0 000-2z" fill="%2306b6d4" opacity="0.2"/>
                      <path d="M4 8h8M4 12h8M8 4v8" stroke="%2306b6d4" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-metrics text-sm text-insight-cyan font-semibold mb-1">
                      Lock 2: Profit Safeguard
                    </h3>
                    <p className="text-xs text-text-muted">
                      Workspace-aware PL/pgSQL quota<br/>
                      FOR UPDATE locking prevents race conditions
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-insight-cyan/80">99.9%</span>
                  <span className="text-insight-cyan">accuracy</span>
                </div>
              </div>
            </div>

            {/* Lock 3: Tenant Isolation (RLS) */}
            <div className="absolute left-10 top={180}">
              <div className="data-card p-6 w-64">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-efficiency-green/10 rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8a6 6 0 0112 0a5.989 5.989 0 00-.456-.078A6 6 0 012 8zM8 0a4 4 0 100 0 8 4 4 0 000-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="%2310b981" opacity="0.2"/>
                      <path d="M4 4h8v4H4V4zm0 4h8v4H4v-4z" fill="%2310b981"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-metrics text-sm text-efficiency-green font-semibold mb-1">
                      Lock 3: Tenant Isolation
                    </h3>
                    <p className="text-xs text-text-muted">
                      Complete Row Level Security (RLS)<br/>
                      Absolute data separation between tenants
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-efficiency-green/80">100%</span>
                  <span className="text-efficiency-green">isolation</span>
                </div>
              </div>
            </div>

            {/* Core BIR Tax Features */}
            <div className="absolute left-10 top={260}">
              <div className="data-card p-6 w-64">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warning-amber/10 rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0a4 4 0 00-4 4v2a4 4 0 008 0V4a4 4 0 00-4-4zm0 12a4 4 0 100-8 4 4 0 000 8zM8 8a2 2 0 100-4 2 2 0 000 4z" fill="%23f59e0b" opacity="0.2"/>
                      <path d="M4 4h8v4H4V4zm0 4h8v4H4v-4z" fill="%23f59e0b"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-metrics text-sm text-warning-amber font-semibold mb-1">
                      BIR Tax Compliance Engine
                    </h3>
                    <p className="text-xs text-text-muted">
                      12-feature platform:<br/>
                      • Zero-Entry Document Capture<br/>
                      • BIR 10-Second Auto-Fill<br/>
                      • Dynamic Deadline Countdown<br/>
                      • WhatsApp Receipt Bot<br/>
                      • Multi-Currency Tax Predictor<br/>
                      • Real-Time Dual-Receipt Anti-Fraud<br/>
                      • Multi-Workspace Routing<br/>
                      • Team Approvals Network<br/>
                      • Automated BIR Audit ZIP Export<br/>
                      • Live Outbound Webhooks<br/>
                      • Role-Based Access Control<br/>
                      • Separate Agency vs Client Portfolios
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-warning-amber/80">99.8%</span>
                  <span className="text-warning-amber">accuracy rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}