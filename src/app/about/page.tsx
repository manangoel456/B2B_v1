import type { Metadata } from "next";
import { Award, Factory, Globe, Rocket, Heart, Users } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Barekyne is a premium clinical derma luxury skincare brand committed to quality, innovation, and empowering B2B partners across India with high-margin skincare products.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Clinical Excellence",
    description: "Every formulation undergoes rigorous testing to ensure safety, efficacy, and visible results that dermatologists trust.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Quality Obsession",
    description: "We source premium ingredients globally, from Kakadu Plum Extract to Dermawhite™ technology, never compromising on quality.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partner First",
    description: "Our B2B model is built around our partners' success. We provide tools, training, and support for sustainable growth.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation Driven",
    description: "Continuous R&D ensures our product line evolves with the latest advances in dermatological science.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-cream to-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gold/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                About Barekyne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight">
              Crafting the Future of{" "}
              <span className="text-gold">Clinical Skincare</span>
            </h1>
            <p className="mt-6 text-lg text-warm-gray leading-relaxed max-w-2xl">
              Born from a vision to bridge the gap between pharmaceutical-grade
              efficacy and luxury skincare experience, Barekyne stands as
              India&apos;s emerging force in clinical derma luxury skincare.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center shadow-lg shadow-gold/10">
                    <span className="text-4xl font-heading font-bold text-gold">B</span>
                  </div>
                  <p className="text-sm text-warm-gray font-medium">The Vision Behind Barekyne</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionHeading title="Our Vision" centered={false} />
              <p className="mt-6 text-warm-gray leading-relaxed">
                At Barekyne, we believe that exceptional skincare should be
                accessible through India&apos;s vast network of pharmacies,
                clinics, and retail outlets. Our founder&apos;s vision was
                clear: create products that dermatologists would proudly
                recommend, and build a distribution model that empowers local
                entrepreneurs.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Every Barekyne product is a testament to this philosophy —
                combining cutting-edge dermatological actives with luxurious
                textures and modern packaging that stands out on any shelf.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                We don&apos;t just supply products; we build partnerships. From
                monopoly territorial rights to comprehensive marketing support,
                every aspect of our B2B model is designed for mutual
                prosperity.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every formulation, partnership, and business decision."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group p-7 bg-white rounded-2xl border border-beige/50 hover:border-gold/20 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading title="Manufacturing Excellence" centered={false} />
              <p className="mt-6 text-warm-gray leading-relaxed">
                Our manufacturing partners maintain the highest standards of
                pharmaceutical-grade production. Every batch undergoes rigorous
                quality control, stability testing, and dermatological safety
                assessments.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <Factory className="w-5 h-5" />, label: "GMP Certified" },
                  { icon: <Award className="w-5 h-5" />, label: "Quality Tested" },
                  { icon: <Globe className="w-5 h-5" />, label: "PAN India Supply" },
                  { icon: <Rocket className="w-5 h-5" />, label: "Modern Facilities" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <span className="text-gold">{item.icon}</span>
                    <span className="text-sm font-medium text-charcoal">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-beige rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl font-heading font-bold text-gold/20">GMP</span>
                  <p className="text-sm text-warm-gray mt-2">Certified Manufacturing</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PAN India */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="PAN India Presence"
            subtitle="Building a nationwide network of trusted skincare partners."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "28+", label: "States Targeted" },
              { number: "100+", label: "Cities Covered" },
              { number: "5", label: "Product Lines" },
              { number: "500+", label: "Partner Goal" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-2xl border border-beige/50">
                  <p className="text-3xl font-heading font-bold text-gold">{stat.number}</p>
                  <p className="text-sm text-warm-gray mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
