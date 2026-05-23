import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { LocalBusinessJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barekyne.in"),
  title: {
    default: "Barekyne — Premium Clinical Skincare for Distributors & Clinics | India",
    template: "%s | Barekyne",
  },
  description:
    "Barekyne is a premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India. Get monopoly rights, bulk pricing & high margins.",
  keywords: [
    "skincare distributors India",
    "derma skincare supplier",
    "wholesale skincare India",
    "skincare franchise India",
    "monopoly skincare company",
    "clinic skincare supplier",
    "cosmetic distributors India",
    "skincare bulk supplier",
    "premium skincare manufacturer India",
    "dermatology skincare products",
  ],
  authors: [{ name: "Barekyne" }],
  creator: "Barekyne",
  publisher: "Barekyne",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://barekyne.in",
    siteName: "Barekyne",
    title: "Barekyne — Premium Clinical Skincare for Distributors & Clinics",
    description:
      "High-performance skincare formulations for distributors, wholesalers, pharmacies, and clinics across India. Monopoly rights, franchise, and bulk supply available.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barekyne Premium Clinical Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barekyne — Premium Clinical Skincare",
    description:
      "India's premium clinical derma skincare brand. Distributorship, franchise, and bulk supply opportunities.",
    creator: "@barekyne_skin",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: "https://barekyne.in",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-body">
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
