import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = SITE_URL;
const siteTitle = "Francesca Scarpellini | Freelance Web & Software Developer";
const siteDescription =
  "Freelance Web & Software Developer specializing in websites, web apps, and custom software built with Next.js, React, and modern tools. Portfolio of projects and open-source tools.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Francesca Scarpellini",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Francesca Scarpellini",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Francesca Scarpellini",
  jobTitle: "Freelance Web & Software Developer",
  url: siteUrl,
  sameAs: ["https://github.com/svilupp0"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7muG5FWKZeTFzvu8eGBiTnDUzwSj3MVZtNxrKOf1RGY"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
