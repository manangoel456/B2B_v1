import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={centered ? "text-center" : ""}>
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Barekyne
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-warm-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
