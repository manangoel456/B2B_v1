import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyBarekyne from "@/components/home/WhyBarekyne";
import BusinessOpportunities from "@/components/home/BusinessOpportunities";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedProducts />
      <WhyBarekyne />
      <BusinessOpportunities />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
