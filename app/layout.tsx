import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataKit Studio",
  description: "Studio curated for you!",
  icons: { icon: "/favicon.ico" },
  themeColor: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* PRELOAD largest hero background image to fix LCP */}
        <link
          rel="preload"
          as="image"
          href="/Images/background/banner-bg.png"
          fetchPriority="high"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Analytics loaded AFTER content */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
