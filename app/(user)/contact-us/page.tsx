import AchievementSection from "@/components/own/(about)/AchievementSection";
import AwardSection from "@/components/own/(about)/ServicesSection";
import TeamMembersSection from "@/components/own/(about)/TeamMembersSection";
import CTASection from "@/components/own/(home)/CTASection";
import HeroSection from "@/components/own/(contact)/HeroSection";
import TouchTodaySection from "@/components/own/(contact)/TouchTodaySection";

function ContactUsPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <TouchTodaySection></TouchTodaySection>
      <AchievementSection></AchievementSection>
      <AwardSection></AwardSection>
      <CTASection></CTASection>
    </>
  );
}

export default ContactUsPage;
