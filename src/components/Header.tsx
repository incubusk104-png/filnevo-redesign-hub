import { Img, Section, Text } from "@react-email/components";
import { BRAND } from "@/constants";

export function Header() {
  return (
    <Section className="px-8 pt-7 pb-2">
      <Img
        src={BRAND.logoUrl}
        width="140"
        alt={BRAND.name}
        className="block h-auto max-w-[140px] border-0 outline-none"
      />
      <Text className="m-0 pt-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
        Precision Metrics
      </Text>
    </Section>
  );
}
