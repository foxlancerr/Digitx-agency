import SectionWrapper from "../base/SectionWrapper";

function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-end min-h-[350px]">
        {/* Grid Background Image - Top */}
        <div
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: "url('/assets/images/grid/contact-grid.png')",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;
