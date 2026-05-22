import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Partners Across India"
          subtitle="Hear from our valued partners about their experience with Barekyne."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <div className="relative p-7 bg-cream/50 rounded-2xl border border-beige/50 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute top-5 right-5 text-gold/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-charcoal-light leading-relaxed flex-1 mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-beige/50">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-gold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-warm-gray">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
