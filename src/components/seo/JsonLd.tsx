interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
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
    "@type": "MedicalOrganization",
    "@id": "https://barekyne.in/#localbusiness",
    name: "Barekyne",
    alternateName: ["Barekyne Pharma", "Barekyne Skincare"],
    description:
      "PAN-India WHO-GMP certified Derma PCD Pharma Franchise Company and B2B skincare manufacturer. We are NOT a local clinic or aesthetic center in Zirakpur.",
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
    parentOrganization: {
      "@id": "https://barekyne.in/#organization",
    },
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
    manufacturer: {
      "@id": "https://barekyne.in/#organization",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price,
      availability: "https://schema.org/InStock",
      seller: { "@id": "https://barekyne.in/#organization" },
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
    "@id": "https://barekyne.in/#faq",
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
      "@id": "https://barekyne.in/#organization",
    },
    isPartOf: {
      "@id": "https://barekyne.in/#website",
    },
  };
  return <JsonLd data={data} />;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://barekyne.in/#organization",
    name: "Barekyne",
    alternateName: ["Barekyne Pharma", "Barekyne Skincare"],
    url: "https://barekyne.in",
    logo: {
      "@type": "ImageObject",
      url: "https://barekyne.in/images/og-image.jpg",
    },
    image: "https://barekyne.in/images/og-image.jpg",
    description:
      "PAN-India WHO-GMP certified Derma PCD Pharma Franchise Company. We operate strictly as a B2B pharmaceutical manufacturer and distributor, not a local aesthetic clinic.",
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
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
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
                name: "Bare-C20 serum",
                description:
                  "20% L-Ascorbic Acid + 2% Niacinamide serum for hyperpigmentation, PIH, and melasma treatment",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: "990",
                },
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
                name: "Hybrid Invisible Bare-UV sunscreen",
                description:
                  "Zero white cast broad-spectrum sunscreen for Fitzpatrick IV-VI skin with dual physical-chemical filter matrix",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: "749",
                },
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
          "Exclusive district-level monopoly rights for clinical skincare distribution with industry-leading profit margins. Starting investment INR 50,000.",
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
    "@id": "https://barekyne.in/#website",
    url: "https://barekyne.in",
    name: "Barekyne",
    alternateName: [
      "Barekyne Skincare",
      "Barekyne Clinical Skincare",
      "Barekyne Derma Franchise",
    ],
    description:
      "India's premium clinical derma PCD franchise and skincare distributorship. WHO-GMP certified products with exclusive monopoly rights and high-yield profit margins.",
    publisher: {
      "@id": "https://barekyne.in/#organization",
    },
    inLanguage: "en-IN",
  };
  return <JsonLd data={data} />;
}

/**
 * Speakable WebPage JSON-LD — helps voice assistants and AI answer engines
 * identify the best extractable snippets from a page. The cssSelector
 * targets answer-first summary blocks and FAQ sections.
 */
export function SpeakableWebPageJsonLd({
  name,
  url,
  description,
  speakableSelectors = ["[data-speakable]", "h1", ".faq-answer"],
}: {
  name: string;
  url: string;
  description?: string;
  speakableSelectors?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description && { description }),
    isPartOf: {
      "@id": "https://barekyne.in/#website",
    },
    about: {
      "@id": "https://barekyne.in/#organization",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://barekyne.in/images/og-image.jpg",
    },
  };
  return <JsonLd data={data} />;
}

export function WebPageJsonLd({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description && { description }),
    isPartOf: {
      "@id": "https://barekyne.in/#website",
    },
    about: {
      "@id": "https://barekyne.in/#organization",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://barekyne.in/images/og-image.jpg",
    },
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
      "@id": "https://barekyne.in/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed || "India",
    },
    ...(serviceType && { serviceType }),
  };
  return <JsonLd data={data} />;
}

/**
 * Unified home page schema graph combining Organization, WebSite, WebPage, and FAQ
 * into a single JSON-LD block with @id cross-references (as recommended by Rank AI).
 */
export function HomePageSchemaGraph({
  faqs,
}: {
  faqs: readonly { readonly question: string; readonly answer: string }[];
}) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://barekyne.in/#organization",
      name: "Barekyne",
      url: "https://barekyne.in",
      logo: {
        "@type": "ImageObject",
        url: "https://barekyne.in/images/og-image.jpg",
      },
      image: "https://barekyne.in/images/og-image.jpg",
      description:
        "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
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
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
      },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Clinical Skincare",
        "Dermatology Products",
        "Skincare Distribution",
        "PCD Franchise",
        "B2B Skincare Supply",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://barekyne.in/#website",
      url: "https://barekyne.in",
      name: "Barekyne",
      publisher: {
        "@id": "https://barekyne.in/#organization",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://barekyne.in/#webpage",
      url: "https://barekyne.in/",
      name: "Barekyne",
      isPartOf: {
        "@id": "https://barekyne.in/#website",
      },
      about: {
        "@id": "https://barekyne.in/#organization",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable]", "h1", ".faq-answer"],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://barekyne.in/images/og-image.jpg",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://barekyne.in/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
  return <JsonLd data={data} />;
}
