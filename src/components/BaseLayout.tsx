import * as React from "react";
import { Body, Container, Head, Html, Preview, Tailwind } from "@react-email/components";
import { BRAND } from "@/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface BaseLayoutProps {
  children: React.ReactNode;
  preview?: string;
}

export function BaseLayout({ children, preview = `A secure update from ${BRAND.name}` }: BaseLayoutProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                obsidian: "#0a0e17",
                panel: "#0f1420",
                line: "#1e293b",
                ink: "#e6e9f0",
                muted: "#94a3b8",
                cyan: "#22d3ee",
              },
              fontFamily: {
                sans: ["Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
              },
            },
          },
        }}
      >
        <Body className="m-0 bg-obsidian p-0">
          <Container className="mx-auto my-0 max-w-[520px] px-4 py-8">
            <Container className="overflow-hidden rounded-2xl border border-solid border-line bg-panel shadow-xl">
              <Header />
              {children}
              <Footer />
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default BaseLayout;
