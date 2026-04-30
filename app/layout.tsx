import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Syed Owais Quadri | Full-Stack Developer & Automation Specialist",
  description:
    "Full-Stack Developer and Automation Specialist. I build React + Spring Boot applications and design automation systems using GHL, n8n, Make, Zapier, and Airtable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
