import { Navbar } from "../components/layout/navbar";
import { HashCleanup } from "../components/providers/hash-cleanup";
import { ThemeProvider } from "../components/providers/theme-provider";
import { ScrollProgressBar } from "../components/ui/scroll-progress";
import { siteConfig } from "../data/site";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Akshar Prajapati | Senior Software Engineer",
    template: "%s | Akshar Prajapati",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Akshar Prajapati | Senior Software Engineer",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshar Prajapati | Senior Software Engineer",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <ScrollProgressBar />
          <HashCleanup />
          <Navbar />
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
