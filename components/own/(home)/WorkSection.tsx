"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  IoShareSocialOutline,
  IoBulbOutline,
  IoPhonePortraitOutline,
  IoFlashOutline,
} from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import SectionTItle from "../base/SectionTItle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface IWorkSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  projectImage: string;
  category: string;
  date: string;
}

const projectsData: IWorkSection[] = [
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Modern Corporate Website",
    projectImage: "/assets/images/projects/project1.png",
    category: "Web Design",
    date: "April 2022",
    description:
      "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.",
    link: "#",
  },
  {
    icon: <IoBulbOutline className="size-6" />,
    title: "E-Commerce Platform",
    projectImage: "/assets/images/projects/project2.png",
    category: "Web Development",
    date: "June 2022",
    description:
      "A fully functional e-commerce platform with seamless payment integration, inventory management, and an intuitive shopping experience for customers.",
    link: "#",
  },
  {
    icon: <IoPhonePortraitOutline className="size-6" />,
    title: "Mobile Banking App",
    projectImage: "/assets/images/projects/project3.png",
    category: "Mobile App",
    date: "August 2022",
    description:
      "Secure and user-friendly mobile banking application with advanced features including biometric authentication and real-time transaction monitoring.",
    link: "#",
  },
  {
    icon: <IoFlashOutline className="size-6" />,
    title: "SaaS Dashboard",
    projectImage: "/assets/images/projects/project4.png",
    category: "UI/UX Design",
    date: "October 2022",
    description:
      "Comprehensive analytics dashboard for SaaS platform featuring data visualization, real-time updates, and customizable reporting tools.",
    link: "#",
  },
];

const WorkSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionTItle
          primaryTitle={"Our"}
          secondaryTitle={"Work"}
          description={
            "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."
          }
          isNewLine={false}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const WorkCard = ({
  icon,
  link,
  title,
  description,
  projectImage,
  category,
  date,
}: IWorkSection) => {
  return (
    <Card className="overflow-hidden relative bg-black transition-all duration-300 group border-0 rounded-2xl hover:transform hover:scale-[1.02] p-6">
      {/* Border with Gradient Fade */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #1A1A1A 0%, #1A1A1A 50%, transparent 100%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: 5,
        }}
      />

      {/* Project Image Section */}
      <Card className="relative sm:h-80 h-50 border bg-[#0F0F0F] flex items-center justify-center">
        {/* Grid Background */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50"
          style={{
            backgroundImage: "url('/assets/images/grid/hero-grid.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 60%, #000000 100%)",
            zIndex: 2,
          }}
        />

        <Image width={100} height={100} src={projectImage} alt={title}
        className="size-15! sm:size-20!"
        ></Image>

        {/* View Project Button - Overlay on hover */}
        <div className="absolute -bottom-4 left-[50%] -translate-x-[50%] transition-opacity duration-300 flex items-center justify-center z-2">
          <Button
            variant="outline"
            className="rounded-full border bg-black! backdrop-blur-sm text-white p-4! py-5!"
            asChild
          >
            <Link href={link} className="flex items-center gap-2">
              View Projects Details
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Card>

      {/* Content Section */}
      <CardContent className="relative z-2 py-6 px-0 bg-black">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        {/* Category and Date */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-[#B3B3B3]">
            Category: <span className="text-white">{category}</span>
          </span>
          <span className="text-[#666666]">{date}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default WorkSection;
