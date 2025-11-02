import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import {
  IoStorefrontOutline,
  IoFitnessOutline,
  IoRestaurantOutline,
  IoSchoolOutline,
} from "react-icons/io5";
import Image from "next/image";
import SectionTItle from "../base/SectionTItle";

interface ISuccessStory {
  image: string;
  icon: React.ReactNode;
  companyName: string;
  industries: string[];
  challenge: string;
  solution: string;
  link: string;
}

const successStoriesData: ISuccessStory[] = [
  {
    image: "/assets/images/partners/partner1.png",
    icon: <IoStorefrontOutline className="size-4" />,
    companyName: "ABC Tech Solutions",
    industries: ["E-commerce", "Web Design & Development"],
    challenge:
      "ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.",
    solution:
      "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.",
    link: "#abc-tech",
  },
  {
    image: "/assets/images/partners/partner2.png",

    icon: <IoFitnessOutline className="size-4" />,
    companyName: "Fitness Tracker App",
    industries: ["Health & Fitness", "Mobile App Development"],
    challenge:
      "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
    solution:
      "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms.",
    link: "#fitness-tracker",
  },
  {
    image: "/assets/images/partners/partner3.png",

    icon: <IoRestaurantOutline className="size-4" />,
    companyName: "FoodHub Delivery",
    industries: ["Food & Beverage", "Mobile App Development"],
    challenge:
      "FoodHub needed a comprehensive delivery platform to connect restaurants with customers. They required real-time order tracking, secure payment integration, and a rating system for quality assurance.",
    solution:
      "We developed a full-stack mobile and web application with GPS-based tracking, multiple payment gateways, and an intelligent recommendation system. The platform successfully reduced delivery times by 40% and increased customer satisfaction ratings.",
    link: "#foodhub",
  },
  {
    image: "/assets/images/partners/partner4.png",

    icon: <IoSchoolOutline className="size-4" />,
    companyName: "EduLearn Platform",
    industries: ["Education", "Web Development"],
    challenge:
      "EduLearn wanted to create an online learning platform that could scale to thousands of concurrent users while providing interactive video lessons, quizzes, and progress tracking for students and instructors.",
    solution:
      "Our team built a robust learning management system with video streaming capabilities, interactive assessments, and real-time analytics dashboard. We implemented cloud infrastructure that ensured 99.9% uptime and smooth video playback even during peak hours.",
    link: "#edulearn",
  },
];

const SuccessStoriesSection = () => {
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

      {/* Header */}

      <SectionTItle
        primaryTitle="Success"
        secondaryTitle="Stories"
        isNewLine={false}
        description="At DigitX, our success is defined by the achievements of our valued
          clients. We take immense pride in the transformative impact our
          digital solutions have had on their businesses. Here are some
          inspiring success stories that highlight the outcomes of our
          collaborative efforts."
      />

      {/* Stories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {successStoriesData.map((story, index) => (
          <SuccessStoryCard key={index} {...story} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const SuccessStoryCard = ({
  icon,
  companyName,
  industries,
  challenge,
  solution,
  link,
  image,
}: ISuccessStory) => {
  return (
    <Card className="relative border-0 bg-[#0F0F0F] rounded-2xl p-6 hover:border-[#282828] transition-all duration-300 group overflow-hidden">
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

      {/* Gradient Overlay - Fades grid to black */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, #000000 100%)",
          zIndex: 2,
        }}
      />

      <CardContent className="relative p-0 space-y-6 z-2">
        {/* Header with Icon and Company Name */}
        <div className="flex items-center gap-4 z-2">
          <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border border-[#282828] flex items-center justify-center shrink-0 group-hover:bg-[#282828] transition-colors">
            <Image
              className="shrink-0"
              src={image}
              width={35}
              height={35}
              alt={companyName}
            ></Image>
          </div>
          <h3 className="text-xl font-semibold text-white">{companyName}</h3>
        </div>

        {/* Industries Badges */}
        <div className="flex flex-wrap gap-2">
          {industries.map((industry, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="py-1.5 flex gap-2 px-2 pr-4 bg-transparent border-[#282828] text-primary-foreground hover:bg-[#1A1A1A] hover:border-[#404040] transition-colors"
            >
              <div className="p-2 rounded-full bg-[#1A1A1A] border border-[#282828] flex items-center justify-center  group-hover:bg-[#282828] transition-colors">
                {icon}
              </div>
              <span>{industry}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardDescription className="relative border rounded-2xl p-6">
        <div className="flex flex-col space-y-4 ">
          {/* Challenge Section */}
          <div className="space-y-2 z-3!">
            <h4 className="text-base font-semibold text-white">Challenge</h4>
            <p className="text-sm text-[#B3B3B3] leading-relaxed">
              {challenge}
            </p>
          </div>

          <hr className="z-3!" />

          {/* Solution Section */}
          <div className="space-y-2 z-3!">
            <h4 className="text-base font-semibold text-white">Solution</h4>
            <p className="text-sm text-[#B3B3B3] leading-relaxed">{solution}</p>
          </div>

          {/* Read Full Story Link */}
          <Link
            href={link}
            className="underline z-3! inline-flex items-center gap-2 text-sm text-[#CCCCCC] hover:text-white transition-colors group/link"
          >
            Read Full Story
          </Link>
        </div>
      </CardDescription>
    </Card>
  );
};

export default SuccessStoriesSection;
