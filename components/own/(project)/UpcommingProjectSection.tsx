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
  category: string;
  completionDate: string;
  description: string;
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
    category: "Web Development",
    completionDate: "Q2 2024",
    description:
      "Our team collaborated with ABC Tech Solutions to revamp their e-commerce platform. The project focuses on modernizing their website architecture, improving user experience, and implementing advanced analytics to track customer behavior and optimize conversion rates.",
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
    category: "Mobile App Development",
    completionDate: "Q3 2024",
    description:
      "We are developing a comprehensive fitness tracking mobile application with AI-powered workout recommendations, real-time health metrics synchronization, and community engagement features to help users achieve their fitness goals.",
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
    category: "Full Stack Development",
    completionDate: "Q4 2024",
    description:
      "Our team is building an advanced food delivery platform with real-time GPS tracking, intelligent route optimization, and machine learning-based restaurant recommendations to enhance customer experience and operational efficiency.",
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
    category: "Web Development",
    completionDate: "Q1 2025",
    description:
      "We are enhancing the EduLearn platform with advanced features including interactive live classes, AI-powered personalized learning paths, and comprehensive analytics dashboards for instructors to monitor student progress and engagement.",
  },
];

const UpcommingProjectSection = () => {
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
        primaryTitle="Upcoming"
        secondaryTitle="Projects"
        isNewLine={false}
        description="At DigitX, we are continually working on exciting new projects to push the boundaries of digital innovation and deliver exceptional solutions to our valued clients. While we are thrilled to share our upcoming projects with you, we understand the importance of confidentiality and safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming projects while keeping specific details concealed."
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
  category,
  completionDate,
  description,
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
            />
          </div>
          <h3 className="text-xl font-semibold text-white">{companyName}</h3>
        </div>
      </CardContent>
      <CardDescription className="relative border rounded-2xl p-6 flex sm:flex-row flex-col gap-2 justify-between">
        <div className="space-y-2 z-3!">
          <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">Category</p>
          <h4 className="text-base font-semibold text-white">{category}</h4>
        </div>

        {/* Completion Date Section */}
        <div className="space-y-2 z-3!">
          <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
            Expected Completion
          </p>
          <h4 className="text-base font-semibold text-white">
            {completionDate}
          </h4>
        </div>
      </CardDescription>
      <CardDescription className="relative border rounded-2xl p-6">
        <div className="flex flex-col space-y-4">
          {/* Description Section */}
          <div className="space-y-2 z-3!">
            <h4 className="text-base font-semibold text-white">
              Project Description
            </h4>
            <p className="text-sm text-[#B3B3B3] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default UpcommingProjectSection;
