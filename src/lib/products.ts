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
    slug: "bare-uv-sunscreen",
    name: "Bare-UV sunscreen",
    shortName: "Bare-UV sunscreen",
    mrp: 649,
    category: "Sun Protection",
    tagline: "Hybrid Invisible Shield — Zero White Cast Photoprotection",
    description:
      "Barekyne Bare-UV sunscreen is a hybrid invisible sunscreen engineered with a dual physical-chemical filter matrix for broad-spectrum UVA/UVB protection and zero white cast. Formulated with Hyaluronic Acid for trans-epidermal water loss (TEWL) prevention, Zinc PCA for intelligent sebum regulation, Silk Protein for a silky occlusive barrier, and Kakadu Plum Extract — the world's richest natural source of Vitamin C — for potent antioxidant photoprotection. Designed specifically for melanin-rich Indian skin (Fitzpatrick IV–VI) in high-UV climates.",
    shortBenefit: "Hybrid UV defense with sebum control & antioxidant repair",
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Kakadu Plum Extract", "Zinc PCA", "Silk Protein"],
    keyIngredients: [
      {
        name: "Hyaluronic Acid",
        benefit: "Prevents trans-epidermal water loss (TEWL), maintains skin hydration under UV stress",
      },
      {
        name: "Zinc PCA",
        benefit: "Intelligently regulates sebum production — controls shine without over-drying oily skin",
      },
      {
        name: "Kakadu Plum Extract",
        benefit: "World's richest natural Vitamin C source (100x oranges) — antioxidant defense against photodamage",
      },
      {
        name: "Silk Protein",
        benefit: "Creates a non-comedogenic silky occlusive barrier for cosmetic elegance and protection",
      },
      {
        name: "Vitamin E",
        benefit: "Fat-soluble antioxidant that neutralizes UV-generated free radicals in the lipid layer",
      },
    ],
    benefits: [
      "SPF 50 PA++++ broad-spectrum UVA/UVB protection",
      "Dual physical-chemical filter matrix — zero white cast",
      "Zinc PCA-powered intelligent sebum regulation",
      "TEWL prevention with Hyaluronic Acid under UV stress",
      "Antioxidant photoprotection with Kakadu Plum Extract",
      "Silk Protein occlusive barrier — cosmetically elegant finish",
      "Designed for Indian skin in high-UV, humid climates",
      "Suitable as a makeup base",
    ],
    directions:
      "Apply generously on face and exposed areas 15 minutes before sun exposure. Reapply every 2-3 hours for continued protection. For optimal sebum control, use on cleansed, moisturized skin.",
    suitableFor: "All skin types — especially oily, acne-prone, and melanin-rich skin",
    size: "50g",
    images: [
      "/images/products/sunscreen-1.png",
      "/images/products/sunscreen-2.png",
      "/images/products/sunscreen-3.png"
    ],
    faq: [
      {
        question: "Is this sunscreen suitable for oily skin?",
        answer: "Yes. Barekyne Sunscreen contains Zinc PCA, which intelligently regulates sebum production — controlling oiliness and shine without over-drying the skin. It's specifically engineered for oily and acne-prone skin.",
      },
      {
        question: "Does it leave a white cast?",
        answer: "No. Barekyne uses a hybrid dual physical-chemical filter matrix designed for melanin-rich skin tones (Fitzpatrick IV–VI), ensuring completely invisible, zero white cast application.",
      },
      {
        question: "What makes this different from regular sunscreens?",
        answer: "Most sunscreens offer only UV blocking. Barekyne Sunscreen combines photoprotection with Zinc PCA sebum control, Hyaluronic Acid TEWL prevention, and Kakadu Plum antioxidant repair — a multi-functional hybrid shield.",
      },
    ],
  },
  {
    id: "2",
    slug: "bare-c20-serum",
    name: "Bare-C20 serum",
    shortName: "Bare-C20 serum",
    mrp: 749,
    category: "Serums",
    tagline: "20% Ethyl Ascorbic Acid — Stable Brightening & Anti-Aging Serum",
    description:
      "Barekyne Bare-C20 serum is formulated with 20% Ethyl Ascorbic Acid (3-O-Ethyl Ascorbic Acid), the most stable and bioavailable form of Vitamin C that resists oxidation and pH degradation. Combined with 2% Niacinamide for melanin transfer inhibition, Hyaluronic Acid for barrier hydration, Liquorice Extract for tyrosinase inhibition, and Chamomile Extract for anti-inflammatory calming. A multi-pathway depigmentation system targeting dark spots, post-inflammatory hyperpigmentation (PIH), melasma, and photoaging.",
    shortBenefit: "Stable Vitamin C depigmentation with multi-pathway brightening",
    ingredients: ["20% Ethyl Ascorbic Acid", "Niacinamide 2%", "Hyaluronic Acid", "Liquorice Extract", "Chamomile Extract"],
    keyIngredients: [
      {
        name: "20% Ethyl Ascorbic Acid",
        benefit: "Most stable Vitamin C derivative — resists oxidation, maintains potency without pH sensitivity or yellowing",
      },
      {
        name: "Niacinamide 2%",
        benefit: "Inhibits melanosome transfer from melanocytes to keratinocytes — minimizes pores and strengthens barrier",
      },
      {
        name: "Hyaluronic Acid",
        benefit: "Multi-weight hyaluronic acid for surface and deep hydration — plumps skin, reduces fine lines",
      },
      {
        name: "Liquorice Extract",
        benefit: "Contains Glabridin — inhibits tyrosinase enzyme to reduce melanin overproduction at the source",
      },
      {
        name: "Chamomile Extract",
        benefit: "Anti-inflammatory flavonoids calm irritation, reduce redness, and support post-treatment recovery",
      },
    ],
    benefits: [
      "20% stable Ethyl Ascorbic Acid — no oxidation or yellowing",
      "Multi-pathway depigmentation: tyrosinase + melanosome + antioxidant",
      "Targets dark spots, PIH, melasma, and photoaging",
      "Liquorice-powered tyrosinase inhibition at the source",
      "Niacinamide blocks melanin transfer to visible skin layers",
      "Hyaluronic Acid barrier hydration and fine line reduction",
      "Anti-inflammatory calming with Chamomile Extract",
      "Boosts collagen synthesis for anti-aging",
    ],
    directions:
      "Apply 3-4 drops on clean, dry face and neck. Gently pat into skin. Use morning and evening. Follow with moisturizer and sunscreen during the day.",
    suitableFor: "All skin types — especially hyperpigmented, dull, and photoaged skin",
    size: "30ml",
    images: [
      "/images/products/bare-c20-serum-1.png",
      "/images/products/bare-c20-serum-2.png",
      "/images/products/bare-c20-serum-3.png"
    ],
    faq: [
      {
        question: "Why Ethyl Ascorbic Acid instead of L-Ascorbic Acid?",
        answer: "L-Ascorbic Acid oxidizes rapidly, turns yellow, and requires low pH that irritates sensitive skin. Barekyne uses 3-O-Ethyl Ascorbic Acid, which remains stable, maintains potency across pH ranges, and delivers equivalent clinical brightening without degradation.",
      },
      {
        question: "Can I use this serum with other active ingredients?",
        answer: "Yes. Unlike L-Ascorbic Acid, Ethyl Ascorbic Acid is compatible with Niacinamide and most actives. Avoid simultaneous use with retinol — alternate AM/PM instead.",
      },
      {
        question: "How long before I see results?",
        answer: "Most users notice visible brightening and improved skin tone within 4-6 weeks of consistent use due to the multi-pathway depigmentation approach.",
      },
    ],
  },
  {
    id: "3",
    slug: "bare-night-cream",
    name: "Bare night cream",
    shortName: "Bare night cream",
    mrp: 499,
    category: "Moisturizers",
    tagline: "Multi-Pathway Depigmentation — Overnight Brightening & Repair",
    description:
      "Barekyne Bare night cream is an advanced overnight depigmentation system powered by 2% Kojic Acid Dipalmitate (a lipophilic, stable derivative that penetrates deeper than standard Kojic Acid), 3% Niacinamide for melanosome transfer inhibition, and 1.5% Alpha Arbutin for gentle tyrosinase suppression. This triple-pathway approach targets melanin overproduction at every stage — from synthesis to transfer to surface expression — while your skin's circadian repair mechanisms are most active.",
    shortBenefit: "Triple-pathway depigmentation with overnight barrier repair",
    ingredients: ["Kojic Acid Dipalmitate 2%", "Niacinamide 3%", "Alpha Arbutin 1.5%"],
    keyIngredients: [
      {
        name: "Kojic Acid Dipalmitate 2%",
        benefit: "Lipophilic stable form of Kojic Acid — penetrates deeper into skin layers for sustained melanin inhibition without irritation",
      },
      {
        name: "Niacinamide 3%",
        benefit: "Blocks melanosome transfer from melanocytes to keratinocytes — prevents pigment from reaching the visible skin surface",
      },
      {
        name: "Alpha Arbutin 1.5%",
        benefit: "Gently suppresses tyrosinase enzyme activity — reduces melanin production at the source with minimal irritation potential",
      },
    ],
    benefits: [
      "Triple-pathway depigmentation: synthesis + transfer + expression",
      "2% Kojic Acid Dipalmitate — deeper penetration, superior stability",
      "3% Niacinamide melanosome transfer inhibition",
      "1.5% Alpha Arbutin gentle tyrosinase suppression",
      "Optimized for nighttime circadian skin repair",
      "Targets stubborn dark spots, melasma, and PIH",
      "Reduces uneven skin tone progressively",
      "Wake up to visibly brighter, more even-toned skin",
    ],
    directions:
      "Apply a pea-sized amount on clean face and neck before bedtime. Massage gently in upward strokes until fully absorbed. Use consistently for 6-8 weeks for optimal depigmentation results.",
    suitableFor: "All skin types — especially pigmentation-prone and melasma-affected skin",
    size: "50g",
    images: [
      "/images/products/bare-night-cream-1.png",
      "/images/products/bare-night-cream-2.png",
      "/images/products/bare-night-cream-3.png"
    ],
    faq: [
      {
        question: "Can I use this cream during the day?",
        answer: "This cream is specifically formulated for nighttime use when your skin's circadian repair mechanisms are most active, maximizing depigmentation efficacy. For daytime protection, pair it with our Bare-UV sunscreen.",
      },
      {
        question: "Is Kojic Acid Dipalmitate better than regular Kojic Acid?",
        answer: "Yes. Standard Kojic Acid is water-soluble and unstable. Kojic Acid Dipalmitate is a lipophilic (fat-soluble) derivative that penetrates deeper, remains stable in formulation, and delivers sustained melanin inhibition with less irritation.",
      },
      {
        question: "Is it suitable for sensitive skin?",
        answer: "Yes. All three actives — Kojic Acid Dipalmitate, Alpha Arbutin, and Niacinamide — are chosen specifically for their efficacy-to-irritation ratio. They deliver clinical brightening without the harshness of hydroquinone. We recommend a patch test before first use.",
      },
    ],
  },
  {
    id: "4",
    slug: "cicaglow-facewash",
    name: "Cicaglow facewash",
    shortName: "Cicaglow facewash",
    mrp: 499,
    category: "Cleansers",
    tagline: "Barrier-First Cleansing — Multi-Acid + Paradoxical Hydration",
    description:
      "Barekyne Cicaglow facewash is a barrier-first cleanser combining Glycolic Acid (AHA) and Salicylic Acid (BHA) for dual-exfoliation with Lactic Acid for gentle resurfacing. The paradoxical rebound hydration system uses Hyaluronic Acid and Polyglutamic Acid (which holds 4-10x more moisture than HA) to actively hydrate during cleansing — preventing the tight, stripped feeling of conventional acid cleansers. Enriched with Glutathione (the body's master antioxidant), Vitamin C for brightening, and Cica Extract for anti-inflammatory barrier repair.",
    shortBenefit: "Multi-acid exfoliation with paradoxical rebound hydration",
    ingredients: ["Glycolic Acid", "Salicylic Acid", "Lactic Acid", "Vitamin C", "Cica Extract", "Hyaluronic Acid", "Polyglutamic Acid", "Glutathione"],
    keyIngredients: [
      {
        name: "Glycolic Acid",
        benefit: "Smallest AHA molecule — penetrates deepest for surface-level dead cell exfoliation and texture refinement",
      },
      {
        name: "Salicylic Acid",
        benefit: "Oil-soluble BHA that penetrates into pores to dissolve sebum plugs and prevent acne formation",
      },
      {
        name: "Polyglutamic Acid",
        benefit: "Holds 4-10x more moisture than Hyaluronic Acid — creates paradoxical rebound hydration during cleansing",
      },
      {
        name: "Glutathione",
        benefit: "The body's master antioxidant — neutralizes free radicals and supports skin's natural detoxification",
      },
      {
        name: "Lactic Acid",
        benefit: "Gentle AHA that exfoliates while simultaneously hydrating — ideal for sensitive and Indian skin types",
      },
      {
        name: "Cica Extract",
        benefit: "Centella Asiatica-derived anti-inflammatory that calms acid-induced irritation and strengthens the skin barrier",
      },
    ],
    benefits: [
      "Multi-acid exfoliation: Glycolic (AHA) + Salicylic (BHA) + Lactic Acid",
      "Paradoxical rebound hydration with Polyglutamic Acid + Hyaluronic Acid",
      "Glutathione master antioxidant protection",
      "Unclogs pores and prevents acne at the source",
      "Barrier-first philosophy — cleanses without stripping",
      "Vitamin C brightening and Cica anti-inflammatory calming",
      "No tight, dry feeling after washing",
      "Suitable for daily twice-daily use",
    ],
    directions:
      "Wet face with lukewarm water. Take a coin-sized amount and lather between palms. Massage onto face in circular motions for 60 seconds. Rinse thoroughly. Use twice daily — AM and PM.",
    suitableFor: "All skin types — especially oily, acne-prone, and pollution-exposed skin",
    size: "100ml",
    images: [
      "/images/products/cicaglow-facewash-1.png",
      "/images/products/cicaglow-facewash-2.png",
      "/images/products/cicaglow-facewash-3.png"
    ],
    faq: [
      {
        question: "Can I use this face wash twice daily?",
        answer: "Yes. Barekyne Cicaglow facewash is formulated with barrier-first philosophy — the Polyglutamic Acid and Hyaluronic Acid actively hydrate during cleansing, preventing the over-stripping that typically occurs with acid cleansers. Safe for twice-daily use.",
      },
      {
        question: "Will the acids irritate my skin?",
        answer: "The acids are formulated at gentle concentrations balanced with Cica Extract (anti-inflammatory) and Polyglutamic Acid (rebound hydration). This creates a cleanse-without-compromise experience suitable for daily use without irritation.",
      },
      {
        question: "What is Polyglutamic Acid and why is it better than HA?",
        answer: "Polyglutamic Acid (PGA) is a naturally fermented amino acid polymer that holds 4-10x more moisture than Hyaluronic Acid. In a cleanser, it creates a 'paradoxical rebound hydration' effect — your skin actually feels more hydrated after washing, not less.",
      },
    ],
  },
  {
    id: "5",
    slug: "bare-hydra-lotion",
    name: "Bare-hydra lotion",
    shortName: "Bare-hydra lotion",
    mrp: 549,
    category: "Body Care",
    tagline: "3% Vitamin C + 1% Dermawhite™ WF — Body Brightening & Hydration",
    description:
      "Barekyne Bare-hydra lotion combines 3% Vitamin C for antioxidant brightening with 1% Dermawhite™ WF — a clinically validated botanical melanin inhibitor shown to achieve up to 90% melanin synthesis inhibition in in-vitro studies. Enriched with Papaya Extract (natural papain enzyme exfoliation), Guava Extract (rich in lycopene for UV-damage repair), and Saxifraga Sarmentosa (a traditional Japanese botanical tyrosinase inhibitor). Designed for India's hot, humid climate with a lightweight, non-greasy, fast-absorbing texture.",
    shortBenefit: "Dermawhite™ WF body brightening with botanical melanin control",
    ingredients: ["Vitamin C 3%", "Dermawhite™ WF 1%", "Papaya Extract", "Guava Extract", "Saxifraga Sarmentosa"],
    keyIngredients: [
      {
        name: "Vitamin C 3%",
        benefit: "Antioxidant brightening, collagen support, and protection against environmental photodamage",
      },
      {
        name: "Dermawhite™ WF 1%",
        benefit: "Clinically validated botanical complex — up to 90% melanin synthesis inhibition in in-vitro studies",
      },
      {
        name: "Papaya Extract",
        benefit: "Contains natural Papain enzyme for gentle surface exfoliation — reveals brighter skin underneath",
      },
      {
        name: "Guava Extract",
        benefit: "Rich in Lycopene — repairs UV-induced oxidative damage and supports skin's antioxidant defense",
      },
      {
        name: "Saxifraga Sarmentosa",
        benefit: "Traditional Japanese botanical — natural tyrosinase inhibitor for gentle, sustained depigmentation",
      },
    ],
    benefits: [
      "1% Dermawhite™ WF — up to 90% melanin inhibition (in-vitro)",
      "3% Vitamin C antioxidant brightening for body skin",
      "Papaya enzyme natural exfoliation",
      "Guava lycopene UV-damage repair",
      "Saxifraga Sarmentosa botanical tyrosinase inhibition",
      "Lightweight, non-greasy formula for India's humid climate",
      "Fast-absorbing — no sticky residue",
      "Suitable for both face and body application",
    ],
    directions:
      "Apply generously on clean face and body. Massage gently until absorbed. Use daily after bathing for best results. For enhanced brightening, use consistently for 4-6 weeks.",
    suitableFor: "All skin types — especially body pigmentation, tan removal, and uneven body skin tone",
    size: "100ml",
    images: [
      "/images/products/bare-hydra-lotion-1.png",
      "/images/products/bare-hydra-lotion-2.png",
      "/images/products/bare-hydra-lotion-3.png"
    ],
    faq: [
      {
        question: "Can I use this lotion on both face and body?",
        answer: "Yes. Barekyne Bare-hydra lotion is specifically formulated for both face and body application with a lightweight texture suitable for larger body areas.",
      },
      {
        question: "What is Dermawhite™ WF?",
        answer: "Dermawhite™ WF is a patented botanical melanin inhibitor complex. In clinical in-vitro studies, it has demonstrated up to 90% melanin synthesis inhibition — making it one of the most effective natural brightening technologies available.",
      },
      {
        question: "Is it suitable for summer use?",
        answer: "Absolutely. The lightweight, non-sticky formula is specifically designed for India's hot, humid climate — it absorbs quickly without leaving any greasy residue, making it perfect for year-round use.",
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
