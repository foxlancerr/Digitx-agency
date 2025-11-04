import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  IoShareSocialOutline,
  IoBulbOutline,
  IoPhonePortraitOutline,
  IoFlashOutline,
  IoSearchOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import SectionTItle from "../base/SectionTItle";

interface IReasonCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  idxPosition?: number;
}

const reasonsData: IReasonCard[] = [
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Expertise That Drives Results",
    description:
      "Our team of seasoned professionals brings years of experience and expertise to the table.",
    link: "#",
  },
  {
    icon: <IoBusinessOutline className="size-6" />,
    title: "Tailored Business Solutions",
    description:
      "We understand that every business is unique. That's why our solutions are customized.",
    link: "#",
  },
  {
    icon: <IoBulbOutline className="size-6" />,
    title: "Cutting-Edge Web Design",
    description:
      "Leave a lasting impression on your audience with our responsive web design services.",
    link: "#",
  },
  {
    icon: <IoPhonePortraitOutline className="size-6" />,
    title: "Mobile-First Approach",
    description:
      "In today's mobile-centric world, we prioritize mobile design to ensure your website.",
    link: "#",
  },
  {
    icon: <IoFlashOutline className="size-6" />,
    title: "Marketing Strategies",
    description:
      "Our data-driven marketing strategies allow us to reach your audience with precision.",
    link: "#",
  },
  {
    icon: <IoSearchOutline className="size-6" />,
    title: "Search Engine Optimization",
    description:
      "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
    link: "#",
  },
];

const FeaturesSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTItle
          isNewLine={false}
          primaryTitle={"Job Listings"}
          secondaryTitle={"at DigitX"}
          description={
            "Explore our current job listings to discover exciting career opportunities that match your skill set and interests. We offer positions in various digital disciplines, including web design, mobile app development, digital marketing, project management, and more. Each job listing provides comprehensive details about the role, responsibilities, qualifications, and benefits. Whether you are an experienced professional or a fresh graduate, we welcome talent from all backgrounds to join our team."
          }
        ></SectionTItle>

        {/* First Row - Cards 0,1,2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsData.slice(0, 3).map((reason, index) => (
            <FeaturesCard key={index} {...reason} idxPosition={index} />
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#1A1A1A]" />

        {/* Second Row - Cards 3,4,5 */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {reasonsData.slice(3, 5).map((reason, index) => (
            <FeaturesCard key={index} {...reason} idxPosition={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const FeaturesCard = ({
  idxPosition,
  icon,
  link,
  title,
  description,
}: IReasonCard) => {
  // Center card in a 3-column grid is at index 1
  const isCenterCard = idxPosition === 1;

  return (
    <div
      className={`sm:p-6 transition-all duration-300 group flex flex-col items-center text-center
        ${isCenterCard ? "lg:border-l lg:border-r border-[#282828]" : ""}
      `}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="flex items-center justify-center rounded-full border-8 border-border h-20 w-20 bg-linear-to-br from-gray-40 to-gray-10 cursor-pointer hover:border-[#282828] transition-colors">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
