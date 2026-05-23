import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, TrendingUp, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { SEO_CITIES, PROGRAMMATIC_ROUTES, fillTemplate } from "@/lib/seo-data";
import { SITE_CONFIG } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import JsonLd, { FAQJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return SEO_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = SEO_CITIES.find((c) => c.slug === citySlug);
  if (!city) return { title: "Not Found" };

  const config = PROGRAMMATIC_ROUTES.find((r) => r.type === "franchise")!;
  return {
    title: fillTemplate(config.titleTemplate, city),
    description: fillTemplate(config.descriptionTemplate, city),
    alternates: { canonical: `/derma-franchise/${city.slug}` },
    openGraph: {
      title: fillTemplate(config.titleTemplate, city),
      description: fillTemplate(config.descriptionTemplate, city),
      url: `https://barekyne.in/derma-franchise/${city.slug}`,
    },
  };
}

const franchiseFaqs = [
  { question: "What is a Derma PCD franchise?", answer: "A Derma PCD (Propaganda Cum Distribution) franchise gives you the right to market and distribute dermatology skincare products under the Barekyne brand in an exclusive territory." },
  { question: "How much investment is required for a Barekyne franchise?", answer: "Investment requirements vary by territory and scope. Barekyne offers flexible models suited to different investment capacities. Contact us for a personalized assessment." },
  { question: "Do I get exclusive territory rights?", answer: "Yes, all Barekyne franchise partners receive exclusive monopoly rights in their designated territory, ensuring no direct competition from other Barekyne partners." },
  { question: "What support does Barekyne provide to franchise partners?", answer: "Barekyne provides comprehensive support: marketing materials, visual merchandising, sales training, dedicated account management, and logistics support." },
];

export default async function FranchiseCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = SEO_CITIES.find((c) => c.slug === citySlug);
  if (!city) return null;

  const config = PROGRAMMATIC_ROUTES.find((r) => r.type === "franchise")!;

  return (
    <>
      {/* Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Barekyne Derma Franchise — ${city.name}`,
          description: fillTemplate(config.descriptionTemplate, city),
          url: `https://barekyne.in/derma-franchise/${city.slug}`,
          telephone: SITE_CONFIG.phone,
          address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.state, addressCountry: "IN" },
          areaServed: { "@type": "City", name: city.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://barekyne.in" },
            { "@type": "ListItem", position: 2, name: "Distributorship", item: "https://barekyne.in/distributorship" },
            { "@type": "ListItem", position: 3, name: `Franchise in ${city.name}`, item: `https://barekyne.in/derma-franchise/${city.slug}` },
          ],
        }}
      />
      <FAQJsonLd faqs={franchiseFaqs} />

      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <nav className="flex items-center justify-center gap-2 text-sm text-warm-gray mb-6">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/distributorship" className="hover:text-gold transition-colors">Franchise</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{city.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-gold">{city.name}, {city.state}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Derma <span className="text-gold">Franchise</span> in {city.name}
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {fillTemplate(config.introTemplate, city)}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=franchise" className="px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {config.ctaText}
              </Link>
              <a href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Hi Barekyne, I'm interested in a derma franchise in ${city.name}. Please share details.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Inquiry
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why This City */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Why Start a Derma Franchise in ${city.name}?`} subtitle={`${city.name} has a ${city.demandLevel.toLowerCase()} demand for premium clinical skincare with a population of ${city.population}.`} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.highlights.map((highlight, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-beige/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-gold" />
                  </div>
                  <p className="text-charcoal leading-relaxed">{highlight}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Model */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Barekyne Franchise Model" subtitle="A proven, scalable business model for premium skincare distribution" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Monopoly Rights", desc: `Exclusive distribution rights in ${city.name} — no internal competition.` },
              { icon: TrendingUp, title: "Premium Margins", desc: "High-margin clinical skincare products with strong repeat purchase rates." },
              { icon: Briefcase, title: "Low Entry Barrier", desc: "Flexible investment models suitable for first-time entrepreneurs." },
              { icon: CheckCircle2, title: "Turnkey Setup", desc: "Complete business setup support from branding to launch." },
              { icon: MessageCircle, title: "Marketing Support", desc: "Ready-made marketing materials, digital assets, and brand collateral." },
              { icon: TrendingUp, title: "Growing Market", desc: `${city.name}'s clinical skincare market is projected to grow 20%+ annually.` },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border border-beige/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-warm-gray">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Franchise FAQ — ${city.name}`} subtitle="Common questions about the Barekyne derma franchise" />
          <div className="mt-10 space-y-4">
            {franchiseFaqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-5 bg-white rounded-xl border border-beige/50">
                  <h3 className="text-sm font-semibold text-charcoal mb-2">{faq.question}</h3>
                  <p className="text-sm text-warm-gray">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Start Your Franchise in ${city.name}`} subtitle="Fill out the form below to begin your franchise journey" />
          <div className="mt-10 bg-white p-8 rounded-2xl border border-beige/50">
            <ContactForm variant="compact" defaultInquiryType="Franchise Inquiry" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-heading font-bold text-charcoal mb-6 text-center">Explore More Locations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SEO_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link key={c.slug} href={`/derma-franchise/${c.slug}`} className="px-4 py-2 bg-white text-sm text-charcoal rounded-full border border-beige/50 hover:border-gold hover:text-gold transition-all duration-300">
                Franchise in {c.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {SEO_CITIES.filter((c) => c.slug !== city.slug).slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/skincare-distributor/${c.slug}`} className="px-4 py-2 bg-white text-sm text-warm-gray rounded-full border border-beige/50 hover:border-gold hover:text-gold transition-all duration-300">
                Distributor in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
