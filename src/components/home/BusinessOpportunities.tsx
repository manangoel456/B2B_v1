import Link from "next/link";
import {
  Users,
  Shield,
  Handshake,
  Stethoscope,
  Store,
  Package,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { BUSINESS_OPPORTUNITIES } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
  Handshake: <Handshake className="w-7 h-7" />,
  Stethoscope: <Stethoscope className="w-7 h-7" />,
  Store: <Store className="w-7 h-7" />,
  Package: <Package className="w-7 h-7" />,
};

export default function BusinessOpportunities() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="business-opportunities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Business Opportunities"
          subtitle="Multiple partnership models designed to match your business goals and investment capacity."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OPPORTUNITIES.map((opp, i) => (
            <AnimatedSection key={opp.title} delay={i * 0.08}>
              <Link
                href={opp.href}
                className="group block p-7 bg-white rounded-2xl border border-beige/50 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center text-gold mb-5 group-hover:from-gold group-hover:to-gold-dark group-hover:text-white transition-all duration-300">
                  {iconMap[opp.icon]}
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                  {opp.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                  {opp.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
