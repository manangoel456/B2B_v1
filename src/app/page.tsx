import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyBarekyne from "@/components/home/WhyBarekyne";
import BusinessOpportunities from "@/components/home/BusinessOpportunities";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { HomePageSchemaGraph } from "@/components/seo/JsonLd";
import { FAQ_DATA } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HomePageSchemaGraph faqs={FAQ_DATA} />
      <HeroSection />
      <TrustIndicators />
      <FeaturedProducts />
      <WhyBarekyne />
      <BusinessOpportunities />
      <ProcessSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
