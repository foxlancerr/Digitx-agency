import React from "react";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";

function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-center ">
        {/* Grid Background Image - Top */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "url('/assets/images/grid/services-hero.png')",
            backgroundPosition: "center",
            backgroundSize: "1600px",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        <div className="mb-12 md:mb-16 z-2 max-w-4xl mt-20">
          <h2 className="text-3xl md:text-5xl leading-tight font-bold mb-4">
            Empowering Your
            <span className="text-[#666666]"> Digital Journey</span>
          </h2>
          <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
            At DigitX, we are passionate about sharing our expertise, insights,
            and latest trends in the digital world. Our blog serves as a
            knowledge hub, offering valuable information and resources for
            individuals, businesses, and fellow industry enthusiasts. Whether
            you are a seasoned professional or a curious learner, our blog
            covers a wide range of topics related to web design, development,
            digital marketing, technology, and much more. Join us as we embark
            on a journey to explore the digital landscape and unlock the
            potential of the online world.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
