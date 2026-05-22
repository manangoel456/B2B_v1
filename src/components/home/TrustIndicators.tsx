import {
  Globe,
  FlaskConical,
  Stethoscope,
  Building2,
  Package,
  Truck,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

import { TRUST_INDICATORS } from "@/lib/constants";

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white border-y border-beige/50" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_INDICATORS.map((indicator, i) => (
            <AnimatedSection key={indicator.title} delay={i * 0.08}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  {iconMap[indicator.icon]}
                </div>
                <h3 className="text-sm font-semibold text-charcoal mb-1">
                  {indicator.title}
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed hidden lg:block">
                  {indicator.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
