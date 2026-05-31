import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export default function CTASection() {
  return (
    <Section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/95 via-obsidian/90 to-obsidian/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <h2 className="font-serif-display text-3xl text-ink text-glow-gold mb-6 sm:text-4xl">
          Ready to Experience Triple-Lock Security?
        </h2>
        <p className="font-ledger text-xl text-ink-dim mb-10 max-w-2xl mx-auto">
          Join hundreds of organizations that trust Caveat Vault to protect their most sensitive data.
          Start with our free tier or contact us for a personalized security assessment.
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <Button variant="outline" href="#pricing">
            See Pricing Plans
            <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
          </Button>
          <Button variant="primary" href="#">
            Get Started Free
            <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7"/></svg>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-sapphire/20"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-sapphire/20"></div>
      </div>
    </Section>
  );
}