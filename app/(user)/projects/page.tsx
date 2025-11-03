import CTASection from "@/components/own/(home)/CTASection";
import FeaturesSection from "@/components/own/(project)/FeaturesSection";
import HeroSection from "@/components/own/(project)/HeroSection";
import ProjectShowcaseSection from "@/components/own/(project)/ProjectShowcaseSection";
import UpcommingProjectSection from "@/components/own/(project)/UpcommingProjectSection";

function ProjectSection() {
  return (
    <>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <UpcommingProjectSection />
      <ProjectShowcaseSection></ProjectShowcaseSection>
      <CTASection></CTASection>
    </>
  );
}

export default ProjectSection;
