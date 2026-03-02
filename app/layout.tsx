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
  title: "Syed Owais Quadri | Full-Stack Java Engineer",
  description:
    "Portfolio of Syed Owais Quadri - Full-Stack Java Engineer focused on scalable backend systems, modern React applications, and automation workflows.",
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
