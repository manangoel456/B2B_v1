import {
  FlaskConical,
  Leaf,
  HeadsetIcon,
  TrendingUp,
  Sparkles,
  Network,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const reasons = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Clinical Formulation Philosophy",
    description:
      "Every product is backed by dermatological science, using research-proven active ingredients at optimal concentrations for maximum efficacy.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Premium Ingredients",
    description:
      "We source the finest ingredients globally — from Kakadu Plum Extract to Dermawhite™ technology — ensuring uncompromised quality in every formulation.",
  },
  {
    icon: <HeadsetIcon className="w-6 h-6" />,
    title: "Dedicated B2B Support",
    description:
      "From onboarding to ongoing business development, our team provides personalized support, marketing materials, and strategic guidance.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "High-Margin Opportunity",
    description:
      "Our competitive pricing structure ensures exceptional margins for distributors, retailers, and clinic partners across all product lines.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Modern Skincare Demand",
    description:
      "India's clinical skincare market is growing at 15-20% annually. Position yourself at the forefront of this demand with Barekyne.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Scalable Distribution Network",
    description:
      "Our proven distribution model scales with your business. Start local, expand regionally, and grow into a PAN India presence.",
  },
];

export default function WhyBarekyne() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="why-barekyne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Partner with Barekyne"
          subtitle="We combine clinical excellence with business opportunity to create a partnership model designed for mutual growth."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <div className="group p-7 rounded-2xl border border-beige/50 hover:border-gold/20 bg-ivory/50 hover:bg-cream/50 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
