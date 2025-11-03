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
  IoLogoLinkedin,
  IoLogoTwitter,
  IoCalendarOutline,
} from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import SectionTItle from "../base/SectionTItle";
import { Card, CardContent } from "@/components/ui/card";
import { FaGoogle, FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";

interface ISocialLink {
  icon: React.ReactNode;
  link: string;
}

interface ITeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: ISocialLink[];
}

interface ISectionConfig {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
}

const sectionConfig: ISectionConfig = {
  primaryTitle: "Our",
  secondaryTitle: "Achievements",
  description:
    "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.",
};

const milestonesData: IMilestone[] = [
  {
    id: "milestone-1",
    title: "Foundation of DigitX",
    date: "October 2017",
    description:
      "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
  },
  {
    id: "milestone-2",
    title: "Series A Funding",
    date: "March 2018",
    description:
      "Successfully raised Series A funding to expand our team and accelerate product development. This milestone marked our commitment to delivering world-class digital solutions.",
  },
  {
    id: "milestone-3",
    title: "Global Expansion",
    date: "June 2019",
    description:
      "Opened offices in multiple countries and expanded our services to serve clients across different continents. Became a truly global digital innovation company.",
  },
  {
    id: "milestone-4",
    title: "1000+ Projects Delivered",
    date: "January 2021",
    description:
      "Achieved the milestone of delivering over 1000 successful projects, cementing our position as a trusted partner for digital transformation.",
  },
  {
    id: "milestone-5",
    title: "Industry Recognition",
    date: "September 2023",
    description:
      "Received multiple industry awards for innovation, design excellence, and customer satisfaction. Recognized as a leader in the digital solutions space.",
  },
];

const AchievementSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="">
        <SectionTItle
          primaryTitle={sectionConfig.primaryTitle}
          secondaryTitle={sectionConfig.secondaryTitle}
          description={sectionConfig.description}
          isNewLine={false}
        />

        {/* Team Members Grid */}
        <div className="space-y-8 relative ">
          <div className="h-full w-auto absolute z-2 top-0 left-0 overflow-hidden">
            <img
              alt="grid line"
              src={"/assets/images/grid/achievement.png"}
              className="w-15 sm:w-30 h-[120%] transform -translate-y-3"
            ></img>
          </div>
          <div className="py-6 sm:py-12 flex flex-col space-y-6 sm:space-y-12">
            {milestonesData.map((milestone, index) => (
              <TimelineMilestone
                key={milestone.id}
                milestone={milestone}
                index={index}
                isLast={index === milestonesData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

interface TeamMemberCardProps {
  member: ITeamMember;
  index: number;
}

interface IMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface TimelineMilestoneProps {
  milestone: IMilestone;
  index: number;
  isLast: boolean;
}

const TimelineMilestone = ({
  milestone,
  index,
  isLast,
}: TimelineMilestoneProps) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-3 md:gap-8">
      {/* Timeline Left Section - Hidden on mobile */}
      <div className="sm:w-[250px]">
        <h2 className="text-5xl sm:text-8xl font-semibold transform ml-2 sm:ml-0">00{index + 1}</h2>
      </div>

      {/* Content Card */}
      <div className="flex-1 ml-18 sm:ml-0">
        {/* Top Section - Title and Date */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h3 className="text-xl md:text-2xl text-white leading-tight">
            {milestone.title}
          </h3>
          <div className=" border rounded-full p-3 px-5! flex items-center w-fit gap-2 text-xs text-[#B3B3B3] flex-shrink-0">
            <IoCalendarOutline className="w-4 h-4" />
            <span className="font-medium">{milestone.date}</span>
          </div>
        </div>
        <div className="border border-[#1A1A1A] rounded-xl p-6 md:p-8  transition-all duration-300 group overflow-hidden relative">
          {/* Gradient Border Top */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #1A1A1A 0%, #282828 50%, #1A1A1A 100%)",
            }}
          />

          {/* Description Label */}
          <div className="mb-4">
            <p className="text-base text-white ">Description</p>
          </div>

          {/* Description Text */}
          <p className="text-sm md:text-base text-gray-40 leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
