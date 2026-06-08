// src/app/skincare-distributor/[city]/page.tsx
// Barekyne Programmatic SEO — City Franchise Landing Pages
// Drop-in component for Next.js App Router. Global <Layout> is applied by parent layout.tsx.

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCitySEOData, getAllCitySlugs } from "@/lib/seo-data";
import ContactForm from "@/components/shared/ContactForm";

// ─── Static Generation ────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllCitySlugs();
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata(
  props: {
    params: Promise<{ city: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const data = getCitySEOData(params.city);
  if (!data) return {};

  const urgencyLabel =
    data.territoryStatus === "filling_fast"
      ? " ⚠ Filling Fast"
      : data.territoryStatus === "limited"
      ? " · Limited Slots"
      : "";

  return {
    title: `${data.metaTitle}${urgencyLabel}`,
    description: data.metaDescription,
    alternates: { canonical: data.canonicalUrl },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: data.canonicalUrl,
      siteName: "Barekyne",
      images: [{ url: data.ogImage, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.ogImage],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCustomCitySchema(city: string): any[] | null {
  switch (city) {
    case "ahmedabad":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/ahmedabad#service",
          "name": "Derma PCD Franchise — Ahmedabad",
          "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Ahmedabad, Gujarat. WHO-GMP clinical skincare portfolio; high ROI B2B opportunity.",
          "url": "https://barekyne.in/skincare-distributor/ahmedabad",
          "image": "https://barekyne.in/og/ahmedabad-franchise.jpg",
          "serviceType": "Derma PCD Franchise",
          "brand": {
            "@type": "Brand",
            "name": "Barekyne"
          },
          "provider": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in",
            "telephone": "+917027572757",
            "email": "info@barekyne.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "471, Sector 17 HUDA, Jagadhri",
              "addressLocality": "Yamunanagar",
              "addressRegion": "Haryana",
              "postalCode": "135001",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/barekyne.skin/",
              "https://x.com/barekyne_skin"
            ]
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Ahmedabad"
            },
            {
              "@type": "State",
              "name": "Gujarat"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ],
          "offers": {
            "@type": "Offer",
            "name": "Derma PCD Franchise — Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Ahmedabad, Gujarat.",
            "url": "https://barekyne.in/skincare-distributor/ahmedabad",
            "eligibleRegion": [
              {
                "@type": "City",
                "name": "Ahmedabad"
              },
              {
                "@type": "State",
                "name": "Gujarat"
              }
            ]
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://barekyne.in/skincare-distributor/ahmedabad#webpage",
          "url": "https://barekyne.in/skincare-distributor/ahmedabad",
          "name": "Barekyne — Derma PCD Franchise Ahmedabad",
          "description": "Barekyne derma PCD franchise in Ahmedabad with exclusive monopoly rights. WHO-GMP clinical skincare portfolio tailored for Gujarat. High ROI B2B opportunity.",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://barekyne.in/og/ahmedabad-franchise.jpg"
          },
          "about": {
            "@id": "https://barekyne.in/skincare-distributor/ahmedabad#service"
          },
          "mainEntity": {
            "@id": "https://barekyne.in/skincare-distributor/ahmedabad#service"
          }
        }
      ];
    case "bhubaneswar":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/bhubaneswar#service",
          "name": "Derma PCD Franchise — Bhubaneswar",
          "description": "Launch your derma franchise in Bhubaneswar with Barekyne. Exclusive monopoly rights across Odisha, WHO-GMP clinical skincare, high-ROI B2B model. Apply today.",
          "serviceType": "Derma PCD Franchise",
          "provider": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in",
            "logo": "https://barekyne.in/images/og-image.jpg",
            "telephone": "+917027572757",
            "email": "info@barekyne.in",
            "sameAs": [
              "https://www.instagram.com/barekyne.skin/",
              "https://x.com/barekyne_skin"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "471, Sector 17 HUDA, Jagadhri",
              "addressLocality": "Yamunanagar",
              "addressRegion": "Haryana",
              "postalCode": "135001",
              "addressCountry": "IN"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Bhubaneswar"
          },
          "image": "https://barekyne.in/og/bhubaneswar-franchise.jpg",
          "url": "https://barekyne.in/skincare-distributor/bhubaneswar",
          "offers": {
            "@type": "Offer",
            "name": "Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Bhubaneswar, Odisha."
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://barekyne.in/skincare-distributor/bhubaneswar#webpage",
          "url": "https://barekyne.in/skincare-distributor/bhubaneswar",
          "name": "Barekyne — Derma PCD Franchise Bhubaneswar",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://barekyne.in/og/bhubaneswar-franchise.jpg"
          },
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://barekyne.in/#website",
            "url": "https://barekyne.in",
            "name": "Barekyne"
          },
          "mainEntity": {
            "@id": "https://barekyne.in/skincare-distributor/bhubaneswar#service"
          }
        }
      ];
    case "hyderabad":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#organization",
          "name": "Barekyne",
          "url": "https://barekyne.in",
          "logo": "https://barekyne.in/images/og-image.jpg",
          "description": "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "10-50"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "knowsAbout": [
            "Clinical Skincare",
            "Dermatology Products",
            "Skincare Distribution",
            "PCD Franchise",
            "B2B Skincare Supply"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://barekyne.in/#localbusiness",
          "name": "Barekyne",
          "description": "Premium clinical derma luxury skincare brand for distributors, clinics, and retailers across India.",
          "url": "https://barekyne.in",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "priceRange": "₹₹",
          "image": "https://barekyne.in/images/og-image.jpg",
          "parentOrganization": {
            "@id": "https://barekyne.in/#organization"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/hyderabad/#service",
          "name": "Derma PCD Franchise — Hyderabad",
          "description": "Exclusive derma franchise opportunity in Hyderabad. Barekyne offers clinical skincare, monopoly territory rights, WHO-GMP manufacturing. Partner with India's top derma brand.",
          "serviceType": "Derma PCD Franchise",
          "url": "https://barekyne.in/skincare-distributor/hyderabad",
          "image": "https://barekyne.in/og/hyderabad-franchise.jpg",
          "provider": {
            "@id": "https://barekyne.in/#organization"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Hyderabad"
            },
            {
              "@type": "State",
              "name": "Telangana"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ],
          "offers": {
            "@type": "Offer",
            "name": "Derma PCD Franchise — Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Hyderabad, Telangana.",
            "url": "https://barekyne.in/skincare-distributor/hyderabad"
          }
        }
      ];
    case "indore":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/indore#service",
          "name": "Barekyne — Derma PCD Franchise Indore",
          "description": "Exclusive derma PCD franchise in Indore for Central India coverage. Barekyne clinical skincare with monopoly rights across MP. High-growth B2B opportunity.",
          "url": "https://barekyne.in/skincare-distributor/indore",
          "image": "https://barekyne.in/og/indore-franchise.jpg",
          "serviceType": "Derma PCD Franchise",
          "provider": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Indore"
            },
            {
              "@type": "State",
              "name": "Madhya Pradesh"
            }
          ],
          "offers": {
            "@type": "Offer",
            "name": "Derma PCD Franchise — Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Indore, Madhya Pradesh."
          }
        }
      ];
    case "jaipur":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#organization",
          "name": "Barekyne",
          "url": "https://barekyne.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://barekyne.in/images/og-image.jpg"
          },
          "image": "https://barekyne.in/images/og-image.jpg",
          "description": "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "foundingDate": "2024",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/jaipur#service",
          "name": "Barekyne — Derma PCD Franchise Jaipur",
          "description": "Exclusive derma franchise in Jaipur for Rajasthan coverage. Barekyne clinical skincare — monopoly rights, WHO-GMP, high-margin portfolio. B2B opportunity for serious investors.",
          "serviceType": "Derma PCD Franchise",
          "provider": {
            "@id": "https://barekyne.in/#organization"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Jaipur"
            },
            {
              "@type": "State",
              "name": "Rajasthan"
            }
          ],
          "image": "https://barekyne.in/og/jaipur-franchise.jpg",
          "offers": {
            "@type": "Offer",
            "name": "Derma PCD Franchise — Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Jaipur, Rajasthan.",
            "url": "https://barekyne.in/skincare-distributor/jaipur"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://barekyne.in/skincare-distributor/jaipur"
          }
        }
      ];
    case "kochi":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/kochi#service",
          "name": "Derma PCD Franchise — Kochi",
          "description": "Join Barekyne's derma franchise network in Kochi for Kerala coverage. WHO-GMP clinical skincare, monopoly territory rights, high-margin portfolio. Apply today.",
          "url": "https://barekyne.in/skincare-distributor/kochi",
          "image": "https://barekyne.in/og/kochi-franchise.jpg",
          "serviceType": "Derma PCD franchise and skincare distribution",
          "areaServed": [
            {
              "@type": "City",
              "name": "Kochi"
            },
            {
              "@type": "State",
              "name": "Kerala"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ],
          "provider": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          },
          "offers": {
            "@type": "Offer",
            "name": "Exclusive territory rights — Kochi, Kerala",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Kochi, Kerala."
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://barekyne.in/skincare-distributor/kochi#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://barekyne.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Derma PCD Franchise — Kochi",
              "item": "https://barekyne.in/skincare-distributor/kochi"
            }
          ]
        }
      ];
    case "mohali":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/mohali#service",
          "name": "Derma PCD Franchise — Mohali",
          "description": "Exclusive derma PCD franchise opportunity for Barekyne clinical skincare distribution in Mohali, Punjab with exclusive territory rights and direct brand support.",
          "serviceType": "Derma PCD Franchise",
          "url": "https://barekyne.in/skincare-distributor/mohali",
          "image": "https://barekyne.in/og/mohali-franchise.jpg",
          "provider": {
            "@type": "Organization",
            "@id": "https://barekyne.in/#organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          },
          "areaServed": {
            "@type": "City",
            "name": "Mohali",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            }
          },
          "offers": {
            "@type": "Offer",
            "name": "Exclusive Territory Rights — Mohali",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Mohali, Punjab."
          }
        }
      ];
    case "mumbai":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://barekyne.in/#organization",
          "name": "Barekyne",
          "url": "https://barekyne.in",
          "logo": "https://barekyne.in/images/og-image.jpg",
          "description": "Premium clinical derma luxury skincare brand for distributors, wholesalers, pharmacies, clinics & franchise partners across India.",
          "telephone": "+917027572757",
          "email": "info@barekyne.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "471, Sector 17 HUDA, Jagadhri",
            "addressLocality": "Yamunanagar",
            "addressRegion": "Haryana",
            "postalCode": "135001",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/barekyne.skin/",
            "https://x.com/barekyne_skin"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "10-50"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/mumbai#service",
          "name": "Derma PCD Franchise — Mumbai",
          "url": "https://barekyne.in/skincare-distributor/mumbai",
          "description": "Exclusive clinical skincare franchise in Mumbai offering monopoly territory rights and high‑margin WHO‑GMP derma SKUs.",
          "serviceType": "Derma PCD Franchise and Skincare Distribution",
          "provider": {
            "@id": "https://barekyne.in/#organization"
          },
          "brand": {
            "@id": "https://barekyne.in/#organization"
          },
          "image": "https://barekyne.in/og/mumbai-franchise.jpg",
          "areaServed": [
            {
              "@type": "City",
              "name": "Mumbai"
            },
            {
              "@type": "State",
              "name": "Maharashtra"
            },
            {
              "@type": "Country",
              "name": "India"
            }
          ],
          "offers": [
            {
              "@type": "Offer",
              "url": "https://barekyne.in/skincare-distributor/mumbai",
              "name": "Exclusive Territory Rights — Mumbai",
              "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Mumbai, Maharashtra."
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://barekyne.in/skincare-distributor/mumbai#webpage",
          "url": "https://barekyne.in/skincare-distributor/mumbai",
          "about": {
            "@id": "https://barekyne.in/skincare-distributor/mumbai#service"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://barekyne.in/og/mumbai-franchise.jpg"
          },
          "breadcrumb": {
            "@id": "https://barekyne.in/skincare-distributor/mumbai#breadcrumb"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://barekyne.in/skincare-distributor/mumbai#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://barekyne.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Mumbai Skincare Distributor",
              "item": "https://barekyne.in/skincare-distributor/mumbai"
            }
          ]
        }
      ];
    case "pune":
      return [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://barekyne.in/skincare-distributor/pune#service",
          "name": "Derma PCD Franchise — Pune",
          "description": "Partner with Barekyne for an exclusive derma PCD franchise in Pune. Clinical-grade skincare, WHO-GMP manufacturing, monopoly territory rights. High-ROI opportunity.",
          "url": "https://barekyne.in/skincare-distributor/pune",
          "image": "https://barekyne.in/og/pune-franchise.jpg",
          "serviceType": "Derma PCD Franchise",
          "provider": {
            "@type": "Organization",
            "name": "Barekyne",
            "url": "https://barekyne.in"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Pune"
            },
            {
              "@type": "State",
              "name": "Maharashtra"
            }
          ],
          "offers": {
            "@type": "Offer",
            "name": "Derma PCD Franchise — Exclusive Territory Rights",
            "description": "Exclusive monopoly territory rights for Barekyne clinical skincare distribution in Pune, Maharashtra."
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://barekyne.in/skincare-distributor/pune#webpage",
          "url": "https://barekyne.in/skincare-distributor/pune",
          "name": "Barekyne — Derma PCD Franchise Pune",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://barekyne.in/og/pune-franchise.jpg"
          },
          "mainEntity": {
            "@id": "https://barekyne.in/skincare-distributor/pune#service"
          }
        }
      ];
    default:
      return null;
  }
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function CityFranchisePage(
  props: {
    params: Promise<{ city: string }>;
  }
) {
  const params = await props.params;
  const data = getCitySEOData(params.city);
  if (!data) notFound();

  const urgencyBadgeColor =
    data.territoryStatus === "filling_fast"
      ? "bg-red-100 text-red-700 border-red-200"
      : data.territoryStatus === "limited"
      ? "bg-amber-100 text-amber-700 border-amber-200"
      : "bg-emerald-100 text-emerald-700 border-emerald-200";

  const urgencyText =
    data.territoryStatus === "filling_fast"
      ? "⚠ Filling Fast — Limited Territories Remaining"
      : data.territoryStatus === "limited"
      ? "⚡ Limited Territories Available"
      : "✅ Open Territory — First-Mover Advantage";

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Barekyne — Derma PCD Franchise ${data.cityDisplay}`,
    description: data.metaDescription,
    url: data.canonicalUrl,
    image: `https://barekyne.in${data.ogImage}`,
    areaServed: {
      "@type": "State",
      name: data.state,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: data.state,
    },
    makesOffer: {
      "@type": "Offer",
      name: "Derma PCD Franchise — Exclusive Territory Rights",
      description: `Exclusive monopoly territory rights for Barekyne clinical skincare distribution in ${data.cityDisplay}, ${data.state}.`,
    },
  };

  const customSchema = getCustomCitySchema(params.city);
  const schemaToUse = customSchema || structuredData;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToUse) }}
      />

      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-24 px-6 overflow-hidden">
        {/* Decorative background grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-[0.04]"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Territory Status Badge */}
          <div className="mb-6">
            <span
              className={`inline-block border text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full ${urgencyBadgeColor}`}
            >
              {urgencyText}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            {data.h1}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
            {data.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact-franchise"
              className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-lg shadow-amber-400/20"
            >
              Apply for {data.cityDisplay} Territory →
            </a>
          </div>
        </div>
      </section>

      {/* ── MARKET INSIGHT SECTION ───────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Market Analysis — {data.cityDisplay}
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why {data.cityDisplay} Represents a High-ROI Derma Franchise
              Territory
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {data.marketInsight}
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              {data.regionalDermaFacts}
            </p>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <div className="text-3xl font-black text-slate-900 mb-1">
                {data.population}
              </div>
              <div className="text-sm text-slate-500">Metro Population</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <div className="text-3xl font-black text-slate-900 mb-1">
                {data.availableDistricts.length}
              </div>
              <div className="text-sm text-slate-500">Open Districts</div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
              <div className="text-xl font-black text-amber-700 mb-1">
                Monopoly Rights
              </div>
              <div className="text-sm text-slate-500">
                Exclusive territory — no internal price competition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE DISTRICTS ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Open Districts in {data.state}
          </h2>
          <p className="text-slate-500 mb-10 text-sm">
            Territories marked open are available for exclusive franchise
            allocation. First-confirmed partner takes the territory.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.availableDistricts.map((district) => (
              <div
                key={district}
                className="bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                {district}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PORTFOLIO ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-3 block">
            The Clinical Portfolio
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Five WHO-GMP Clinical SKUs Engineered for Indian Skin
          </h2>
          <p className="text-slate-500 mb-12 max-w-2xl">
            Not 200 generic products. A focused, high-velocity clinical range
            where every SKU has a dermatologist prescription rationale and a
            defensible active concentration.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Vitamin C 20% Serum",
                actives: "20% Vit C · 2% Niacinamide · Hyaluronic Acid",
                indication: "Hyperpigmentation · PIH · Dull Skin",
                mechanism: "Tyrosinase inhibition + melanosome transfer blockade",
              },
              {
                name: "Hybrid Invisible Sunscreen SPF 50",
                actives: "Physical + Chemical dual-filter system",
                indication: "Photoprotection · PIH Prevention",
                mechanism: "Zero white cast on Fitzpatrick III–VI · Sweat resistant",
              },
              {
                name: "Face Wash",
                actives: "Glycolic Acid · Salicylic Acid · Vitamin C · Cica",
                indication: "Acne · Oily Skin · Comedonal Acne",
                mechanism: "AHA + BHA dual exfoliation with anti-inflammatory modulation",
              },
              {
                name: "Advanced Night Cream",
                actives: "Retinol · Ceramides · Peptides",
                indication: "Barrier Repair · Anti-Ageing · TEWL Reduction",
                mechanism: "Collagen synthesis + ceramide barrier restoration",
              },
              {
                name: "Face & Body Lotion",
                actives: "Vitamin C · Dermawhite™ Technology",
                indication: "Year-round Hydration · Brightening",
                mechanism: "Advanced depigmentation technology · 100ml",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="border border-slate-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-bold text-slate-900 mb-2 text-base">
                  {product.name}
                </h3>
                <p className="text-xs text-amber-700 font-mono mb-3">
                  {product.actives}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  <strong className="text-slate-700">Indication:</strong>{" "}
                  {product.indication}
                </p>
                <p className="text-xs text-slate-400">{product.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B COMPLIANCE & GEO COMPARISON MATRIX ───────────────────── */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 block">
            AI-Verified Standards
          </span>
          <h2 className="text-3xl font-bold mb-8">
            Pharma-Grade Standards & Direct B2B Economics
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">National Regulatory Compliance</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Every Barekyne formulation complies strictly with the <strong>Drugs and Cosmetics Act, 1940</strong>. Manufacturing is conducted exclusively in <strong>WHO-GMP</strong> and <strong>ISO 9001:2015</strong> certified facilities to ensure pharmaceutical-grade consistency and safety.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">✓ <strong>CDSCO Approved</strong> active ingredient percentages</li>
                <li className="flex items-center gap-2">✓ Certified cruelty-free, paraben-free formulations</li>
                <li className="flex items-center gap-2">✓ Stabilizer-protected active ingredient delivery systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Direct-From-Manufacturer Profitability</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                By bypassing third-party super stockists and traditional distributors, we guarantee direct-from-manufacturer supply lines, enabling industry-leading ROI on B2B skincare procurement.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">✓ <strong>50% to 58% net margins</strong> on high-MRP products</li>
                <li className="flex items-center gap-2">✓ Initial franchise packages starting at <strong>INR 50,000</strong></li>
                <li className="flex items-center gap-2">✓ Continuous scientific visual aid & detailing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY INLINE FORM ──────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-400 to-amber-500 py-20 px-6" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Secure Your {data.cityDisplay} Franchise Territory Today
            </h2>
            <p className="text-slate-800 text-lg leading-relaxed">
              Once a territory is allocated, it is closed. Exclusive monopoly
              rights are granted to the first confirmed franchise partner in each
              district. Fill the form below — our B2B team reviews applications within 48 hours.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <ContactForm defaultInquiryType="Franchise Inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
