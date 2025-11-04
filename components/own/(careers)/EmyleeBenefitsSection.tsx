import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import SectionWrapper from "../base/SectionWrapper";
import Image from "next/image";
import SectionTItle from "../base/SectionTItle";
import { IoShareSocialOutline } from "react-icons/io5";

interface IBenefitItem {
  text: string;
  boldText?: string; // Optional: for semi-bold titles like "Health Insurance:"
}

interface IBenefitCard {
  image: React.ReactNode;
  title: string;
  benefits: IBenefitItem[];
}

const benefitsData: IBenefitCard[] = [
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Competitive Compensation",
    benefits: [
      {
        text: "We offer competitive salary packages to reward your skills, experience, and dedication to the company.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Health and Wellness",
    benefits: [
      {
        boldText: "Health Insurance:",
        text: "Comprehensive health insurance plans to cover medical, dental, and vision needs.",
      },
      {
        boldText: "Mental Health Support:",
        text: " Employee Assistance Program (EAP) providing counseling and support services.",
      },
      {
        boldText: "Wellness Programs: ",
        text: "Initiatives to promote physical and mental well-being, such as fitness classes and workshops.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Paid Time Off",
    benefits: [
      {
        boldText: "Vacation Leave: ",
        text: "Generous vacation days to relax and recharge.",
      },
      {
        boldText: "Sick Leave: ",
        text: "Paid sick days for when you need to take care of your health.",
      },
      {
        boldText: "Holidays: ",
        text: "Enjoy paid time off on recognized public holidays.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Professional Development",
    benefits: [
      {
        boldText: "Training Opportunities: ",
        text: "Access to workshops, courses, and resources to enhance your skills and knowledge.",
      },
      {
        boldText: "Career Growth:",
        text: " Opportunities for career advancement and skill development.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Flexible Work Arrangements",
    benefits: [
      {
        boldText: "Remote Work: ",
        text: "We support flexible work arrangements, including remote work options for certain roles.",
      },
      {
        boldText: "Flexible Hours: ",
        text: "Adjust your work schedule to accommodate personal commitments",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Employee Referral Program",
    benefits: [
      {
        text: "Incentives for referring qualified candidates to open positions at DigitX.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Team-Building Activities",
    benefits: [
      {
        text: "Regular team-building events and activities to foster camaraderie and collaboration among team members.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Employee Recognition",
    benefits: [
      {
        text: "Recognizing and celebrating employee achievements and contributions to the company's success.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Modern Workspace",
    benefits: [
      {
        text: "State-of-the-art office facilities and a comfortable working environment.",
      },
    ],
  },
  {
    image: <IoShareSocialOutline className="size-6" />,
    title: "Company Events and Celebrations",
    benefits: [
      {
        text: "Celebrate company milestones, birthdays, and other special occasions together.",
      },
    ],
  },
];

const EmyleeBenefitsSection = () => {
  return (
    <SectionWrapper className="bg-black">
      {/* Border with Gradient Fade */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #1A1A1A 0%, #1A1A1A 60%, transparent 100%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: 5,
        }}
      />
      {/* Grid Background Image - Top */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/grid/hero-grid.png')",
          backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />
      {/* Gradient Overlay - Fades grid to black */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, #000000 100%)",
          zIndex: 2,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <SectionTItle
          isNewLine={false}
          primaryTitle={"Benefits"}
          secondaryTitle={"& Perks"}
          description={
            "At DigitX, we believe in prioritizing the well-being and growth of our team members. We offer a comprehensive range of benefits and perks to ensure our employees feel valued, motivated, and supported in both their personal and professional lives. As a member of the DigitX family, you can enjoy the following benefits"
          }
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const BenefitCard = ({ image, title, benefits }: IBenefitCard) => {
  return (
    <Card className="relative border-0 bg-[#0F0F0F] rounded-2xl p-6 sm:p-8 hover:border-[#282828] transition-all duration-300 group overflow-hidden">
      {/* Grid Background Image - Top */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/grid/hero-grid.png')",
          backgroundPosition: "left top",
          backgroundSize: "400px",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Gradient Overlay - Fades grid to black */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, #000000 100%)",
          zIndex: 2,
        }}
      />

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:mb-10">
        {/* Left Side: Icon and Title */}
        <CardContent className="relative p-0 space-y-6 z-10 w-full sm:w-[400px] shrink-0">
          {/* Header with Icon and Title */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#282828] flex items-center justify-center shrink-0 group-hover:bg-[#282828] transition-colors">
              {image}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </CardContent>

        {/* Right Side: Benefits List */}
        <CardDescription className="relative border rounded-2xl p-6 flex-1 justify-start z-10">
          <div className="flex flex-col space-y-4">
            {/* Benefits List */}
            <div className="space-y-2">
              <ul className="space-y-2 ml-5 list-disc">
                {benefits.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#B3B3B3] leading-relaxed"
                  >
                    {item.boldText && (
                      <span className="font-semibold text-white">
                        {item.boldText}{" "}
                      </span>
                    )}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardDescription>
      </div>
    </Card>
  );
};

export default EmyleeBenefitsSection;
