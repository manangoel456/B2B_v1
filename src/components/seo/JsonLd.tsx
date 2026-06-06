interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Barekyne",
    description:
      "Premium clinical derma luxury skincare brand for distributors, clinics, and retailers across India.",
    url: "https://barekyne.in",
    telephone: "+917027572757",
    email: "info@barekyne.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "471, Sector 17 HUDA, Jagadhri",
      addressLocality: "Yamunanagar",
      addressRegion: "Haryana",
      postalCode: "135001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/barekyne.skin/",
      "https://x.com/barekyne_skin",
    ],
    priceRange: "₹₹",
    image: "https://barekyne.in/images/og-image.jpg",
  };
  return <JsonLd data={data} />;
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  sku,
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  sku: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://barekyne.in${image}`,
    sku,
    brand: { "@type": "Brand", name: "Barekyne" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Barekyne" },
    },
  };
  return <JsonLd data={data} />;
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: readonly { readonly question: string; readonly answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Barekyne",
      url: "https://barekyne.in",
    },
  };
  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Barekyne",
    url: "https://barekyne.in",
    logo: "https://barekyne.in/images/og-image.jpg",
    description:
      "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India. WHO-GMP certified, CDSCO approved.",
    telephone: "+917027572757",
    email: "info@barekyne.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "471, Sector 17 HUDA, Jagadhri",
      addressLocality: "Yamunanagar",
      addressRegion: "Haryana",
      postalCode: "135001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/barekyne.skin/",
      "https://x.com/barekyne_skin",
    ],
    foundingDate: "2024",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10-50" },
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Clinical Skincare",
      "Dermatology Products",
      "Skincare Distribution",
      "PCD Franchise",
      "B2B Skincare Supply",
      "Derma PCD Franchise",
      "WHO-GMP Certified Skincare",
      "Melanin-Rich Skin Science",
      "Anti-Pigmentation Treatments",
      "Monopoly Pharma Franchise",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Barekyne Clinical Skincare Products",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Clinical Serums",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Vitamin C 20% Serum",
                description:
                  "20% L-Ascorbic Acid + 2% Niacinamide serum for hyperpigmentation, PIH, and melasma treatment",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Photoprotection",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Hybrid Invisible Sunscreen SPF 50",
                description:
                  "Zero white cast broad-spectrum sunscreen for Fitzpatrick IV-VI skin with dual physical-chemical filter matrix",
              },
            },
          ],
        },
      ],
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Derma PCD Franchise",
        description:
          "Exclusive district-level monopoly rights for clinical skincare distribution with 50-58% margins. Starting investment INR 50,000.",
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "Offer",
        name: "Wholesale Skincare Supply",
        description:
          "Direct-from-manufacturer wholesale skincare supply. Minimum order INR 15,000.",
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "Offer",
        name: "Clinic & Doctor Supply Program",
        description:
          "Institutional bulk rates for dermatology clinics, hospitals, and aesthetic centers with patient education materials.",
        areaServed: { "@type": "Country", name: "India" },
      },
    ],
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Barekyne",
    alternateName: [
      "Barekyne Skincare",
      "Barekyne Clinical Skincare",
      "Barekyne Derma Franchise",
    ],
    url: "https://barekyne.in",
    description:
      "India's premium clinical derma PCD franchise and skincare distributorship. WHO-GMP certified products with exclusive monopoly rights and 50%+ margins.",
    publisher: {
      "@type": "Organization",
      name: "Barekyne",
      url: "https://barekyne.in",
    },
    inLanguage: "en-IN",
  };
  return <JsonLd data={data} />;
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
  return <JsonLd data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider || "Barekyne",
      url: "https://barekyne.in",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed || "India",
    },
    ...(serviceType && { serviceType }),
  };
  return <JsonLd data={data} />;
}
