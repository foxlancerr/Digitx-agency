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
            Unlock Your Potential
            <span className="text-[#666666]">
              {" "}
              in the Digital<br></br> World
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
            At DigitX, we believe in fostering a dynamic and collaborative work
            environment that empowers our team members to excel in their
            respective fields. Join us to be part of a passionate and innovative
            team dedicated to crafting exceptional digital solutions for clients
            across the globe. We are committed to nurturing talent, encouraging
            professional growth, and creating a workplace where creativity
            thrives.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
