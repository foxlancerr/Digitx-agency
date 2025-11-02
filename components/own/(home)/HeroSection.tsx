import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const HeroSectionData = {
  primaryHeading: "Digital Solutions",
  SecondaryHeading: "That Drive Success",
  tagline: "Unlock Your Digital Potential Today",
  description:
    "At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "/",
    },
    secondary: {
      text: "Free Consultation",
      url: "/",
    },
  },
  image: {
    src: "/assets/images/hero-bg.png",
    alt: "Hero section demo image showing interface components",
  },
};

const HeroSection = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute hidden sm:block top-0 left-0 w-full h-full -z-10 bg-[url('/assets/images/grid/hero-grid.png')] bg-left bg-no-repeat"
        style={{ backgroundSize: "890px auto" }}
      />
      <div className="grid items-center lg:grid-cols-2 min-h-screen pt-30 sm:pl-10 lg:pl-18 relative">
        {/* left side */}

        <div className="bg-grid-image order-2 sm:order-1  h-full flex flex-col gap-6 text-center lg:items-start lg:text-left justify-center py-12 sm:py-0 relative">
          <div
            className="absolute block sm:hidden top-0 left-0 w-full h-full -z-10 bg-[url('/assets/images/grid/hero-grid.png')] bg-left bg-no-repeat"
            style={{ backgroundSize: "890px auto" }}
          />
          <h1 className="text-primary-foreground leading-tight text-3xl font-bold lg:text-5xl">
            {HeroSectionData.primaryHeading} <br />
            <span className="text-muted">
              {HeroSectionData.SecondaryHeading}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl lg:text-xl">
            {HeroSectionData.description}
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-primary-foreground max-w-xl lg:text-xl">
              {HeroSectionData.tagline}
            </p>
            <div className="flex w-full justify-center gap-2 lg:justify-start">
              {HeroSectionData.buttons.primary && (
                <Button
                  asChild
                  className="w-fit sm:w-auto bg-primary-foreground rounded-full text-primary py-6"
                >
                  <Link href={HeroSectionData.buttons.primary.url}>
                    {HeroSectionData.buttons.primary.text}
                  </Link>
                </Button>
              )}
              {HeroSectionData.buttons.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="w-fit sm:w-auto rounded-full text-primary-foreground py-6"
                >
                  <Link href={HeroSectionData.buttons.secondary.url}>
                    {HeroSectionData.buttons.secondary.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="order-1 sm:order-2 h-full flex flex-col justify-end">
          <img
            src={HeroSectionData.image.src}
            alt={HeroSectionData.image.alt}
            className="w-full h-5/6  sm:h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
