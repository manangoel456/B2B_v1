import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, TrendingUp, Users, Shield, Package, ArrowRight } from "lucide-react";
import { SEO_CITIES, PROGRAMMATIC_ROUTES, fillTemplate } from "@/lib/seo-data";
import { products } from "@/lib/products";
import { SITE_CONFIG } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
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

  const config = PROGRAMMATIC_ROUTES.find((r) => r.type === "distributor")!;
  return {
    title: fillTemplate(config.titleTemplate, city),
    description: fillTemplate(config.descriptionTemplate, city),
    alternates: { canonical: `/skincare-distributor/${city.slug}` },
    openGraph: {
      title: fillTemplate(config.titleTemplate, city),
      description: fillTemplate(config.descriptionTemplate, city),
      url: `https://barekyne.in/skincare-distributor/${city.slug}`,
    },
  };
}

const distributorFaqs = [
  {
    question: "What is the minimum investment required for Barekyne distributorship?",
    answer: "The investment varies based on territory size and order volume. Contact our team for a detailed breakdown tailored to your region.",
  },
  {
    question: "Does Barekyne offer monopoly distribution rights?",
    answer: "Yes, Barekyne offers exclusive territorial monopoly rights to qualified distributors, ensuring zero internal competition in your allocated area.",
  },
  {
    question: "What kind of margins can I expect as a Barekyne distributor?",
    answer: "Barekyne offers industry-leading margins to distributors. Our premium pricing strategy ensures healthy ROI while maintaining brand exclusivity.",
  },
  {
    question: "What marketing support does Barekyne provide?",
    answer: "We provide comprehensive marketing support including visual merchandising materials, digital assets, training, and a dedicated account manager.",
  },
];

export default async function DistributorCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = SEO_CITIES.find((c) => c.slug === citySlug);
  if (!city) return null;

  const config = PROGRAMMATIC_ROUTES.find((r) => r.type === "distributor")!;

  return (
    <>
      {/* Schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Barekyne Skincare Distributor — ${city.name}`,
          description: fillTemplate(config.descriptionTemplate, city),
          url: `https://barekyne.in/skincare-distributor/${city.slug}`,
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
            { "@type": "ListItem", position: 3, name: `Distributor in ${city.name}`, item: `https://barekyne.in/skincare-distributor/${city.slug}` },
          ],
        }}
      />
      <FAQJsonLd faqs={distributorFaqs} />

      {/* Hero */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <nav className="flex items-center justify-center gap-2 text-sm text-warm-gray mb-6">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/distributorship" className="hover:text-gold transition-colors">Distributorship</Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{city.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-gold">{city.name}, {city.state}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Skincare <span className="text-gold">Distributor</span> in {city.name}
            </h1>
            <p className="mt-6 text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
              {fillTemplate(config.introTemplate, city)}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=distributor" className="px-8 py-3.5 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {config.ctaText}
              </Link>
              <a href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(`Hi Barekyne, I'm interested in skincare distributorship in ${city.name}. Please share details.`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-all duration-300">
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
          <SectionHeading title={`Why Distribute Barekyne in ${city.name}?`} subtitle={`${city.name} presents exceptional opportunities for premium skincare distribution with a population of ${city.population} and ${city.demandLevel.toLowerCase()} demand.`} />
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

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Barekyne Distributor Benefits" subtitle={`What you get as a Barekyne distributor in ${city.name}`} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Monopoly Rights", desc: `Exclusive territorial distribution rights in ${city.name} with zero internal competition.` },
              { icon: TrendingUp, title: "High Margins", desc: "Industry-leading profit margins on all clinical-grade skincare products." },
              { icon: Users, title: "Dedicated Support", desc: "Personal account manager, marketing materials, and business training." },
              { icon: Package, title: "PAN India Supply", desc: "Reliable logistics network ensuring timely delivery across India." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-beige/50 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
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

      {/* Products Available */}
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Products Available in ${city.name}`} subtitle="Our complete range of clinical-grade skincare products available for distribution" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.08}>
                <Link href={`/products/${product.slug}`} className="group block bg-white rounded-2xl border border-beige/50 p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-sm text-warm-gray mt-1 mb-3">{product.shortBenefit}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gold">MRP {formatPrice(product.mrp)}</span>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Distributor FAQ — ${city.name}`} subtitle="Common questions about Barekyne distributorship" />
          <div className="mt-10 space-y-4">
            {distributorFaqs.map((faq, i) => (
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
      <section className="py-16 lg:py-20 bg-ivory">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={`Become a Distributor in ${city.name}`} subtitle="Fill out the form below to start your distributorship journey" />
          <div className="mt-10 bg-white p-8 rounded-2xl border border-beige/50">
            <ContactForm variant="compact" defaultInquiryType="Distributor Inquiry" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-heading font-bold text-charcoal mb-6 text-center">Explore More Locations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SEO_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link key={c.slug} href={`/skincare-distributor/${c.slug}`} className="px-4 py-2 bg-white text-sm text-charcoal rounded-full border border-beige/50 hover:border-gold hover:text-gold transition-all duration-300">
                Distributor in {c.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {SEO_CITIES.filter((c) => c.slug !== city.slug).slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/derma-franchise/${c.slug}`} className="px-4 py-2 bg-white text-sm text-warm-gray rounded-full border border-beige/50 hover:border-gold hover:text-gold transition-all duration-300">
                Franchise in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
