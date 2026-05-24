export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  mrp: number;
  category: string;
  tagline: string;
  description: string;
  shortBenefit: string;
  ingredients: string[];
  keyIngredients: { name: string; benefit: string }[];
  benefits: string[];
  directions: string;
  suitableFor: string;
  size: string;
  images: string[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "sunscreen-spf50",
    name: "Sunscreen SPF 50 PA++++",
    shortName: "Sunscreen SPF 50",
    mrp: 649,
    category: "Sun Protection",
    tagline: "Advanced UV Protection with Skin Nourishment",
    description:
      "Barekyne Sunscreen SPF 50 PA++++ provides broad-spectrum protection against UVA and UVB rays while keeping your skin hydrated and nourished. Formulated with Hyaluronic Acid and Kakadu Plum Extract for a lightweight, non-greasy finish that works as a perfect base for makeup.",
    shortBenefit: "Broad-spectrum UV defense with deep hydration",
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Kakadu Plum Extract"],
    keyIngredients: [
      {
        name: "Hyaluronic Acid",
        benefit: "Deep hydration and moisture retention for plump, dewy skin",
      },
      {
        name: "Vitamin E",
        benefit: "Powerful antioxidant that shields skin from environmental damage",
      },
      {
        name: "Kakadu Plum Extract",
        benefit: "World's richest source of Vitamin C for brightening and anti-aging",
      },
    ],
    benefits: [
      "SPF 50 PA++++ broad-spectrum UV protection",
      "Lightweight, non-greasy formula",
      "Deep hydration with Hyaluronic Acid",
      "Antioxidant protection with Vitamin E",
      "Suitable as a makeup base",
      "No white cast finish",
    ],
    directions:
      "Apply generously on face and exposed areas 15 minutes before sun exposure. Reapply every 2-3 hours for continued protection.",
    suitableFor: "All skin types",
    size: "50g",
    images: [
      "/images/products/sunscreen-1.png",
      "/images/products/sunscreen-2.png",
      "/images/products/sunscreen-3.png"
    ],
    faq: [
      {
        question: "Is this sunscreen suitable for oily skin?",
        answer: "Yes, our SPF 50 sunscreen features a lightweight, non-greasy formula that works well for all skin types including oily skin.",
      },
      {
        question: "Does it leave a white cast?",
        answer: "No, Barekyne Sunscreen is formulated to blend seamlessly without leaving any white cast.",
      },
    ],
  },
  {
    id: "2",
    slug: "vitamin-c-serum",
    name: "Vitamin C Serum",
    shortName: "Vitamin C Serum",
    mrp: 749,
    category: "Serums",
    tagline: "Brightening & Anti-Aging Power Serum",
    description:
      "Barekyne Vitamin C Serum combines the brightening power of 10% Vitamin C with 2% Niacinamide and Hyaluronic Acid for a comprehensive skin transformation. This potent formula targets dark spots, uneven tone, fine lines, and dullness for visibly radiant skin.",
    shortBenefit: "Brightens, firms & fights dark spots",
    ingredients: ["Vitamin C 10%", "Niacinamide 2%", "Hyaluronic Acid"],
    keyIngredients: [
      {
        name: "Vitamin C 10%",
        benefit: "Potent brightening agent that reduces dark spots and promotes collagen synthesis",
      },
      {
        name: "Niacinamide 2%",
        benefit: "Minimizes pores, controls oil, and strengthens the skin barrier",
      },
      {
        name: "Hyaluronic Acid",
        benefit: "Intense hydration that plumps skin and reduces fine lines",
      },
    ],
    benefits: [
      "Visibly brighter, more radiant complexion",
      "Reduces dark spots and hyperpigmentation",
      "Boosts collagen production",
      "Minimizes fine lines and wrinkles",
      "Improves skin texture and tone",
      "Strengthens skin barrier function",
    ],
    directions:
      "Apply 3-4 drops on clean, dry face and neck. Gently pat into skin. Use morning and evening. Follow with moisturizer and sunscreen during the day.",
    suitableFor: "All skin types",
    size: "30ml",
    images: [
      "/images/products/vitamin-c-serum-1.png",
      "/images/products/vitamin-c-serum-2.png",
      "/images/products/vitamin-c-serum-3.png"
    ],
    faq: [
      {
        question: "Can I use this serum with other active ingredients?",
        answer: "Yes, our Vitamin C Serum is formulated to be compatible with most skincare routines. However, avoid using it simultaneously with retinol products.",
      },
      {
        question: "How long before I see results?",
        answer: "Most users notice visible brightening and improved skin tone within 4-6 weeks of consistent use.",
      },
    ],
  },
  {
    id: "3",
    slug: "night-cream",
    name: "Night Cream",
    shortName: "Night Cream",
    mrp: 499,
    category: "Moisturizers",
    tagline: "Overnight Skin Renewal & Brightening",
    description:
      "Barekyne Night Cream works while you sleep to repair, rejuvenate, and brighten your skin. Powered by Kojic Acid, Niacinamide, and Alpha Arbutin, this luxurious cream targets pigmentation, uneven tone, and dullness for a refreshed morning glow.",
    shortBenefit: "Repairs, brightens & rejuvenates overnight",
    ingredients: ["Kojic Acid", "Niacinamide", "Alpha Arbutin"],
    keyIngredients: [
      {
        name: "Kojic Acid",
        benefit: "Natural skin lightening agent that inhibits melanin production",
      },
      {
        name: "Niacinamide",
        benefit: "Reduces hyperpigmentation while strengthening skin barrier",
      },
      {
        name: "Alpha Arbutin",
        benefit: "Gentle yet effective brightening agent for even-toned skin",
      },
    ],
    benefits: [
      "Overnight skin repair and renewal",
      "Reduces pigmentation and dark spots",
      "Promotes even skin tone",
      "Deep nourishment while you sleep",
      "Improved skin elasticity",
      "Wake up to a radiant morning glow",
    ],
    directions:
      "Apply a pea-sized amount on clean face and neck before bedtime. Massage gently in upward strokes until fully absorbed.",
    suitableFor: "All skin types",
    size: "50g",
    images: [
      "/images/products/night-cream-1.png",
      "/images/products/night-cream-2.png",
      "/images/products/night-cream-3.png"
    ],
    faq: [
      {
        question: "Can I use this cream during the day?",
        answer: "This cream is specifically formulated for nighttime use when your skin's repair mechanisms are most active. For daytime, pair it with our Sunscreen SPF 50.",
      },
      {
        question: "Is it suitable for sensitive skin?",
        answer: "Yes, the formula is gentle enough for sensitive skin. However, we recommend a patch test before first use.",
      },
    ],
  },
  {
    id: "4",
    slug: "tricid-face-wash",
    name: "Tricid Face Wash",
    shortName: "Tricid Face Wash",
    mrp: 499,
    category: "Cleansers",
    tagline: "Triple-Action Deep Cleansing Formula",
    description:
      "Barekyne Tricid Face Wash delivers a triple-action cleanse with Glycolic Acid, Salicylic Acid, and Vitamin C. This powerful yet gentle formula removes impurities, unclogs pores, and brightens skin with the added soothing benefits of Cica Extract.",
    shortBenefit: "Triple-acid deep cleanse with brightening",
    ingredients: ["Glycolic Acid", "Salicylic Acid", "Vitamin C", "Cica Extract"],
    keyIngredients: [
      {
        name: "Glycolic Acid",
        benefit: "AHA that exfoliates dead cells for smoother, brighter skin",
      },
      {
        name: "Salicylic Acid",
        benefit: "BHA that penetrates pores to remove excess oil and prevent breakouts",
      },
      {
        name: "Vitamin C",
        benefit: "Brightening antioxidant that promotes a radiant complexion",
      },
      {
        name: "Cica Extract",
        benefit: "Soothes and calms skin, reduces redness and irritation",
      },
    ],
    benefits: [
      "Deep cleansing with triple-acid formula",
      "Unclogs pores and prevents breakouts",
      "Gentle exfoliation for smoother skin",
      "Brightens and evens skin tone",
      "Soothes with Cica Extract",
      "Suitable for daily use",
    ],
    directions:
      "Wet face with lukewarm water. Take a coin-sized amount and lather between palms. Massage onto face in circular motions for 60 seconds. Rinse thoroughly. Use twice daily.",
    suitableFor: "All skin types, especially oily and acne-prone",
    size: "100ml",
    images: [
      "/images/products/tricid-face-wash-1.png",
      "/images/products/tricid-face-wash-2.png",
      "/images/products/tricid-face-wash-3.png"
    ],
    faq: [
      {
        question: "Can I use this face wash twice daily?",
        answer: "Yes, Tricid Face Wash is formulated for twice-daily use — morning and evening — for optimal results.",
      },
      {
        question: "Will the acids irritate my skin?",
        answer: "The acids are formulated at gentle concentrations balanced with soothing Cica Extract, making it suitable for daily use without irritation.",
      },
    ],
  },
  {
    id: "5",
    slug: "ol-season-lotion",
    name: "OL-Season Face & Body Lotion",
    shortName: "OL-Season Lotion",
    mrp: 549,
    category: "Body Care",
    tagline: "All-Season Hydration with Brightening Benefits",
    description:
      "Barekyne OL-Season Face & Body Lotion provides year-round hydration with the brightening power of Vitamin C and the advanced skin-lightening technology of Dermawhite™. This lightweight, fast-absorbing lotion keeps skin soft, supple, and radiant in every season.",
    shortBenefit: "Year-round hydration with visible brightening",
    ingredients: ["Vitamin C", "Dermawhite™"],
    keyIngredients: [
      {
        name: "Vitamin C",
        benefit: "Antioxidant protection and brightening for luminous skin",
      },
      {
        name: "Dermawhite™",
        benefit: "Advanced skin-lightening complex for even-toned, radiant skin",
      },
    ],
    benefits: [
      "All-season moisture protection",
      "Visible skin brightening",
      "Lightweight, non-sticky formula",
      "Fast-absorbing texture",
      "Suitable for face and body",
      "Dermawhite™ advanced technology",
    ],
    directions:
      "Apply generously on clean face and body. Massage gently until absorbed. Use daily after bathing for best results.",
    suitableFor: "All skin types",
    size: "100ml",
    images: [
      "/images/products/ol-season-lotion-1.png",
      "/images/products/ol-season-lotion-2.png",
      "/images/products/ol-season-lotion-3.png"
    ],
    faq: [
      {
        question: "Can I use this lotion on both face and body?",
        answer: "Yes, OL-Season Lotion is specifically formulated for both face and body application.",
      },
      {
        question: "Is it suitable for summer use?",
        answer: "Absolutely. The lightweight, non-sticky formula makes it perfect for year-round use including hot summer months.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, 3);
}
