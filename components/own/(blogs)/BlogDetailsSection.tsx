"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionWrapper from "../base/SectionWrapper";
import { IoBrushOutline, IoCodeSlashOutline } from "react-icons/io5";
import BlogsCard from "./BlogsCard";
import BlogCard from "./BlogsCard";

interface IKeyFeature {
  title: string;
  description: string;
}

interface IProjectStats {
  category: string;
  timeTaken: string;
  startDate: string;
  completed: string;
}

export interface IBlog {
  writerImage: string;
  writerName: string;
  datePosted: string;
  title: string;
  shortDescription: string;
  coverImage: string;
  link: string;
}

interface IServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;

  projectStats: IProjectStats;
  blogs: IBlog[];
  projectPreviews: string[];
}

const serviceCategoriesData: IServiceCategory[] = [
  {
    id: "web-design",
    name: "Web Design",
    icon: <IoBrushOutline className="size-5" />,
    description:
      "Creating visually engaging and user-focused website designs that elevate your brand’s presence online.",

    projectStats: {
      category: "Creative Design",
      timeTaken: "3 Weeks",
      startDate: "Jan 2023",
      completed: "Feb 2023",
    },
    blogs: [
      {
        writerImage: "/assets/images/testimonials/member1.png",
        writerName: "Ava Martinez",
        datePosted: "6 min read",
        title: "Web Design Trends Shaping 2025",
        shortDescription:
          "Discover the latest innovations shaping web aesthetics and user interactions in 2025.",
        coverImage: "/assets/images/blogs/blog1.png",
        link: "#",
      },
      {
        writerImage: "/assets/images/testimonials/member2.png",
        writerName: "John Carter",
        datePosted: "10 min read",
        title: "Why Minimalist UX Design Wins",
        shortDescription:
          "Learn how simplicity drives conversions and enhances digital experiences.",
        coverImage: "/assets/images/blogs/blog2.png",
        link: "#",
      },
    ],
    projectPreviews: [
      "/assets/images/projects/preview1.png",
      "/assets/images/projects/preview2.png",
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: <IoCodeSlashOutline className="size-5" />,
    description:
      "Building powerful, secure, and scalable web applications using modern frameworks and best practices.",
  

    projectStats: {
      category: "Software Development",
      timeTaken: "6 Weeks",
      startDate: "May 2023",
      completed: "June 2023",
    },
    blogs: [
      {
        writerImage: "/assets/images/testimonials/member3.png",
        writerName: "Liam Zhang",
        datePosted: "5 min read",
        title: "Next.js Performance Secrets",
        shortDescription:
          "Tips to enhance load time and SEO using Next.js 14 optimizations.",
        coverImage: "/assets/images/blogs/blog3.png",
        link: "#",
      },
      {
        writerImage: "/assets/images/testimonials/member4.png",
        writerName: "Sophia Khan",
        datePosted: "8 min read",
        title: "Secure Your APIs Like a Pro",
        shortDescription:
          "Understand best practices for building secure and scalable APIs.",
        coverImage: "/assets/images/blogs/blog4.png",
        link: "#",
      },
    ],
    projectPreviews: [
      "/assets/images/projects/preview3.png",
      "/assets/images/projects/preview4.png",
    ],
  },
];

const BlogDetailsSection = () => {
  const [activeTab, setActiveTab] = useState(serviceCategoriesData[0].id);

  return (
    <SectionWrapper className="bg-black">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col space-y-4 items-center justify-center">
          <TabsList className="flex bg-transparent justify-start w-fit rounded-full py-8 px-3 border">
            {serviceCategoriesData.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className=" gap-3 p-5  border border-[#1A1A1A] hover:border-[#282828] transition-all rounded-full text-[#B3B3B3] data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-[#282828]"
              >
                <span className="text-sm font-medium">{cat.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="">
            {serviceCategoriesData.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <Card className="p-0 border-0 bg-transparent">
                  <CardContent className="space-y-8 p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-[400px_1fr] gap-6 mt-6 items-center">
                      <div>
                        {/* Project Image Section */}
                        <Card className="relative sm:h-80 h-50 border bg-[#0F0F0F] flex items-center justify-center">
                          {/* Grid Background */}
                          <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50"
                            style={{
                              backgroundImage:
                                "url('/assets/images/grid/hero-grid.png')",
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

                          <img
                            className="z-5"
                            src={"/assets/images/logo.png"}
                            alt="center logo"
                            width={200}
                            height="auto"
                          ></img>
                        </Card>
                      </div>
                      {/* Key Features */}
                      <FeatureSection
                        title={cat.name}
                        project={cat.projectStats}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {cat.blogs.map((blog, i) => (
                        <BlogCard key={i} {...blog} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </SectionWrapper>
  );
};

export default BlogDetailsSection;

/* ======== Sub Components ========= */

const FeatureSection = ({
  title,
  project,
}: {
  title: string;
  project: IProjectStats;
}) => (
  <div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
        Discover what makes our {title.toLowerCase()} services exceptional —
        from strategic research to seamless delivery.
        {/* readmore functionality */}
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-4 sm:p-6 border-2 border-[#1A1A1A] w-full">
      <div className="space-y-1 sm:space-x-2">
        <p className="text-xs text-[#808080] tracking-wide">Category</p>
        <p className="text-sm md:text-base font-semibold text-white">
          {project.category}
        </p>
      </div>
      <div className="space-y-1 sm:space-x-2">
        <p className="text-xs text-[#808080] tracking-wide">Time Taken</p>
        <p className="text-sm font-semibold text-white"> {project.timeTaken}</p>
      </div>
      <div className="space-y-1 sm:space-x-2">
        <p className="text-xs text-[#808080] tracking-wide">Start Date</p>
        <p className="text-sm md:text-base font-semibold text-white">
          {" "}
          {project.startDate}
        </p>
      </div>
      <div className="space-y-1 sm:space-x-2">
        <p className="text-xs text-[#808080] tracking-wide">Completed</p>
        <p className="text-sm md:text-base font-semibold text-white">
          {" "}
          {project.completed}
        </p>
      </div>
    </div>
  </div>
);
