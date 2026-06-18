// src/lib/seo-data.ts
// Barekyne Programmatic SEO Engine — City Landing Page Data
// DO NOT EDIT individual city blocks without updating all parallel fields.

export interface CitySEOData {
  city: string;                   // URL slug  e.g. "delhi"
  cityDisplay: string;            // Display name e.g. "Delhi"
  state: string;                  // Full state name
  stateCode: string;              // 2-letter state code
  region: string;                 // North | South | East | West | Central
  tier: 1 | 2 | 3;               // Market tier (affects copy urgency)
  population: string;             // Rough metro population for copy
  h1: string;                     // Primary H1 for city page
  metaTitle: string;              // <title> tag — max 60 chars
  metaDescription: string;        // Meta description — max 160 chars
  heroSubheadline: string;        // Hero section subtext
  marketInsight: string;          // City-specific market context paragraph
  territoryStatus: "open" | "limited" | "filling_fast"; // Urgency signal
  availableDistricts: string[];   // Districts still open in this region
  regionalDermaFacts: string;     // 1-2 sentences about local derma market
  canonicalUrl: string;           // Full canonical URL
  ogImage: string;                // OG image path (city-specific)
  structuredData: {               // JSON-LD Article schema fields
    datePublished: string;
    dateModified: string;
    authorName: string;
  };
}

export const CITY_SEO_DATA: CitySEOData[] = [
  {
    city: "delhi",
    cityDisplay: "Delhi",
    state: "Delhi (NCR)",
    stateCode: "DL",
    region: "North",
    tier: 1,
    population: "33 million+",
    h1: "Derma PCD Franchise in Delhi — Clinical Skincare Distributor Opportunity",
    metaTitle: "Derma PCD Franchise Delhi | Barekyne Clinical Skincare",
    metaDescription:
      "Join Barekyne's exclusive Derma PCD franchise in Delhi NCR. WHO-GMP clinical skincare, monopoly territory rights, high ROI. Apply for distributor partnership today.",
    heroSubheadline:
      "Exclusive Monopoly Territory Rights Across Delhi NCR — High-Margin Clinical Derma Portfolio Now Accepting Partners",
    marketInsight:
      "Delhi-NCR hosts India's highest concentration of premium dermatology clinics, aesthetic centres, and modern pharmacy chains. With over 4,200 registered dermatologists in the region and a rapidly growing skin-conscious upper-middle class, the clinical skincare market in Delhi represents a multi-crore recurring revenue opportunity for the right franchise partner.",
    territoryStatus: "limited",
    availableDistricts: [
      "South Delhi", "Dwarka", "Rohini", "Pitampura", "Faridabad",
      "Ghaziabad", "Noida Sector 50–137", "Greater Noida"
    ],
    regionalDermaFacts:
      "Delhi NCR accounts for approximately 18% of India's total premium dermatology product consumption. Post-inflammatory hyperpigmentation (PIH) and photoageing are the top two dermatological concerns in this high-UV, high-pollution urban zone.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/delhi",
    ogImage: "/og/delhi-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "mumbai",
    cityDisplay: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    region: "West",
    tier: 1,
    population: "21 million+",
    h1: "Derma PCD Franchise in Mumbai — Premium Skincare Distributorship Opportunity",
    metaTitle: "Derma PCD Franchise Mumbai | Barekyne Skincare Distributor",
    metaDescription:
      "Exclusive clinical skincare franchise in Mumbai. Barekyne offers WHO-GMP derma products, monopoly territory rights, and high-margin SKUs. Apply now for Mumbai distribution rights.",
    heroSubheadline:
      "Mumbai's Premier Clinical Skincare Franchise — Monopoly Rights Available Across Key Mumbai Districts",
    marketInsight:
      "Mumbai's affluent population and dense network of premium dermatology clinics in Bandra, Juhu, Andheri, and South Mumbai create an ideal environment for clinical skincare franchise growth. The city's high awareness of evidence-based skincare translates directly to faster prescription pull-through for clinical-grade products.",
    territoryStatus: "filling_fast",
    availableDistricts: [
      "Thane", "Navi Mumbai", "Kalyan-Dombivli", "Vasai-Virar",
      "Mira Road", "Borivali", "Kandivali", "Malad"
    ],
    regionalDermaFacts:
      "Mumbai's coastal humidity drives elevated rates of acne vulgaris and fungal skin conditions, creating strong recurring demand for Barekyne's Cicaglow facewash and Hybrid Sunscreen range.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/mumbai",
    ogImage: "/og/mumbai-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "bangalore",
    cityDisplay: "Bangalore",
    state: "Karnataka",
    stateCode: "KA",
    region: "South",
    tier: 1,
    population: "14 million+",
    h1: "Derma PCD Franchise in Bangalore — Clinical Skincare Distributor Opportunity",
    metaTitle: "Derma PCD Franchise Bangalore | Barekyne Skincare B2B",
    metaDescription:
      "Launch your derma franchise business in Bangalore with Barekyne. Exclusive WHO-GMP clinical skincare, monopoly rights, high-margin portfolio. Open territories available.",
    heroSubheadline:
      "Bengaluru's High-Income Tech Workforce Demands Clinical Skincare — Exclusive Franchise Rights Available Now",
    marketInsight:
      "Bangalore's tech-educated, high-disposable-income workforce has one of India's highest per-capita spends on prescription-grade skincare. Proximity to top-tier dermatology institutions and a growing aesthetics clinic culture in Indiranagar, Whitefield, and Koramangala makes this the highest-velocity derma market in South India.",
    territoryStatus: "filling_fast",
    availableDistricts: [
      "Electronic City", "Whitefield East", "Sarjapur Road",
      "Bannerghatta Road", "Tumkur Road Corridor", "Yelahanka"
    ],
    regionalDermaFacts:
      "Bangalore's year-round moderate climate paradoxically drives elevated UV exposure awareness, creating strong demand for SPF-focused products. Barekyne's Zero White Cast Bare-UV sunscreen is an exceptionally high-velocity SKU in this market.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/bangalore",
    ogImage: "/og/bangalore-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "pune",
    cityDisplay: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    region: "West",
    tier: 1,
    population: "7.4 million+",
    h1: "Derma PCD Franchise in Pune — Skincare Distributor & Pharma Franchise Opportunity",
    metaTitle: "Derma PCD Franchise Pune | Barekyne Clinical Skincare Distributor",
    metaDescription:
      "Partner with Barekyne for an exclusive derma PCD franchise in Pune. Clinical-grade skincare, WHO-GMP manufacturing, monopoly territory rights. High-ROI opportunity.",
    heroSubheadline:
      "Pune's Educated, Clinic-Forward Market Is Ready — Secure Your Exclusive Barekyne Franchise Territory Now",
    marketInsight:
      "Pune's blend of IT professionals, medical institutions, and a large student demographic creates a uniquely broad clinical skincare demand curve. Franchise partners in Pune benefit from both prescription-driven clinic sales and high-footfall premium pharmacy channel performance.",
    territoryStatus: "open",
    availableDistricts: [
      "Kothrud", "Baner", "Hinjewadi", "Wakad", "Pimpri-Chinchwad",
      "Hadapsar", "Koregaon Park", "Viman Nagar"
    ],
    regionalDermaFacts:
      "Pune's dual economy — corporate IT belt plus older residential areas — means franchise partners can target both dermatology clinic prescriptions and pharmacy OTC channels simultaneously for maximum revenue stacking.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/pune",
    ogImage: "/og/pune-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "hyderabad",
    cityDisplay: "Hyderabad",
    state: "Telangana",
    stateCode: "TG",
    region: "South",
    tier: 1,
    population: "10 million+",
    h1: "Derma PCD Franchise in Hyderabad — Clinical Skincare Distributor Opportunity",
    metaTitle: "Derma PCD Franchise Hyderabad | Barekyne B2B Skincare",
    metaDescription:
      "Exclusive derma franchise opportunity in Hyderabad. Barekyne offers clinical skincare, monopoly territory rights, WHO-GMP manufacturing. Partner with India's top derma brand.",
    heroSubheadline:
      "Hyderabad's Pharma Capital Status Meets Clinical Skincare — Your Exclusive Franchise Territory Awaits",
    marketInsight:
      "Hyderabad's dual identity as a pharma manufacturing hub and booming IT metro makes it exceptionally fertile ground for Barekyne's B2B model. The city's established pharma distributor networks can be rapidly onboarded, and the high-income Banjara Hills–Jubilee Hills corridor drives strong premium clinic demand.",
    territoryStatus: "open",
    availableDistricts: [
      "Secunderabad", "LB Nagar", "Uppal", "Miyapur", "Medchal",
      "Mahabubnagar district", "Nalgonda district"
    ],
    regionalDermaFacts:
      "Hyderabad's pharma ecosystem gives Barekyne franchise partners a unique advantage: many existing distributors already have established logistics networks and chemist/clinic relationships that dramatically reduce market-entry time.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/hyderabad",
    ogImage: "/og/hyderabad-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "chennai",
    cityDisplay: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    region: "South",
    tier: 1,
    population: "11 million+",
    h1: "Derma PCD Franchise in Chennai — Clinical Skincare Distributorship Opportunity",
    metaTitle: "Derma PCD Franchise Chennai | Barekyne Clinical Skincare",
    metaDescription:
      "Join Barekyne's derma PCD franchise network in Chennai. WHO-GMP clinical skincare formulated for South Indian skin tones. Monopoly territory rights available.",
    heroSubheadline:
      "Chennai's High-UV Coastal Climate Creates Massive Clinical Skincare Demand — Exclusive Territories Now Open",
    marketInsight:
      "Chennai's coastal climate, high UV index, and predominantly Fitzpatrick IV–VI skin tones create an exceptional clinical need for Barekyne's depigmentation and photoprotection range. The city's mature pharmaceutical distribution infrastructure supports rapid scale.",
    territoryStatus: "open",
    availableDistricts: [
      "Anna Nagar West", "Tambaram", "Sholinganallur", "Perambur",
      "Kancheepuram", "Chengalpattu", "Tiruvallur"
    ],
    regionalDermaFacts:
      "Chennai has one of India's highest concentrations of dermatology MBBS and MD residency programmes, meaning prescription pull-through from dermatologist recommendations is particularly strong in this market.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/chennai",
    ogImage: "/og/chennai-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "kolkata",
    cityDisplay: "Kolkata",
    state: "West Bengal",
    stateCode: "WB",
    region: "East",
    tier: 1,
    population: "15 million+",
    h1: "Derma PCD Franchise in Kolkata — Skincare Distributor Opportunity for East India",
    metaTitle: "Derma PCD Franchise Kolkata | Barekyne Derma B2B",
    metaDescription:
      "Exclusive clinical skincare franchise in Kolkata for East India coverage. Barekyne offers monopoly rights, WHO-GMP products, high-margin portfolio. Apply today.",
    heroSubheadline:
      "East India's Largest Market Is Underserved by Clinical Skincare — Seize the Kolkata Franchise Advantage Now",
    marketInsight:
      "Kolkata and the broader Bengal market represent one of India's most underserved clinical skincare territories, making first-mover franchise advantage disproportionately valuable. The city's dense pharmacy networks and growing number of aesthetic clinics in Salt Lake and New Town are ripe for clinical brand penetration.",
    territoryStatus: "open",
    availableDistricts: [
      "Salt Lake", "Rajarhat", "Howrah", "Barasat",
      "Asansol-Durgapur", "Siliguri", "Kalyani"
    ],
    regionalDermaFacts:
      "West Bengal's high humidity drives elevated rates of fungal infections and acne. Barekyne's Cicaglow facewash (Glycolic + Salicylic + Vitamin C) addresses the region's most prevalent dermatological concerns directly.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/kolkata",
    ogImage: "/og/kolkata-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "ahmedabad",
    cityDisplay: "Ahmedabad",
    state: "Gujarat",
    stateCode: "GJ",
    region: "West",
    tier: 1,
    population: "8.5 million+",
    h1: "Derma PCD Franchise in Ahmedabad — Clinical Skincare Distributor Opportunity",
    metaTitle: "Derma PCD Franchise Ahmedabad | Barekyne Clinical Skincare",
    metaDescription:
      "Barekyne derma PCD franchise in Ahmedabad with exclusive monopoly rights. WHO-GMP clinical skincare portfolio tailored for Gujarat. High ROI B2B opportunity.",
    heroSubheadline:
      "Gujarat's Entrepreneurial Capital Meets Clinical Skincare — Exclusive Barekyne Franchise Now Available in Ahmedabad",
    marketInsight:
      "Ahmedabad's strong entrepreneurial culture and established pharma distribution ecosystem make it ideal for Barekyne's PCD franchise model. The city's booming premium real estate corridors — Satellite, Prahlad Nagar, SG Highway — house a rapidly growing concentration of aesthetic clinics and premium pharmacies.",
    territoryStatus: "open",
    availableDistricts: [
      "Gandhinagar", "Sanand", "Narol", "Bopal",
      "Surat North", "Vadodara", "Rajkot"
    ],
    regionalDermaFacts:
      "Ahmedabad's extreme summer temperatures (routinely exceeding 42°C) create year-round, high-urgency demand for SPF protection. Barekyne's Hybrid Invisible Bare-UV sunscreen is positioned as a clinically essential SKU — not a cosmetic luxury — in this market.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/ahmedabad",
    ogImage: "/og/ahmedabad-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "jaipur",
    cityDisplay: "Jaipur",
    state: "Rajasthan",
    stateCode: "RJ",
    region: "North",
    tier: 2,
    population: "4 million+",
    h1: "Derma PCD Franchise in Jaipur — Clinical Skincare Distributor for Rajasthan",
    metaTitle: "Derma PCD Franchise Jaipur | Barekyne Skincare Distributor",
    metaDescription:
      "Exclusive derma franchise in Jaipur for Rajasthan coverage. Barekyne clinical skincare — monopoly rights, WHO-GMP, high-margin portfolio. B2B opportunity for serious investors.",
    heroSubheadline:
      "Rajasthan's Harsh Climate Creates Massive Unmet Clinical Skincare Demand — Exclusive Jaipur Territory Now Available",
    marketInsight:
      "Jaipur sits at the centre of one of India's most climatically extreme regions — extreme UV, intense dryness, and dust exposure create a high-burden dermatological environment. Franchise partners here benefit from a market with significant unmet clinical skincare need and minimal premium competition.",
    territoryStatus: "open",
    availableDistricts: [
      "Ajmer", "Alwar", "Jodhpur", "Udaipur",
      "Kota", "Bikaner", "Sikar"
    ],
    regionalDermaFacts:
      "Rajasthan's UV Index regularly exceeds 10 in summer months. Barekyne's Hybrid Invisible Bare-UV sunscreen and Bare-C20 serum form a high-velocity depigmentation protocol for this region's PIH-heavy patient population.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/jaipur",
    ogImage: "/og/jaipur-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "lucknow",
    cityDisplay: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    region: "North",
    tier: 2,
    population: "3.8 million+",
    h1: "Derma PCD Franchise in Lucknow — Clinical Skincare Distributor for UP",
    metaTitle: "Derma PCD Franchise Lucknow | Barekyne Derma UP",
    metaDescription:
      "Clinical skincare PCD franchise in Lucknow. Cover Uttar Pradesh with Barekyne's exclusive monopoly rights, WHO-GMP derma portfolio. Apply for UP franchise rights.",
    heroSubheadline:
      "UP's Largest City Is the Gateway to a 250 Million Population Market — Secure Your Lucknow Franchise Territory",
    marketInsight:
      "Lucknow serves as the commercial and medical hub for Uttar Pradesh — India's most populous state. A Barekyne franchise based in Lucknow can cascade into a state-wide distribution network covering Kanpur, Varanasi, Agra, and beyond, making the effective market reach extraordinary for the right partner.",
    territoryStatus: "open",
    availableDistricts: [
      "Kanpur", "Agra", "Varanasi", "Allahabad",
      "Meerut", "Bareilly", "Aligarh", "Moradabad"
    ],
    regionalDermaFacts:
      "UP's vast population and chronically under-served Tier 2 and Tier 3 skincare markets create a rare first-mover advantage. Clinical brands with established monopoly territories here are positioned for multi-decade dominance.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/lucknow",
    ogImage: "/og/lucknow-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "chandigarh",
    cityDisplay: "Chandigarh",
    state: "Punjab/Haryana",
    stateCode: "CH",
    region: "North",
    tier: 2,
    population: "1.2 million+ (tricity 2.5M+)",
    h1: "Derma PCD Franchise in Chandigarh — Premium Clinical Skincare Distributor",
    metaTitle: "Derma PCD Franchise Chandigarh | Barekyne Clinical B2B",
    metaDescription:
      "Exclusive derma PCD franchise in Chandigarh tricity. Barekyne clinical skincare with monopoly rights covering Punjab and Haryana. High-income market, high ROI.",
    heroSubheadline:
      "Chandigarh's High-Income Tricity Population Is Primed for Clinical Skincare — Exclusive Franchise Rights Available",
    marketInsight:
      "The Chandigarh Tricity (Chandigarh, Mohali, Panchkula) has one of India's highest per-capita incomes and an unusually health-conscious population. Premium dermatology clinics here command some of North India's highest consultation fees, creating excellent prescription pull-through for clinical skincare products.",
    territoryStatus: "open",
    availableDistricts: [
      "Mohali", "Panchkula", "Ludhiana", "Amritsar",
      "Jalandhar", "Ambala", "Patiala"
    ],
    regionalDermaFacts:
      "Punjab and Haryana's agricultural belt has high solar UV exposure, while urban Chandigarh drives high-end aesthetic clinic demand. Barekyne franchise partners can serve both segments simultaneously with different product mixes.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/chandigarh",
    ogImage: "/og/chandigarh-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "kochi",
    cityDisplay: "Kochi",
    state: "Kerala",
    stateCode: "KL",
    region: "South",
    tier: 2,
    population: "2.1 million+",
    h1: "Derma PCD Franchise in Kochi — Clinical Skincare Distributor for Kerala",
    metaTitle: "Derma PCD Franchise Kochi | Barekyne Kerala Derma B2B",
    metaDescription:
      "Join Barekyne's derma franchise network in Kochi for Kerala coverage. WHO-GMP clinical skincare, monopoly territory rights, high-margin portfolio. Apply today.",
    heroSubheadline:
      "Kerala's Health-Literate Population Demands Clinical Evidence — Exclusive Kochi Franchise Territory Now Open",
    marketInsight:
      "Kerala's exceptionally high health literacy and trust in clinical, evidence-based treatments make it one of India's most receptive markets for prescription-grade skincare. Barekyne's science-forward positioning aligns perfectly with the Keralite consumer's demand for ingredient transparency and clinical proof.",
    territoryStatus: "open",
    availableDistricts: [
      "Ernakulam", "Thrissur", "Kozhikode", "Thiruvananthapuram",
      "Kollam", "Malappuram", "Palakkad"
    ],
    regionalDermaFacts:
      "Kerala's year-round high humidity and tropical UV exposure creates persistent acne, hyperpigmentation, and TEWL-related skin barrier issues. Barekyne's Advanced Bare night cream (Ceramides + Retinol + Peptides) is exceptionally well-positioned for Kerala's barrier-repair need.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/kochi",
    ogImage: "/og/kochi-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "indore",
    cityDisplay: "Indore",
    state: "Madhya Pradesh",
    stateCode: "MP",
    region: "Central",
    tier: 2,
    population: "3.3 million+",
    h1: "Derma PCD Franchise in Indore — Clinical Skincare Distributor for Central India",
    metaTitle: "Derma PCD Franchise Indore | Barekyne Central India",
    metaDescription:
      "Exclusive derma PCD franchise in Indore for Central India coverage. Barekyne clinical skincare with monopoly rights across MP. High-growth B2B opportunity.",
    heroSubheadline:
      "Central India's Commercial Hub Is the Gateway to MP's Untapped Derma Market — Apply for Indore Franchise Rights",
    marketInsight:
      "Indore's rapid commercial growth and its role as Central India's business capital make it the ideal base for a franchise network spanning Madhya Pradesh, Chhattisgarh, and beyond. The city's expanding private hospital and aesthetic clinic ecosystem provides immediate institutional sales opportunities.",
    territoryStatus: "open",
    availableDistricts: [
      "Bhopal", "Jabalpur", "Gwalior", "Ujjain",
      "Raipur", "Bilaspur", "Rewa", "Sagar"
    ],
    regionalDermaFacts:
      "MP's diverse climate zones — from semi-arid Chambal to humid Mahakoshal — create a wide spectrum of dermatological conditions, meaning Barekyne's full 5-SKU portfolio sees strong demand across the region rather than single-product dependency.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/indore",
    ogImage: "/og/indore-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "bhubaneswar",
    cityDisplay: "Bhubaneswar",
    state: "Odisha",
    stateCode: "OD",
    region: "East",
    tier: 2,
    population: "1 million+ (metro 1.9M+)",
    h1: "Derma PCD Franchise in Bhubaneswar — Clinical Skincare Distributor for Odisha",
    metaTitle: "Derma PCD Franchise Bhubaneswar | Barekyne Odisha",
    metaDescription:
      "Launch your derma franchise in Bhubaneswar with Barekyne. Exclusive monopoly rights across Odisha, WHO-GMP clinical skincare, high-ROI B2B model. Apply today.",
    heroSubheadline:
      "Odisha's Emerging Healthcare Economy Is Ready for Clinical Skincare — Secure First-Mover Franchise Advantage Now",
    marketInsight:
      "Bhubaneswar's rapid development as Odisha's educational and healthcare capital means a rapidly growing base of dermatology clinics and health-conscious professionals. First-mover franchise partners here will establish dominant market positions before the inevitable influx of competitive brands.",
    territoryStatus: "open",
    availableDistricts: [
      "Cuttack", "Rourkela", "Berhampur", "Sambalpur",
      "Balasore", "Puri", "Jharsuguda"
    ],
    regionalDermaFacts:
      "Odisha's coastal and tropical climate drives high UV exposure and persistent hyperpigmentation concerns. The state's relatively nascent premium skincare market means Barekyne franchise partners face minimal competition for clinical brand shelf space.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/bhubaneswar",
    ogImage: "/og/bhubaneswar-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-01-01",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "mohali",
    cityDisplay: "Mohali",
    state: "Punjab",
    stateCode: "PB",
    region: "North",
    tier: 2,
    population: "2.5 million+ (tricity)",
    h1: "Derma PCD Franchise in Mohali — Clinical Skincare Distributor for Punjab & Tricity",
    metaTitle: "Derma PCD Franchise Mohali | Barekyne HQ — Punjab Skincare",
    metaDescription:
      "Exclusive derma PCD franchise in Mohali, Barekyne's headquarters. Clinical skincare with monopoly rights covering Punjab tricity. Premium B2B opportunity with direct brand support.",
    heroSubheadline:
      "Partner Directly with Barekyne's Headquarters — The Strongest Franchise Support in India Starts in Mohali",
    marketInsight:
      "Mohali sits at the heart of India's fastest-growing tricity corridor (Chandigarh-Mohali-Panchkula). As Barekyne's headquarters city, franchise partners here benefit from direct brand access, priority stock allocation, and the strongest logistical support in our network. The tricity's high-income demographic and dense dermatology clinic ecosystem make this territory exceptionally profitable.",
    territoryStatus: "limited",
    availableDistricts: [
      "Kharar", "Zirakpur", "Dera Bassi", "Rajpura",
      "Ropar", "Fatehgarh Sahib", "SAS Nagar"
    ],
    regionalDermaFacts:
      "Mohali's IT corridor and medical tourism hub drive exceptional demand for clinical-grade skincare. As Barekyne's home base, franchise partners here receive priority training, exclusive launch access, and direct relationship with our R&D and formulation team.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/mohali",
    ogImage: "/og/mohali-franchise.jpg",
    structuredData: {
      datePublished: "2024-01-15",
      dateModified: "2025-05-29",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "pune",
    cityDisplay: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    region: "West",
    tier: 1,
    population: "7 million+",
    h1: "Derma PCD Franchise in Pune — Premium Clinical Skincare Distributorship",
    metaTitle: "Derma PCD Franchise Pune | Barekyne Clinical Skincare",
    metaDescription:
      "Start a high-margin Derma PCD franchise in Pune with Barekyne. Exclusive monopoly rights, WHO-GMP clinical skincare products for dermatologists and clinics.",
    heroSubheadline:
      "Capitalize on Pune's Booming Aesthetic Clinic Market with Barekyne's Clinical Portfolio",
    marketInsight:
      "Pune's rapidly expanding IT demographic has created a massive surge in demand for premium dermatological treatments. The city boasts a high concentration of aesthetic clinics and premium pharmacies in areas like Koregaon Park, Kalyani Nagar, and Baner, making it an incredibly lucrative market for a clinical-grade B2B franchise.",
    territoryStatus: "limited",
    availableDistricts: [
      "Pimpri-Chinchwad", "Baner", "Koregaon Park", "Viman Nagar",
      "Kothrud", "Wakad", "Hinjawadi"
    ],
    regionalDermaFacts:
      "Pune's dry winters and humid summers require versatile skincare formulations. Barekyne's barrier-first hydration technology specifically appeals to this demographic, driving high repeat prescriptions.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/pune",
    ogImage: "/og/pune-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "hyderabad",
    cityDisplay: "Hyderabad",
    state: "Telangana",
    stateCode: "TG",
    region: "South",
    tier: 1,
    population: "10 million+",
    h1: "Derma PCD Franchise in Hyderabad — High-ROI Pharma Distributorship",
    metaTitle: "Derma PCD Franchise Hyderabad | Barekyne B2B Skincare",
    metaDescription:
      "Unlock monopoly rights for Barekyne's clinical skincare range in Hyderabad. High-margin derma PCD franchise opportunity for pharma distributors.",
    heroSubheadline:
      "Dominate India's Pharma Capital with Barekyne's WHO-GMP Clinical Skincare Franchise",
    marketInsight:
      "Hyderabad is synonymous with India's pharmaceutical and healthcare industry. For a B2B distributor, partnering with a WHO-GMP certified clinical brand like Barekyne allows you to penetrate Hyderabad's vast network of super-specialty hospitals, corporate pharmacy chains, and independent dermatology practices with immediate credibility.",
    territoryStatus: "filling_fast",
    availableDistricts: [
      "Banjara Hills", "Jubilee Hills", "Gachibowli", "Madhapur",
      "Kukatpally", "Secunderabad", "HITEC City"
    ],
    regionalDermaFacts:
      "Hyderabad's intense sun exposure makes photoprotection the #1 prescribed category. Barekyne's zero white-cast Zinc PCA Hybrid Sunscreen is perfectly positioned for this market.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/hyderabad",
    ogImage: "/og/hyderabad-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "chennai",
    cityDisplay: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    region: "South",
    tier: 1,
    population: "11 million+",
    h1: "Derma Franchise Company in Chennai — Clinical Skincare Monopoly",
    metaTitle: "Derma PCD Franchise Chennai | Barekyne Skincare Distributor",
    metaDescription:
      "Become the exclusive Barekyne distributor in Chennai. Premium clinical derma franchise offering WHO-GMP products and high net margins for B2B partners.",
    heroSubheadline:
      "Bring High-Efficacy Clinical Skincare to Chennai's Premium Dermatology Network",
    marketInsight:
      "Chennai has one of the most medically advanced healthcare infrastructures in India. Dermatologists here are highly selective and data-driven, requiring strict clinical backing for their prescriptions. Barekyne's transparent active ingredient profiles and stable formulations (especially our Ethyl Ascorbic Acid) perfectly meet Chennai's rigorous clinical standards.",
    territoryStatus: "open",
    availableDistricts: [
      "Anna Nagar", "Adyar", "T Nagar", "Velachery",
      "OMR", "Tambaram", "Guindy"
    ],
    regionalDermaFacts:
      "Chennai's year-round hot and highly humid coastal climate causes traditional Vitamin C (L-Ascorbic Acid) to oxidize rapidly. Barekyne's heat-stable 20% Ethyl Ascorbic Acid serum solves the biggest complaint among Chennai's dermatologists.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/chennai",
    ogImage: "/og/chennai-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "ahmedabad",
    cityDisplay: "Ahmedabad",
    state: "Gujarat",
    stateCode: "GJ",
    region: "West",
    tier: 1,
    population: "8 million+",
    h1: "Derma PCD Franchise in Ahmedabad — B2B Skincare Distributorship",
    metaTitle: "Derma PCD Franchise Ahmedabad | Barekyne Monopoly Rights",
    metaDescription:
      "Join Barekyne's premium derma franchise network in Ahmedabad. Secure district-level monopoly rights and industry-leading profit margins on WHO-GMP clinical skincare.",
    heroSubheadline:
      "High-Velocity Clinical Skincare for Gujarat's Most Dynamic B2B Market",
    marketInsight:
      "Ahmedabad is India's most strategically important B2B trading hub. For business-minded distributors looking for rapid inventory turnover, Barekyne's focused 6-SKU clinical ecosystem provides exceptional working capital efficiency compared to generic cosmetic brands with bloated, slow-moving catalogs.",
    territoryStatus: "limited",
    availableDistricts: [
      "Satellite", "Bodakdev", "Navrangpura", "Vastrapur",
      "Thaltej", "Bopal", "Maninagar"
    ],
    regionalDermaFacts:
      "The extreme dry heat of Ahmedabad's summers and high pollution levels create strong demand for Barekyne's Cicaglow facewash, which features paradoxical rebound hydration to protect the skin barrier while deep cleansing.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/ahmedabad",
    ogImage: "/og/ahmedabad-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "kolkata",
    cityDisplay: "Kolkata",
    state: "West Bengal",
    stateCode: "WB",
    region: "East",
    tier: 1,
    population: "15 million+",
    h1: "Derma PCD Franchise in Kolkata — Eastern India Skincare Distributorship",
    metaTitle: "Derma PCD Franchise Kolkata | Barekyne Premium Skincare",
    metaDescription:
      "Establish a high-yield Derma PCD franchise in Kolkata. Barekyne offers direct-from-manufacturer margins, WHO-GMP clinical products, and exclusivity.",
    heroSubheadline:
      "The Gateway to Eastern India's Premium Dermatology Market — Exclusive Distributorship Available",
    marketInsight:
      "Kolkata serves as the primary medical and pharmaceutical procurement hub for all of Eastern India and the Northeast. Securing a Barekyne monopoly franchise here positions you as the key supplier of premium clinical skincare for a vast, underserved geographical catchment area.",
    territoryStatus: "open",
    availableDistricts: [
      "Salt Lake", "New Town", "South Kolkata", "Ballygunge",
      "Alipore", "Park Street", "Howrah"
    ],
    regionalDermaFacts:
      "Kolkata's extreme humidity drives demand for lightweight, non-comedogenic formulations. Barekyne's Zinc PCA sebum-regulating sunscreen and fast-absorbing Kojic Acid Dipalmitate night cream are ideal for this climate.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/kolkata",
    ogImage: "/og/kolkata-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "chandigarh",
    cityDisplay: "Chandigarh",
    state: "Chandigarh",
    stateCode: "CH",
    region: "North",
    tier: 2,
    population: "1.2 million+",
    h1: "Derma PCD Franchise in Chandigarh — Clinical Skincare Distributorship",
    metaTitle: "Derma PCD Franchise Chandigarh | Barekyne Tricity Monopoly",
    metaDescription:
      "Start your derma PCD franchise in Chandigarh with Barekyne. High-margin clinical skincare, WHO-GMP certified, with exclusive tricity monopoly rights.",
    heroSubheadline:
      "Partner with a Clinical Luxury Brand in the Heart of India's Pharma Franchise Hub",
    marketInsight:
      "Chandigarh and its surrounding tricity area (Mohali/Panchkula) is the undisputed PCD pharma capital of India. While the market is flooded with generic cosmetic franchises, there is a massive gap for genuine, clinical-grade luxury dermatology brands. Barekyne offers you the opportunity to stand out from generic competition.",
    territoryStatus: "limited",
    availableDistricts: [
      "Sector 17", "Sector 35", "Manimajra", "Panchkula",
      "Zirakpur", "Kharar", "New Chandigarh"
    ],
    regionalDermaFacts:
      "Chandigarh's high per-capita income and extreme seasonal variations (harsh winters, intense summer sun) create year-round demand for Barekyne's complete AM/PM barrier-repair and photoprotection protocols.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/chandigarh",
    ogImage: "/og/chandigarh-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "jaipur",
    cityDisplay: "Jaipur",
    state: "Rajasthan",
    stateCode: "RJ",
    region: "North",
    tier: 2,
    population: "4 million+",
    h1: "Derma PCD Franchise in Jaipur — High-Margin Skincare Distributorship",
    metaTitle: "Derma Franchise Jaipur | Barekyne Clinical Skincare PCD",
    metaDescription:
      "Exclusive derma PCD franchise opportunity in Jaipur. Supply WHO-GMP clinical skincare to top dermatology clinics with Barekyne's monopoly distribution.",
    heroSubheadline:
      "Capture Jaipur's Rapidly Growing Premium Aesthetic and Clinical Dermatology Market",
    marketInsight:
      "Jaipur is experiencing rapid growth in luxury aesthetic clinics and premium dermatology practices. As medical tourism increases, clinics require international-standard clinical products. Barekyne equips Jaipur distributors with WHO-GMP certified formulations that meet these premium institutional standards.",
    territoryStatus: "open",
    availableDistricts: [
      "Malviya Nagar", "Vaishali Nagar", "C-Scheme", "Mansarovar",
      "Raja Park", "Jagatpura", "Tonk Road"
    ],
    regionalDermaFacts:
      "Rajasthan's intense solar radiation makes Barekyne's Multi-Pathway Depigmentation system (featuring Kojic Acid Dipalmitate and Alpha Arbutin) highly effective for treating prevalent sun-induced melasma and hyperpigmentation.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/jaipur",
    ogImage: "/og/jaipur-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  },
  {
    city: "lucknow",
    cityDisplay: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    region: "North",
    tier: 2,
    population: "3.5 million+",
    h1: "Derma PCD Franchise in Lucknow — UP Skincare Distributorship Opportunity",
    metaTitle: "Derma PCD Franchise Lucknow | Barekyne B2B Skincare",
    metaDescription:
      "Launch a highly profitable derma PCD franchise in Lucknow. Barekyne offers exclusive district-level monopoly, WHO-GMP clinical products, and high-yield profit margins.",
    heroSubheadline:
      "Lead Uttar Pradesh's Clinical Skincare Market with Barekyne's Monopoly Franchise",
    marketInsight:
      "Lucknow is the administrative and medical nerve center of India's most populous state. For an aggressive B2B distributor, securing the Barekyne franchise here provides a massive first-mover advantage in introducing clinical-grade, melanin-optimized skincare to a vast, rapidly upgrading medical market.",
    territoryStatus: "open",
    availableDistricts: [
      "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar",
      "Ashiyana", "Mahanagar", "Sushant Golf City"
    ],
    regionalDermaFacts:
      "The rapidly growing middle and upper-middle class in Lucknow is shifting from OTC cosmetics to dermatologist-prescribed clinical solutions, perfectly aligning with Barekyne's premium B2B positioning.",
    canonicalUrl: "https://barekyne.in/skincare-distributor/lucknow",
    ogImage: "/og/lucknow-franchise.jpg",
    structuredData: {
      datePublished: "2026-06-06",
      dateModified: "2026-06-06",
      authorName: "Barekyne Clinical Division",
    },
  }
];

// Helper — get city data by slug
export function getCitySEOData(slug: string): CitySEOData | undefined {
  return CITY_SEO_DATA.find((c) => c.city === slug.toLowerCase());
}

// Helper — get all city slugs for generateStaticParams
export function getAllCitySlugs(): { city: string }[] {
  return CITY_SEO_DATA.map((c) => ({ city: c.city }));
}

// Helper — get all open territories (for homepage urgency widget)
export function getOpenTerritories(): CitySEOData[] {
  return CITY_SEO_DATA.filter((c) => c.territoryStatus === "open");
}

// Helper — get tier-1 metro cities
export function getMetroCities(): CitySEOData[] {
  return CITY_SEO_DATA.filter((c) => c.tier === 1);
}
