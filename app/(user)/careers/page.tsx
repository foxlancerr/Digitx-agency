import CTASection from "@/components/own/(home)/CTASection";
import HeroSection from "@/components/own/(careers)/HeroSection";
import JobListingsSection from "@/components/own/(careers)/JobListingsSection";
import EmyleeBenefitsSection from "@/components/own/(careers)/EmyleeBenefitsSection";
import HowItWorksSection from "@/components/own/(careers)/HowItWorksSection";
import HowToApplySection from "@/components/own/(careers)/HowToApplySection";

function CareersPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <JobListingsSection></JobListingsSection>
      <HowToApplySection />
      <EmyleeBenefitsSection />
      <HowItWorksSection />
      <CTASection></CTASection>
    </>
  );
}

export default CareersPage;
