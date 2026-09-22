import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google";
import Atmosphere from "@/components/Atmosphere";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const accentFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Owais Quadri | Full-Stack Developer & Automation Specialist",
  description:
    "Full-Stack Developer and Automation Specialist. I build React + Spring Boot applications and design automation systems using GHL, n8n, Make, Zapier, and Airtable.",
  openGraph: {
    title: "Syed Owais Quadri | Full-Stack Developer & Automation Specialist",
    description:
      "Production web systems and automation architecture — React, Next.js, Spring Boot, n8n, Make, and GoHighLevel.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${accentFont.variable}`}
      >
        <Atmosphere />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
