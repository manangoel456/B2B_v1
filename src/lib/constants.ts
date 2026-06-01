export const SITE_CONFIG = {
  name: "Barekyne",
  tagline: "Clinical Derma Luxury Skincare",
  domain: "barekyne.in",
  url: "https://barekyne.in",
  phone: "+91 70 2757 2757",
  phoneRaw: "917027572757",
  email: "info@barekyne.in",
  whatsappUrl: "https://wa.me/917027572757",
  address: {
    building: "471",
    street: "Sector 17 HUDA",
    locality: "Jagadhri",
    city: "Yamunanagar",
    district: "Yamunanagar",
    state: "Haryana",
    pinCode: "135001",
    country: "India",
  },
  social: {
    instagram: "https://www.instagram.com/barekyne.skin/",
    twitter: "https://x.com/barekyne_skin",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Franchise Cities", href: "/skincare-distributor" },
  { label: "Distributorship", href: "/distributorship" },
  { label: "Doctor Supply", href: "/doctor-supply" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const WHATSAPP_INQUIRIES = [
  {
    id: "distributor",
    label: "Distributor Inquiry",
    message:
      "Hi Barekyne, I am interested in becoming a distributor. Please share details about distributorship opportunities, margins, and support.",
  },
  {
    id: "franchise",
    label: "Franchise Inquiry",
    message:
      "Hi Barekyne, I am interested in franchise partnership opportunities. Please share details about franchise terms and monopoly rights.",
  },
  {
    id: "clinic",
    label: "Clinic / Doctor Supply",
    message:
      "Hi Barekyne, I am a doctor/clinic looking for premium skincare products for my patients. Please share your product catalogue and pricing.",
  },
  {
    id: "bulk",
    label: "Bulk Order Inquiry",
    message:
      "Hi Barekyne, I am interested in placing a bulk order. Please share your bulk pricing and MOQ details.",
  },
  {
    id: "retailer",
    label: "Retailer Inquiry",
    message:
      "Hi Barekyne, I am a retailer interested in stocking Barekyne products. Please share your retailer terms and pricing.",
  },
] as const;

export const TRUST_INDICATORS = [
  {
    icon: "Globe",
    title: "PAN India Supply",
    description: "Nationwide distribution network across all states",
  },
  {
    icon: "FlaskConical",
    title: "Premium Formulations",
    description: "Research-backed clinical-grade skincare solutions",
  },
  {
    icon: "Stethoscope",
    title: "Dermatology Inspired",
    description: "Formulated with dermatological science principles",
  },
  {
    icon: "Building2",
    title: "Franchise Opportunities",
    description: "Monopoly rights & franchise partnerships available",
  },
  {
    icon: "Package",
    title: "Bulk Procurement",
    description: "Competitive pricing for volume buyers",
  },
  {
    icon: "Truck",
    title: "Professional Supply Chain",
    description: "Reliable logistics and inventory management",
  },
] as const;

export const BUSINESS_OPPORTUNITIES = [
  {
    title: "Distributor Network",
    description:
      "Join our growing network of distributors and access high-margin premium skincare products with comprehensive marketing support.",
    icon: "Users",
    href: "/distributorship",
  },
  {
    title: "Monopoly Rights",
    description:
      "Secure exclusive territorial rights and dominate the skincare market in your region with zero competition from other Barekyne partners.",
    icon: "Shield",
    href: "/distributorship",
  },
  {
    title: "Franchise Partnership",
    description:
      "Leverage our brand equity and proven business model to establish your own Barekyne franchise with complete support.",
    icon: "Handshake",
    href: "/distributorship",
  },
  {
    title: "Doctor Supply",
    description:
      "Partner with us to provide clinic-grade skincare solutions to dermatology practices and medical professionals.",
    icon: "Stethoscope",
    href: "/doctor-supply",
  },
  {
    title: "Retail Expansion",
    description:
      "Stock premium clinical skincare that your customers actively seek. High demand, premium margins, and brand loyalty.",
    icon: "Store",
    href: "/contact",
  },
  {
    title: "Bulk Procurement",
    description:
      "Access competitive bulk pricing for large-volume orders with dedicated account management and priority fulfillment.",
    icon: "Package",
    href: "/bulk-orders",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Inquiry",
    description: "Submit your business details and requirements through our inquiry form or WhatsApp",
  },
  {
    step: 2,
    title: "Consultation",
    description: "Our business development team discusses partnership terms and opportunities",
  },
  {
    step: 3,
    title: "Catalogue",
    description: "Receive our complete product catalogue with pricing and margin details",
  },
  {
    step: 4,
    title: "Partnership",
    description: "Finalize terms, territory allocation, and sign the partnership agreement",
  },
  {
    step: 5,
    title: "Supply",
    description: "Begin receiving premium Barekyne products with full marketing and logistics support",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Dr. Priya Sharma",
    role: "Dermatology Clinic Owner, Mumbai",
    content:
      "Barekyne products have become a staple recommendation in my clinic. The clinical formulations deliver visible results, and my patients trust the brand. The B2B partnership has been seamless.",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "Pharmacy Chain Owner, Delhi NCR",
    content:
      "Partnering with Barekyne was one of the best business decisions we made. The margins are exceptional, the product quality speaks for itself, and customer repeat purchases are consistently high.",
    rating: 5,
  },
  {
    name: "Anita Gupta",
    role: "Regional Distributor, Rajasthan",
    content:
      "The monopoly rights model gave us a competitive edge in our territory. Barekyne's support team is responsive, and the brand recognition continues to grow among skincare professionals.",
    rating: 5,
  },
] as const;

export const FAQ_DATA = [
  {
    question: "How do I start a skincare distributorship with Barekyne in India?",
    answer:
      "Starting a skincare distributorship with Barekyne is straightforward. Submit an inquiry through our website or WhatsApp, and our business development team will guide you through the application process, territory selection, investment requirements, and onboarding. We offer comprehensive support including marketing materials, training, and dedicated account management.",
  },
  {
    question: "What are monopoly rights in cosmetic distribution?",
    answer:
      "Monopoly rights grant you exclusive territorial distribution rights for Barekyne products in a designated region. This means no other distributor can sell Barekyne products in your allocated territory, giving you a competitive advantage and ensuring maximum market penetration without internal competition.",
  },
  {
    question: "Does Barekyne supply skincare products to clinics and dermatologists?",
    answer:
      "Yes, we have a dedicated clinic and doctor supply program. We provide dermatology-inspired products that doctors can confidently recommend to their patients. Our clinic supply includes special pricing, educational materials, and patient-facing marketing collateral.",
  },
  {
    question: "What is the minimum order quantity for wholesale skincare orders?",
    answer:
      "Our MOQ varies based on the partnership type. Distributors and franchise partners have specific volume commitments, while retailers and clinics can start with smaller initial orders. Contact our team for detailed MOQ information based on your business type.",
  },
  {
    question: "Is Barekyne a derma skincare franchise opportunity in India?",
    answer:
      "Absolutely. Barekyne offers franchise partnership opportunities across India with exclusive territory rights, comprehensive brand support, marketing assistance, and high-margin product access. Our franchise model is designed for scalability and profitability.",
  },
  {
    question: "What makes Barekyne different from other wholesale skincare suppliers in India?",
    answer:
      "Barekyne stands apart with clinical-grade formulations, premium packaging, dermatology-inspired ingredients, and a dedicated B2B support system. We offer monopoly rights, high margins, and a rapidly growing brand that caters to the increasing demand for professional skincare.",
  },
] as const;

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
] as const;

export const BUSINESS_TYPES = [
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Pharmacy / Medical Store",
  "Doctor / Dermatologist",
  "Clinic / Hospital",
  "Franchise Seeker",
  "Monopoly Rights Seeker",
  "Bulk Buyer",
  "Other",
] as const;
