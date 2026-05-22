import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="A simple, transparent process from initial inquiry to full partnership."
        />

        <div className="mt-14">
          {/* Desktop Process */}
          <div className="hidden lg:flex items-start justify-between relative">
            {/* Connector Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection
                key={step.step}
                delay={i * 0.12}
                className="relative flex flex-col items-center text-center flex-1 px-4"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-gold flex items-center justify-center mb-5 shadow-lg shadow-gold/10">
                  <span className="text-xl font-heading font-bold text-gold">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Process */}
          <div className="lg:hidden space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-md shadow-gold/10">
                    <span className="text-lg font-heading font-bold text-gold">
                      {step.step}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-heading font-bold text-charcoal mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
