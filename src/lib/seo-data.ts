// Programmatic SEO Data: Cities, route templates, and unique content blocks
// This data layer powers the city-specific landing pages for distributor, franchise, and product searches.

export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  demandLevel: "Very High" | "High" | "Growing";
  highlights: string[];
}

export const SEO_CITIES: CityData[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    population: "2 Cr+",
    demandLevel: "Very High",
    highlights: [
      "India's capital with massive retail pharmacy network",
      "Highest concentration of dermatology clinics",
      "Premium skincare consumer base with high spending power",
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    population: "15 Lakh+",
    demandLevel: "Very High",
    highlights: [
      "Corporate hub with affluent skincare-conscious population",
      "Rapidly growing premium beauty and wellness market",
      "Home to top dermatology and aesthetic clinics",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    population: "10 Lakh+",
    demandLevel: "High",
    highlights: [
      "One of NCR's fastest-growing markets for premium skincare",
      "Expanding retail and pharmacy distribution network",
      "Strong demand from IT professionals and young consumers",
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    population: "12 Lakh+",
    demandLevel: "High",
    highlights: [
      "High per-capita income with strong premium product adoption",
      "Strategic gateway to Punjab and Himachal Pradesh markets",
      "Well-established pharmacy and clinic infrastructure",
    ],
  },
  {
    slug: "mohali",
    name: "Mohali",
    state: "Punjab",
    population: "5 Lakh+",
    demandLevel: "Growing",
    highlights: [
      "Emerging IT hub with rising demand for premium skincare",
      "Part of the Chandigarh Tricity growth corridor",
      "Expanding healthcare and wellness ecosystem",
    ],
  },
  {
    slug: "zirakpur",
    name: "Zirakpur",
    state: "Punjab",
    population: "3 Lakh+",
    demandLevel: "Growing",
    highlights: [
      "Rapidly developing residential hub near Chandigarh",
      "Growing pharmacy and retail distribution opportunities",
      "Untapped market with minimal premium skincare competition",
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    population: "2.1 Cr+",
    demandLevel: "Very High",
    highlights: [
      "India's financial capital with the largest beauty and skincare market",
      "Home to top dermatologists and aesthetic clinics",
      "Massive pharmacy chain and retail network",
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    population: "80 Lakh+",
    demandLevel: "High",
    highlights: [
      "Major IT and education hub with skincare-aware consumers",
      "Growing premium healthcare and dermatology sector",
      "Strong wholesale and distribution infrastructure",
    ],
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    population: "1.3 Cr+",
    demandLevel: "Very High",
    highlights: [
      "India's Silicon Valley with highest premium skincare adoption",
      "Massive demand from tech professionals for clinical skincare",
      "Leading dermatology and aesthetic clinic market in South India",
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    population: "1 Cr+",
    demandLevel: "Very High",
    highlights: [
      "Major pharma and healthcare hub with strong distribution networks",
      "Rapidly growing premium beauty market",
      "Strategic base for South and Central India distribution",
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    population: "1.1 Cr+",
    demandLevel: "High",
    highlights: [
      "South India's healthcare capital with strong dermatology network",
      "Well-established pharmacy distribution infrastructure",
      "Growing consumer awareness for clinical skincare products",
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    population: "80 Lakh+",
    demandLevel: "High",
    highlights: [
      "Gujarat's commercial capital with thriving retail market",
      "Strong entrepreneurial culture ideal for franchise partnerships",
      "Growing demand for premium derma skincare products",
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    population: "40 Lakh+",
    demandLevel: "High",
    highlights: [
      "Rajasthan's largest city with expanding premium beauty market",
      "Gateway to distribution across western Rajasthan",
      "Strong pharmacy and medical store network",
    ],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    population: "35 Lakh+",
    demandLevel: "High",
    highlights: [
      "UP's capital with rapidly modernizing retail infrastructure",
      "Massive untapped market for premium clinical skincare",
      "Strategic hub for North India distribution coverage",
    ],
  },
];

// Route template types for programmatic SEO
export type ProgrammaticRouteType = "distributor" | "franchise" | "product";

export interface ProgrammaticPageConfig {
  type: ProgrammaticRouteType;
  routePrefix: string;
  titleTemplate: string;
  descriptionTemplate: string;
  h1Template: string;
  introTemplate: string;
  ctaText: string;
  ctaLink: string;
}

export const PROGRAMMATIC_ROUTES: ProgrammaticPageConfig[] = [
  {
    type: "distributor",
    routePrefix: "skincare-distributor",
    titleTemplate: "Skincare Distributor in {city} — Barekyne Distributorship",
    descriptionTemplate:
      "Become a Barekyne skincare distributor in {city}, {state}. Get exclusive monopoly rights, high-margin clinical derma products, PAN India supply chain, and dedicated support. Apply now.",
    h1Template: "Skincare Distributor in {city}",
    introTemplate:
      "Looking for a premium skincare distributorship opportunity in {city}? Barekyne offers exclusive territorial rights, industry-leading margins, and a complete support ecosystem for distributors in {city}, {state}. Our clinical-grade luxury skincare products are in high demand across pharmacies, clinics, and retail outlets.",
    ctaText: "Apply for Distributorship",
    ctaLink: "/contact?type=distributor",
  },
  {
    type: "franchise",
    routePrefix: "derma-franchise",
    titleTemplate: "Derma Franchise in {city} — Barekyne PCD Skincare Franchise",
    descriptionTemplate:
      "Start a derma PCD franchise in {city}, {state} with Barekyne. Get monopoly rights, premium clinical skincare products, marketing support, and high ROI. Franchise inquiry open.",
    h1Template: "Derma Franchise Opportunity in {city}",
    introTemplate:
      "Barekyne offers a premium derma PCD franchise opportunity in {city}, {state}. With monopoly rights, clinical-grade formulations, and comprehensive business support, our franchise model is designed for scalable profitability in {city}'s growing skincare market.",
    ctaText: "Inquire About Franchise",
    ctaLink: "/contact?type=franchise",
  },
];

// Product-specific city SEO pages
export const PRODUCT_SEO_ROUTES = [
  {
    productSlug: "sunscreen-spf50",
    routePrefix: "best-sunscreen-spf50",
    titleTemplate: "Best Sunscreen SPF 50 in {city} — Barekyne UV Protection",
    descriptionTemplate:
      "Buy the best SPF 50 PA++++ sunscreen in {city} from Barekyne. Lightweight, non-greasy, with Hyaluronic Acid & Kakadu Plum. Available for bulk & wholesale orders in {city}, {state}.",
    h1Template: "Best Sunscreen SPF 50 in {city}",
  },
  {
    productSlug: "vitamin-c-serum",
    routePrefix: "best-vitamin-c-serum",
    titleTemplate: "Best Vitamin C Serum in {city} — Barekyne Brightening Serum",
    descriptionTemplate:
      "Get the best Vitamin C 10% brightening serum in {city}. Barekyne serum with Niacinamide & Hyaluronic Acid. Wholesale & clinic supply available in {city}, {state}.",
    h1Template: "Best Vitamin C Serum in {city}",
  },
  {
    productSlug: "night-cream",
    routePrefix: "best-night-cream",
    titleTemplate: "Best Night Cream in {city} — Barekyne Overnight Repair",
    descriptionTemplate:
      "Discover the best night cream in {city} by Barekyne. With Kojic Acid, Niacinamide & Alpha Arbutin for overnight brightening. Available for distributors and clinics in {city}, {state}.",
    h1Template: "Best Night Cream in {city}",
  },
  {
    productSlug: "tricid-face-wash",
    routePrefix: "best-face-wash",
    titleTemplate: "Best Face Wash in {city} — Barekyne Tricid Triple-Action Cleanser",
    descriptionTemplate:
      "Shop the best triple-acid face wash in {city}. Barekyne Tricid with Glycolic, Salicylic & Vitamin C for deep cleansing. Bulk orders welcome in {city}, {state}.",
    h1Template: "Best Face Wash in {city}",
  },
  {
    productSlug: "ol-season-lotion",
    routePrefix: "best-body-lotion",
    titleTemplate: "Best Body Lotion in {city} — Barekyne OL-Season Moisturizer",
    descriptionTemplate:
      "Get the best all-season body lotion in {city}. Barekyne OL-Season with Vitamin C & Dermawhite™ for year-round hydration. Wholesale available in {city}, {state}.",
    h1Template: "Best Body Lotion in {city}",
  },
];

// Utility: Replace {city} and {state} placeholders in templates
export function fillTemplate(template: string, city: CityData): string {
  return template
    .replace(/{city}/g, city.name)
    .replace(/{state}/g, city.state);
}
