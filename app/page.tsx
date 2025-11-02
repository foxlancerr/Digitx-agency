import CTASection from "@/components/own/(home)/CTASection";
import FaqsSection from "@/components/own/(home)/FaqsSection";
import HeroSection from "@/components/own/(home)/HeroSection";
import PartnersSection from "@/components/own/(home)/PartnersSection";
import ReasonsSection from "@/components/own/(home)/ReasonSection";
import ServicesSection from "@/components/own/(home)/ServicesSection";
import TestimonialsSection from "@/components/own/(home)/TestimonialsSection";
import WorkSection from "@/components/own/(home)/WorkSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReasonsSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <FaqsSection />
      <PartnersSection />
      <CTASection></CTASection>
    </>
  );
}
