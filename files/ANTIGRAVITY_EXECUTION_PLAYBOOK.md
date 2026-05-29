# BAREKYNE — ANTIGRAVITY + GEMINI EXECUTION PLAYBOOK
## Complete copy-paste instruction sequences for your site builder

---

## ⚠ READ FIRST: Architecture Rules (Non-Negotiable)

- You are using **Next.js App Router** (not Pages Router)
- Dynamic city pages live at: `src/app/skincare-distributor/[city]/page.tsx`
- City SEO data source: `src/lib/seo-data.ts`
- Global Layout (Navbar + Footer) is in `src/app/layout.tsx` — **DO NOT** duplicate it in city pages
- All components are Tailwind CSS only — no inline styles, no CSS modules for page-level components
- Blog posts live at: `src/app/blog/[slug]/page.tsx` and content in `/content/blog/*.mdx`

---

## COMMAND SEQUENCE 1: Deploy the SEO Data File

**Copy-paste to Antigravity terminal or Gemini code editor:**

```
Create the file at exactly this path: src/lib/seo-data.ts

Paste the complete contents from the provided seo-data.ts file.

After saving, verify by running: npx tsc --noEmit
There should be zero TypeScript errors.
```

---

## COMMAND SEQUENCE 2: Deploy the City Landing Page Template

```
Replace the contents of: src/app/skincare-distributor/[city]/page.tsx

With the complete contents from city-page.tsx provided.

This single file handles all 14 cities via generateStaticParams().
No individual city directories needed.

Verify by running: npm run build
Check that build output shows 14 static pages generated under /skincare-distributor/
```

---

## COMMAND SEQUENCE 3: Add Blog MDX Support (if not already configured)

```
Install required packages:
npm install next-mdx-remote gray-matter reading-time

Create blog post at: src/content/blog/derma-pcd-franchise-india-guide.mdx

Paste the complete MDX content from: blog-derma-pcd-franchise-india-guide.mdx

Create blog route at: src/app/blog/[slug]/page.tsx
This should read MDX files from src/content/blog/ and render them.
```

---

## COMMAND SEQUENCE 4: Sitemap Configuration for SEO

**Add to next.config.js or create src/app/sitemap.ts:**

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { CITY_SEO_DATA } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barekyne.in";

  const cityPages = CITY_SEO_DATA.map((city) => ({
    url: `${baseUrl}/skincare-distributor/${city.city}`,
    lastModified: new Date(city.structuredData.dateModified),
    changeFrequency: "monthly" as const,
    priority: city.tier === 1 ? 0.9 : 0.8,
  }));

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/skincare-distributor`, priority: 0.9 },
    { url: `${baseUrl}/products`, priority: 0.8 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/contact-franchise`, priority: 0.9 },
    { url: `${baseUrl}/blog/derma-pcd-franchise-india-guide`, priority: 0.95 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...cityPages,
  ];
}
```

---

## COMMAND SEQUENCE 5: robots.txt

```
Create file at: public/robots.txt

Contents:
User-agent: *
Allow: /

Sitemap: https://barekyne.in/sitemap.xml

Disallow: /api/
Disallow: /_next/
```

---

## COMMAND SEQUENCE 6: Google Search Console Setup

After deployment:
1. Go to search.google.com/search-console
2. Add property: barekyne.in
3. Verify via DNS TXT record (preferred) or HTML tag in layout.tsx
4. Submit sitemap: https://barekyne.in/sitemap.xml
5. Request indexing for: /blog/derma-pcd-franchise-india-guide (your highest-value page)

---

## GEMINI PROMPTS FOR ONGOING CONTENT

### Prompt 1: Generate a new blog post
```
You are the CMO of Barekyne (barekyne.in), India's B2B clinical luxury skincare brand.
Target audience: pharma investors, PCD franchise seekers, dermatologists.
Brand voice: authoritative, clinical, B2B-focused (like Obagi meets McKinsey).

Write a 3,000-word pillar blog post for the keyword: "[INSERT KEYWORD]"

Requirements:
- MDX format with frontmatter
- H1 = primary keyword variation
- 5–6 H2 sections using People Also Ask phrasing
- FAQ section with 5 Q&As (ready for FAQPage schema)
- Use clinical terminology: melanogenesis, tyrosinase, PIH, TEWL, stratum corneum
- Products: Vitamin C 20% Serum, Hybrid Invisible Sunscreen SPF 50, Tricid Face Wash, Advanced Night Cream, OL-Season Face & Body Lotion 100ml
- End with CTA linking to /contact-franchise
- No beauty clichés. No "glowing skin" language.
- Output JSON-LD schemas at the end (Article + FAQPage)
```

### Prompt 2: Generate a city-specific content block
```
You are the CMO of Barekyne. Write the following content blocks for the city landing page 
targeting: [CITY], [STATE]

Required blocks (text content only, no HTML):
1. H2: "Why [City] Is One of India's High-Priority Derma Franchise Markets" (2–3 paragraphs, 200 words)
2. Regional dermatological context: 1 paragraph explaining local skin concerns and climate impact
3. Available district list: suggest 6–8 realistic district/area names
4. Local CTA: 2 sentences creating urgency specific to [City]'s market conditions

Use clinical terminology. Reference relevant Barekyne products where appropriate.
Do NOT write generic copy. Make each city section meaningfully different.
```

### Prompt 3: Generate LinkedIn B2B posts
```
You are the CMO of Barekyne (barekyne.in). Write 3 LinkedIn posts targeting pharma 
distributors and PCD franchise investors.

Format per post:
- Hook (1 bold sentence that stops scrolling)
- Clinical insight (2–3 sentences on ingredient science or market data)
- Business ROI point (1–2 sentences on margin, territory, or franchise model)
- CTA (1 sentence with link to barekyne.in)
- 3 hashtags: #DermaPCDFranchise #ClinicalSkincare and one industry-specific tag

Tone: authoritative, not motivational. No emojis except ✅ and 📊 used max once each.
```

---

## SEO PRIORITY RANKING: What to Build First

| Priority | Page/Asset | Target Keyword | Monthly Search Volume (Est.) |
|---|---|---|---|
| 🔴 P0 | Blog: Derma PCD Franchise India Guide | "derma PCD franchise India" | 2,400–4,000 |
| 🔴 P0 | /skincare-distributor/delhi | "derma franchise Delhi" | 1,600–2,800 |
| 🔴 P0 | /skincare-distributor/mumbai | "derma franchise Mumbai" | 1,200–2,000 |
| 🟡 P1 | /skincare-distributor/bangalore | "derma franchise Bangalore" | 900–1,600 |
| 🟡 P1 | Blog: How to Start a Derma Franchise | "how to start derma franchise" | 800–1,400 |
| 🟡 P1 | Blog: Best Derma Products for Indian Skin | "best derma products Indian skin" | 1,000–1,800 |
| 🟢 P2 | Remaining 11 city pages | [city]-specific variants | 200–800 each |
| 🟢 P2 | Blog: Vitamin C 20% Serum Benefits | "vitamin C serum for hyperpigmentation" | 2,000–4,000 |
| 🟢 P2 | Blog: Zero White Cast Sunscreen India | "sunscreen no white cast India" | 1,600–3,000 |

---

## INTERNAL LINKING ARCHITECTURE (Critical for SEO Authority Flow)

```
Homepage
├── /skincare-distributor (Hub page — links to all 14 cities)
│   ├── /skincare-distributor/delhi
│   ├── /skincare-distributor/mumbai
│   └── ... (all 14 cities)
├── /products
│   ├── /products/vitamin-c-20-serum
│   ├── /products/hybrid-invisible-sunscreen-spf-50
│   ├── /products/tricid-face-wash
│   ├── /products/advanced-night-cream
│   └── /products/ol-season-lotion
├── /blog (Hub — links to all posts)
│   ├── /blog/derma-pcd-franchise-india-guide ← PILLAR (links to all city pages)
│   ├── /blog/how-to-start-derma-franchise
│   ├── /blog/vitamin-c-serum-hyperpigmentation-india
│   └── /blog/zero-white-cast-sunscreen-indian-skin
└── /contact-franchise ← CTA destination from EVERY page
```

**Rule:** Every blog post must link to:
1. At least 2 city pages (via "Franchise available in [City] →" anchors)
2. At least 1 product page
3. /contact-franchise (CTA)
4. The pillar post (if it's a cluster post)

---

## PERFORMANCE CHECKLIST (Run before going live)

- [ ] All 14 city pages build without errors (`npm run build`)
- [ ] Sitemap renders at barekyne.in/sitemap.xml
- [ ] robots.txt accessible at barekyne.in/robots.txt  
- [ ] Each city page has unique H1, meta title, meta description (check with curl or browser)
- [ ] JSON-LD schema present on blog post (validate at schema.org/validator)
- [ ] Canonical URLs set correctly on all city pages
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1 (test with PageSpeed Insights)
- [ ] Mobile responsive on all city pages (test with Chrome DevTools)
- [ ] Internal links working: city pages → /contact-franchise, blog → city pages
- [ ] Google Search Console: sitemap submitted, blog pillar post manually requested for indexing
