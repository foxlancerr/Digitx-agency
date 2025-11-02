import CTASection from "@/components/own/(home)/CTASection";
import CategoriesOfServices from "@/components/own/(services)/CategoriesOfServices";
import HeroSection from "@/components/own/(services)/HeroSection";
import ServicesSection from "@/components/own/(services)/ServicesSection";
import SuccessStoriesSection from "@/components/own/(services)/SuccessStorySection";
import React from "react";

function ServicesPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <SuccessStoriesSection/>
      <CategoriesOfServices/>
      <CTASection></CTASection>
    </>
  );
}

export default ServicesPage;
