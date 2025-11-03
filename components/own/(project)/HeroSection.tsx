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

        <div className="mb-12 md:mb-16 z-2 max-w-5xl mt-20">
          <h2 className="text-3xl md:text-5xl leading-tight font-bold mb-4">
            Empowering Your
            <span className="text-[#666666]"> Digital Vision</span>
          </h2>
          <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
            At DigitX, we are committed to empowering your digital vision with
            innovative solutions tailored to your unique needs. Our team of
            skilled professionals, coupled with cutting-edge technologies,
            ensures that we deliver exceptional results that elevate your online
            presence. Whether it's captivating web designs, seamless app
            development, effective digital marketing, or other digital
            solutions, we are dedicated to bringing your ideas to life and
            helping your business thrive in the dynamic digital landscape.
            Partner with us today, and let's unlock endless possibilities for
            your digital success!
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
