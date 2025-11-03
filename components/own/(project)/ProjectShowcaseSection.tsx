"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { IoCodeSlashOutline, IoSettingsOutline } from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import { Badge } from "@/components/ui/badge";

interface ITeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface ITechnology {
  icon: React.ReactNode;
  name: string;
}

interface IProjectDetail {
  id: string;
  title: string;
  image: string;
  industries: ITechnology[];
  description: string;
  category: string;
  timeTaken: string;
  startDate: string;
  completedDate: string;
  technologies: ITechnology[];
  teamMembers: ITeamMember[];
  methods: string[];
}

const projectDetailsData: IProjectDetail[] = [
  {
    id: "ecommerce-revolution",
    title: "E-Commerce Revolution",
    image: "/assets/images/projects/preview2.png",
    industries: [
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "E-commerce" },
      {
        icon: <IoCodeSlashOutline className="size-4 sm:size-5" />,
        name: "Web Design & Development",
      },
    ],
    description:
      "A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.",
    category: "E-commerce",
    timeTaken: "4 Months",
    startDate: "January 15, 2025",
    completedDate: "May 15, 2025",
    technologies: [
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "React" },
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "Next.js" },

      { icon: <IoSettingsOutline className="size-4 sm:size-5" />, name: "Node.js" },
    ],
    teamMembers: [
      {
        name: "John Smith, Emily Johnson",
        role: "Web Developers",
        avatar: "/assets/images/avatars/avatar1.png",
      },
      {
        name: "Jessica Lee",
        role: "UI/UX Designer",
        avatar: "/assets/images/avatars/avatar2.png",
      },
      {
        name: "Michael Williams",
        role: "Project Manager",
        avatar: "/assets/images/avatars/avatar3.png",
      },
    ],
    methods: ["Agile", "Design Thinking", "User Research"],
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Platform",
    image: "/assets/images/projects/preview1.png",
    industries: [
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "E-commerce" },
      {
        icon: <IoCodeSlashOutline className="size-4 sm:size-5" />,
        name: "Web Design & Development",
      },
    ],
    description:
      "A comprehensive healthcare management system that streamlines patient records, appointments, and telemedicine consultations with advanced security protocols.",
    category: "Healthcare",
    timeTaken: "5 Months",
    startDate: "February 1, 2025",
    completedDate: "June 30, 2025",
    technologies: [
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "React" },
      { icon: <IoCodeSlashOutline className="size-4 sm:size-5" />, name: "Next.js" },

      { icon: <IoSettingsOutline className="size-4 sm:size-5" />, name: "PostgreSQL" },
    ],
    teamMembers: [
      {
        name: "Sarah Chen, Alex Rodriguez",
        role: "Full Stack Developers",
        avatar: "/assets/images/avatars/avatar4.png",
      },
      {
        name: "Emma Watson",
        role: "UI/UX Designer",
        avatar: "/assets/images/avatars/avatar5.png",
      },
      {
        name: "David Brown",
        role: "Project Manager",
        avatar: "/assets/images/avatars/avatar6.png",
      },
    ],
    methods: ["Scrum", "Security Audit", "Compliance Testing"],
  },
];

const ProjectDetailSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    projectDetailsData[0].id
  );

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <SectionWrapper className="max-w-5xl mx-auto space-y-10">
      <SectionTItle
        primaryTitle="Categories of"
        secondaryTitle="Services"
        description="At DigitX, we provide top-notch digital services tailored for your business — from web design to development and beyond."
        isNewLine={false}
      />
      <div className="flex flex-col space-y-6">
        {projectDetailsData.map((project) => (
          <ProjectDetailCard
            key={project.id}
            project={project}
            isExpanded={expandedProject === project.id}
            onToggle={() => toggleExpand(project.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectDetailCard = ({
  project,
  isExpanded,
  onToggle,
}: {
  project: IProjectDetail;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <Card className="border p-4 sm:p-6 border-[#1A1A1A] bg-[#0F0F0F] rounded-2xl overflow-hidden hover:border-[#282828] transition-all duration-300">
      {/* Project Image and Header - Always Visible */}
      <div className="relative">
        {/* Image Container */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0F0F]" />
          <button
            onClick={onToggle}
            className="block sm:hidden ml-4  p-2 bg-transparent rounded-lg transition-colors absolute bottom-0 left-[50%] transform -translate-x-[50%] "
          >
            {isExpanded ? (
              <div className="flex items-center shrink-0 gap-2 text-gray-20 text-sm">
                <span className="shrink-0">Show Less</span>
                <span className="p-2 bg-linear-10 rounded-full from-gray-10 to-gray-20">
                  <ChevronUp className="w-6 h-6 text-white" />
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-20 text-sm">
                <span>Show More</span>
                <span className="p-2 bg-linear-10 rounded-full from-gray-10 to-gray-20">
                  <ChevronDown className="w-6 h-6 text-white" />
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Header Overlay */}
        <div className=" flex flex-col space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3 flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Industries Badges */}
              <div className="flex flex-wrap gap-2">
                {project.industries.map((industry, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="py-1.5 flex gap-2 px-2 pr-4 bg-transparent border-[#282828] text-primary-foreground hover:bg-[#1A1A1A] hover:border-[#404040] transition-colors"
                  >
                    <div className="p-2 rounded-full bg-[#1A1A1A] border border-[#282828] flex items-center justify-center  group-hover:bg-[#282828] transition-colors">
                      {industry.icon}
                    </div>
                    <span>{industry.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
            <button
              onClick={onToggle}
              className="hidden sm:block ml-4 p-2 bg-transparent rounded-lg transition-colors"
            >
              {isExpanded ? (
                <div className="flex items-center gap-2 text-gray-20 text-sm">
                  <span>Show Less</span>
                  <span className="p-2 bg-linear-10 rounded-full from-gray-10 to-gray-20">
                    <ChevronUp className="w-6 h-6 text-white" />
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-gray-20 text-sm">
                  <span>Show More</span>
                  <span className="p-2 bg-linear-10 rounded-full from-gray-10 to-gray-20">
                    <ChevronDown className="w-6 h-6 text-white" />
                  </span>
                </div>
              )}
            </button>
          </div>

          <CardDescription className="relative border rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col space-y-4">
              {/* Description Section */}
              <div className="space-y-2 z-3!">
                <h4 className="text-xl text-white">Project Description</h4>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="flex flex-col space-y-6 mt-6">
                {/* Project Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-4 sm:p-6 border-2 border-[#1A1A1A]">
                  <div className="space-y-1 sm:space-x-2">
                    <p className="text-xs text-[#808080] tracking-wide">
                      Category
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      {project.category}
                    </p>
                  </div>
                  <div className="space-y-1 sm:space-x-2">
                    <p className="text-xs text-[#808080] tracking-wide">
                      Time Taken
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {project.timeTaken}
                    </p>
                  </div>
                  <div className="space-y-1 sm:space-x-2">
                    <p className="text-xs text-[#808080] tracking-wide">
                      Start Date
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      {project.startDate}
                    </p>
                  </div>
                  <div className="space-y-1 sm:space-x-2">
                    <p className="text-xs text-[#808080] tracking-wide">
                      Completed
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      {project.completedDate}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="space-y-4 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center border-2 border-[#1A1A1A] rounded-2xl p-4 sm:p-6">
                  <h4 className="text-base sm:text-xl  text-white mb-0">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap sm:gap-4 gap-3">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] border border-[#282828] hover:border-[#3A3A3A] transition-colors"
                        title={tech.name}
                      >
                        <div className="text-sm sm:text-lg text-white">{tech.icon}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-4 p-4 sm:p-6 border-2 border-[#1A1A1A] rounded-2xl">
                  <h4 className="text-base sm:text-xl text-white">Team Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6">
                    {project.teamMembers.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-start gap-3 p-4 border-2 border-[#1A1A1A] rounded-2xl"
                      >
                        <p className="text-sm text-white ">{member.role}</p>

                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-3">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#0F0F0F] flex items-center justify-center"
                              >
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-col text-white leading-snug">
                            {member.name.split(",").map((part, idx, arr) => (
                              <span key={idx}>
                                {part.trim()}
                                {idx < arr.length - 1 && (
                                  <span className="text-[#B3B3B3]">,</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methods Used */}

                <div className="space-y-4 p-4 sm:p-6 rounded-2xl border border-[#1A1A1A]">
                  <h4 className="text-lg font-semibold text-white">
                    Methods Used
                  </h4>
                  <div className="flex flex-wrap gap-2 border border-[#1A1A1A] p-4 sm:p-6 rounded-2xl ">
                    {project.methods.map((method, idx) => (
                      <span
                        key={idx}
                        className="px-4  py-2 text-xs font-medium  text-[#B3B3B3] rounded-full border border-[#282828] hover:border-[#3A3A3A] transition-colors"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetailSection;
