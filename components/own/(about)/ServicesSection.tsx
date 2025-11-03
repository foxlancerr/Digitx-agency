"use client";
import React, { useState } from "react";
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
import { Card, CardContent } from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa6";

interface IAward {
  icon: React.ReactNode;
  title: string;
  description: string;
  whyUs: string;
  link: string;
  badgeIcon?: React.ReactNode;
  badgeText: string;
  badgeDate: string;
}

interface ICareerCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeIcon?: React.ReactNode;
  link: string;
}

interface ISectionConfig {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
}

const sectionConfig: ISectionConfig = {
  primaryTitle: "Our",
  secondaryTitle: "Awards & Recognitions",
  description:
    "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.",
};

const awardsData: IAward[] = [
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Web Development",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "Google Award",
    badgeDate: "October 2017",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    link: "#web-development",
  },
  {
    icon: <IoBusinessOutline className="size-6" />,
    title: "Mobile App Development",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "Best Innovation",
    badgeDate: "March 2018",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "Embrace mobility with confidence as mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement.",
    link: "#mobile-development",
  },
  {
    icon: <IoBulbOutline className="size-6" />,
    title: "UI/UX Design",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "Design Excellence",
    badgeDate: "June 2019",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "Leave a lasting impression on your audience with our comprehensive UI/UX design services. We combine aesthetics with functionality to create interfaces that are not only visually stunning but also intuitive and user-friendly. Our design process begins with in-depth user research and persona development.",
    link: "#design",
  },
  {
    icon: <IoPhonePortraitOutline className="size-6" />,
    title: "Digital Strategy & Consulting",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "Strategic Leader",
    badgeDate: "September 2019",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "In today's rapidly evolving digital landscape, having the right strategy is crucial for success. Our digital consulting services help you navigate complex technology decisions and chart a clear path forward. We analyze your current digital presence and identify opportunities for growth.",
    link: "#consulting",
  },
  {
    icon: <IoFlashOutline className="size-6" />,
    title: "Digital Marketing & Growth",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "Growth Champion",
    badgeDate: "December 2020",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "Our data-driven digital marketing strategies allow us to reach your target audience with precision and maximize your marketing ROI. We create comprehensive campaigns that span multiple channels including social media marketing, content marketing, and email campaigns.",
    link: "#marketing",
  },
  {
    icon: <IoSearchOutline className="size-6" />,
    title: "Search Engine Optimization (SEO)",
    badgeIcon: <FaGoogle className="size-4" />,
    badgeText: "SEO Master",
    badgeDate: "February 2021",
    whyUs: "Unparalleled app development services and designs.",
    description:
      "Boost your online visibility and organic traffic with our expert SEO services. Our comprehensive approach combines technical SEO, on-page optimization, and strategic link building to improve your search engine rankings. We conduct thorough keyword research and optimize your website structure.",
    link: "#seo",
  },
];

const careerData: ICareerCard[] = [
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Careers At DigitX",

    description:
      "At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.",
    link: "#web-development",
  },
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Contact Us",

    description:
      "At DigitX, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team. Connect with us through any of the channels below, and we'll be delighted to assist you on your digital journey.",
    link: "#web-development",
  },
];

const AwardSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="">
        <SectionTItle
          primaryTitle={sectionConfig.primaryTitle}
          secondaryTitle={sectionConfig.secondaryTitle}
          description={sectionConfig.description}
          isNewLine={false}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <AwardCard key={index} award={award} index={index} />
          ))}
        </div>

        <div className="mt-6 flex items-center flex-col space-y-6">
          <h3 className="text-center text-base text-gray-40">See This Pages</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.map((award, index) => (
              <CareersCard key={index} award={award} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

interface AwardCardProps {
  award: IAward;
  index: number;
}

interface ICareerCardProps {
  award: ICareerCard;
  index: number;
}

const AwardCard = ({ award, index }: AwardCardProps) => {
  const {
    icon,
    link,
    title,
    description,
    whyUs,
    badgeIcon,
    badgeText,
    badgeDate,
  } = award;

  return (
    <Card className="overflow-hidden relative bg-black p-0 transition-all duration-300 group border-0 rounded-2xl">
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

      {/* Content */}
      <CardContent className="relative z-10 flex flex-col items-center text-center p-8 pt-12">
        {/* Icon */}
        <div className="mb-6">
          <div className="p-4 border border-[#282828] rounded-full">
            <div className="p-4 border border-[#282828] rounded-full">
              <div className="p-4 border border-[#282828] rounded-full text-white">
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Badge Button */}
        <Button
          variant="outline"
          className="h-auto mb-6 text-white bg-transparent rounded-full border-[#282828] hover:bg-[#1A1A1A] hover:border-[#404040] group/btn px-6 py-2 transition-all"
          asChild
        >
          <Link href={link} className="flex items-center gap-2">
            {badgeIcon}
            <span className="hidden sm:inline">{badgeText}</span>
            <span className="sm:hidden text-xs">{badgeDate}</span>
          </Link>
        </Button>

        {/* Title and Description */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {/* Description - Full on desktop */}
          <p className="hidden md:block text-sm text-[#B3B3B3] leading-relaxed">
            {description}
          </p>
          {/* Description - Short on mobile */}
          <p className="md:hidden text-xs text-[#B3B3B3] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Why Section */}
        <div className="border border-[#1A1A1A] px-6 py-6 md:py-10 rounded-xl w-full flex items-center justify-center flex-col space-y-3">
          <h4 className="text-sm font-semibold text-white">Why DigitX?</h4>
          <p className="text-xs md:text-sm text-[#B3B3B3] leading-relaxed">
            {whyUs}
          </p>
        </div>

        {/* Badge Date - Hidden on mobile, shown on desktop */}
        <div className="mt-4 text-xs text-[#808080] hidden sm:block">
          {badgeDate}
        </div>
      </CardContent>
    </Card>
  );
};
const CareersCard = ({ award, index }: ICareerCardProps) => {
  const { icon, link, title, description, badgeIcon } = award;

  return (
    <Card className="overflow-hidden relative bg-black p-0 transition-all duration-300 group border-0 rounded-2xl">
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

      {/* Content */}
      <CardContent className="relative z-10 flex flex-col items-center text-center p-8 pt-12">
        {/* Icon */}
        <div className="mb-6">
          <div className="p-4 border border-[#282828] rounded-full">
            <div className="p-4 border border-[#282828] rounded-full">
              <div className="p-4 border border-[#282828] rounded-full text-white">
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {/* Description - Full on desktop */}
          <p className="hidden md:block text-sm text-[#B3B3B3] leading-relaxed">
            {description}
          </p>
          {/* Description - Short on mobile */}
          <p className="md:hidden text-xs text-[#B3B3B3] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Learn More Button */}
        <Button
          variant="outline"
          className="h-auto text-primary-foreground  bg-black! rounded-full w-fit border-border group/btn"
          asChild
        >
          <Link href={link} className="flex items-center font-light! gap-2">
            View Page
            <span className="rounded-full px-4 py-2 bg-primary">
              <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AwardSection;
