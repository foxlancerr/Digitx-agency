import { Button } from "@/components/ui/button";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import Image from "next/image";

const CTASection = () => {
  return (
    <SectionWrapper className="bg-black relative overflow-hidden min-h-screen">
      {/* Grid Background */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/grid/hero-grid.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/cta/digitx.png')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />


      {/* Content */}
      <div className="relative z-10 mx-auto text-center sm:mb-[300px]">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#B3B3B3] leading-relaxed mb-8  mx-auto max-w-5xl">
          Take the first step towards digital success with DigitX by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business. Whether you need a stunning website, a
          powerful mobile app, or a data-driven marketing campaign, we've got
          you covered. Let's embark on this transformative journey together.
        </p>

        {/* Subheading */}
        <p className="text-base md:text-xl font-normal text-white mb-6">
          Unlock Your Digital Potential Today
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-[#E6E6E6] rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
            asChild
          >
            <Link href="#get-started">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-[#282828] hover:bg-[#1A1A1A] hover:border-[#404040] rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
            asChild
          >
            <Link href="#consultation">Free Consultation</Link>
          </Button>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default CTASection;