import { Link, Section, Text } from "@react-email/components";
import { BRAND } from "@/constants";

export function Footer() {
  return (
    <Section className="border-t border-solid border-slate-800 px-8 py-7">
      <Text className="m-0 font-sans text-xs leading-5 text-slate-400">
        Need help? Contact{" "}
        <Link href={`mailto:${BRAND.supportEmail}`} className="text-cyan-300 no-underline">
          {BRAND.supportEmail}
        </Link>
        .
      </Text>
      <Text className="m-0 pt-3 font-sans text-[11px] leading-5 text-slate-600">
        © {new Date().getUTCFullYear()} {BRAND.name}. You received this email because a transaction was recorded on your account.
      </Text>
    </Section>
  );
}
