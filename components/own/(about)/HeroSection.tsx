import React from "react";
import SectionWrapper from "../base/SectionWrapper";

function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-end ">
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

        <div className="mb-12 md:mb-16 z-2 max-w-6xl mt-20">
          <h2 className="text-3xl md:text-5xl leading-tight font-bold mb-4">
            Elevating Brands
            <span className="text-[#666666]"> in the Digital Age</span>
          </h2>
          <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
            At DigitX, we offer a comprehensive suite of digital solutions
            designed to propel your business to new heights in the digital
            realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation, we are committed to
            delivering exceptional results for every project we undertake. From
            captivating web design that leaves a lasting impression to seamless
            web development that ensures optimal functionality, we cover every
            aspect of your online presence.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
