import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H.BARRADAH // NEURAL OPS CONSOLE",
  description: "AI & Cybersecurity Engineer — Immersive Operations Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Saira+Condensed:wght@500;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="crt font-mono text-terminal">{children}</body>
    </html>
  );
}