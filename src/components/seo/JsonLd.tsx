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
