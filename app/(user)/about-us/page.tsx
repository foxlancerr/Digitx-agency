import AchievementSection from "@/components/own/(about)/AchievementSection";
import AwardSection from "@/components/own/(about)/ServicesSection";
import ServicesSection from "@/components/own/(about)/ServicesSection";
import TeamMembersSection from "@/components/own/(about)/TeamMembersSection";
import CTASection from "@/components/own/(home)/CTASection";
import HeroSection from "@/components/own/(project)/HeroSection";
import ProjectShowcaseSection from "@/components/own/(project)/ProjectShowcaseSection";
import UpcommingProjectSection from "@/components/own/(project)/UpcommingProjectSection";

function AboutUSPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <TeamMembersSection></TeamMembersSection>
      <AchievementSection></AchievementSection>
      <AwardSection></AwardSection>
      <CTASection></CTASection>
    </>
  );
}

export default AboutUSPage;
