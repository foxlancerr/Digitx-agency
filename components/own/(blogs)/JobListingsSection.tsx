"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  DollarSign,
  Briefcase,
  Award,
  Calendar,
} from "lucide-react";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import Link from "next/link";

interface IJobListing {
  id: string;
  title: string;
  location: string;
  icon: React.ReactNode;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  experience: string;
  skills: string;
  jobDescription: string;
  responsibilities: string[];
  applicationDeadline: string;
}

const jobListingsData: IJobListing[] = [
  {
    id: "web-designer",
    title: "Web Designer",
    location: "Mumbai, India",
    icon: "🎨",
    salary: {
      min: 45000,
      max: 60000,
      currency: "$",
      period: "per year",
    },
    experience: "Minimum 1 year of professional web design experience",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
    jobDescription:
      "As a Web Designer at DigitX, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.",
    responsibilities: [
      "Design and create visually appealing website layouts, graphics, and icons",
      "Collaborate with developers to ensure design feasibility and implementation",
      "Create wireframes, prototypes, and mockups for client presentations",
      "Ensure designs are responsive and optimized for various devices",
      "Stay updated with the latest design trends and best practices",
      "Conduct user research and usability testing",
      "Maintain brand consistency across all design elements",
    ],
    applicationDeadline: "30th September 2025",
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    location: "Remote",
    icon: "💻",
    salary: {
      min: 55000,
      max: 75000,
      currency: "$",
      period: "per year",
    },
    experience: "Minimum 2 years of frontend development experience",
    skills:
      " Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    jobDescription:
      "Join our development team as a Frontend Developer where you'll build cutting-edge web applications using modern frameworks and technologies. You'll work on challenging projects that push the boundaries of web development while maintaining code quality and performance standards.",
    responsibilities: [
      "Develop and maintain responsive web applications using React and Next.js",
      "Write clean, maintainable, and well-documented code",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement pixel-perfect interfaces",
      "Participate in code reviews and mentor junior developers",
      "Troubleshoot and debug complex issues",
      "Stay current with emerging frontend technologies",
    ],
    applicationDeadline: "15th October 2025",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    location: "New York, USA",
    icon: "📊",
    salary: {
      min: 50000,
      max: 70000,
      currency: "$",
      period: "per year",
    },
    experience: "Minimum 3 years in digital marketing",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
    jobDescription:
      "As a Digital Marketing Specialist, you'll develop and execute comprehensive marketing campaigns that drive growth and engagement. You'll work with cross-functional teams to create strategies that resonate with target audiences and deliver measurable results.",
    responsibilities: [
      "Develop and implement digital marketing strategies",
      "Manage SEO/SEM campaigns and optimize for performance",
      "Create engaging content for social media platforms",
      "Analyze campaign metrics and provide actionable insights",
      "Manage email marketing campaigns",
      "Collaborate with design team for marketing materials",
      "Stay updated with latest digital marketing trends",
    ],
    applicationDeadline: "20th October 2025",
  },
];

const JobListingsSection = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(
    jobListingsData[0].id
  );

  const toggleExpand = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <SectionWrapper className="bg-black">
      <div className="max-w-4xl mx-auto mb-12">
        <SectionTItle
          isNewLine={false}
          primaryTitle={"Job Listings"}
          secondaryTitle={"at DigitX"}
          description={
            "Explore our current job listings to discover exciting career opportunities that match your skill set and interests. We offer positions in various digital disciplines, including web design, mobile app development, digital marketing, project management, and more."
          }
        />
      </div>

      <div className="flex flex-col space-y-6 max-w-5xl mx-auto">
        {jobListingsData.map((job) => (
          <JobListingCard
            key={job.id}
            job={job}
            isExpanded={expandedJob === job.id}
            onToggle={() => toggleExpand(job.id)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

const JobListingCard = ({
  job,
  isExpanded,
  onToggle,
}: {
  job: IJobListing;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <Card className="border border-[#1A1A1A] bg-transparent rounded-2xl p-0 overflow-hidden hover:border-[#282828] transition-all duration-300">
      <CardContent className="p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          {/* Left: Icon and Job Info */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Icon */}
            <div className="shrink-0">
              <div className="p-3 border-[#1A1A1A] rounded-full border">
                <div className="p-3 border-[#1A1A1A] rounded-full border">
                  <div className="p-3 border-[#282828] rounded-full border flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">{job.icon}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Title and Location */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-[#B3B3B3]">
                <p className="text-xs sm:text-sm">{job.location}</p>
              </div>
            </div>
          </div>

          {/* Right: Apply Button */}
          {/* Learn More Button */}
          <Button
            variant="outline"
            className="h-auto text-primary-foreground  bg-black! rounded-full w-fit border-border group/btn"
            asChild
          >
            <Link
              href={`/careers/${job.id}`}
              className="flex items-center font-light! gap-2"
            >
              Apply Now
              <span className="rounded-full px-4 py-2 bg-primary">
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col space-y-2 mb-6">
          <div className="flex items-start gap-2 text-[#B3B3B3]">
            <DollarSign className="size-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              <span className="text-white font-medium">Salary:</span>{" "}
              {job.salary.currency}
              {job.salary.min.toLocaleString()} - {job.salary.currency}
              {job.salary.max.toLocaleString()} {job.salary.period} (based on
              experience)
            </p>
          </div>

          <div className="flex items-start gap-2 text-[#B3B3B3]">
            <Briefcase className="size-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              <span className="text-white font-medium">Experience:</span>{" "}
              {job.experience}
            </p>
          </div>
          <div className="flex items-start gap-2 text-[#B3B3B3]">
            <Briefcase className="size-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              <span className="text-white font-medium">Skills:</span>{" "}
              {job.skills}
            </p>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
            {/* Job Description */}
            <div className="border border-[#1A1A1A] rounded-2xl p-4 sm:p-6 bg-black/40">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Job Description
              </h4>
              <p className="text-sm text-[#B3B3B3] leading-relaxed mb-4">
                {job.jobDescription}
              </p>

              <Badge
                variant="outline"
                className="whitespace-normal py-2 leading-normal px-4 w-full sm:w-fit sm:rounded-xl sm:founded-full  bg-transparent border-[#282828] text-[#B3B3B3] hover:bg-[#1A1A1A] hover:border-[#404040] transition-colors"
              >
                <span>
                  {" "}
                  <Calendar className="size-6 mr-2" />
                </span>
                Application Deadline: {job.applicationDeadline}
              </Badge>
            </div>

            {/* Responsibilities */}
            <div className="border border-[#1A1A1A] rounded-2xl p-4 sm:p-6 bg-black/40">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Responsibilities
              </h4>
              <ul className="space-y-2 ml-5 list-disc! text">
                {job.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="-sm text-[#B3B3B3] leading-relaxed"
                  >
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="flex items-center justify-end mt-6">
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-[#B3B3B3] hover:text-white transition-colors group"
          >
            <span className="text-sm">
              {isExpanded ? "Show Less" : "Show More"}
            </span>
            <span className="p-2 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-full border border-[#282828] group-hover:border-[#404040] transition-colors">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-white" />
              ) : (
                <ChevronDown className="w-5 h-5 text-white" />
              )}
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListingsSection;
