import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { LocalBusinessJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Derma PCD Franchise & Skincare Distributorship in India | Barekyne",
    template: "%s | Barekyne",
  },
  description:
    "India's premium clinical derma PCD franchise with monopoly rights. Barekyne offers exclusive skincare distributorship across 14 cities — WHO-GMP products, high margins. Apply today.",
  keywords: [
    "derma PCD franchise",
    "derma PCD pharma franchise",
    "PCD franchise for derma products",
    "skincare distributorship India",
    "derma franchise company",
    "best derma franchise company in India",
    "skincare distributors India",
    "monopoly pharma franchise",
    "clinical skincare franchise",
    "derma products distributor India",
    "skincare franchise India",
    "wholesale skincare India",
    "derma PCD franchise Mohali",
    "cosmetic franchise Chandigarh",
    "anti pigmentation PCD franchise",
    "melanin-rich skin franchise",
    "wholesale skincare suppliers India",
    "WHO-GMP certified derma products",
    "dermatologist recommended products wholesale",
    "CDSCO approved derma franchise",
    "skincare PCD franchise 50 margin"
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
    title: "Derma PCD Franchise & Skincare Distributorship in India | Barekyne",
    description:
      "India's premium clinical derma PCD franchise with monopoly rights. Barekyne offers exclusive skincare distributorship across 14 cities — WHO-GMP products, high margins.",
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
    title: "Derma PCD Franchise & Skincare Distributorship | Barekyne",
    description:
      "India's premium clinical derma PCD franchise with monopoly rights. Exclusive skincare distributorship across 14 cities.",
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
