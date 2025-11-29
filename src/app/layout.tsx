import type { Metadata } from "next";
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
  metadataBase: new URL("https://findanylead.com"),
  title: {
    default: "Find Any Lead | B2B Cold Email Infrastructure & Lead Gen",
    template: "%s | Find Any Lead",
  },
  description: "Scale your B2B revenue with data-driven cold email infrastructure. We handle deliverability, domain setup, and lead generation so you can focus on closing deals.",
  keywords: ["Cold Email", "Lead Generation", "Email Deliverability", "B2B Sales", "Agency Growth", "White Label Lead Gen", "Cold Outreach"],
  authors: [{ name: "Alamin Islam" }],
  creator: "Find Any Lead",
  publisher: "Find Any Lead",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://findanylead.com",
    title: "Find Any Lead | Predictable B2B Revenue",
    description: "Scale your B2B revenue with data-driven cold email infrastructure.",
    siteName: "Find Any Lead",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Find Any Lead Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Any Lead | Predictable B2B Revenue",
    description: "Scale your B2B revenue with data-driven cold email infrastructure.",
    images: ["/og-image.jpg"],
    creator: "@findanylead",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}