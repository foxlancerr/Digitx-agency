"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionWrapper from "../base/SectionWrapper";
import {
  IoBrushOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import SectionTItle from "../base/SectionTItle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IKeyFeature {
  title: string;
  description: string;
}

interface ICompletedProject {
  name: string;
  industry: string;
  website: string;
}

interface IServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  keyFeatures: IKeyFeature[];
  designProcess: IKeyFeature[];
  completedProjects: ICompletedProject[];
  projectPreviews: string[];
}

const serviceCategoriesData: IServiceCategory[] = [
  {
    id: "web-design",
    name: "Web Design",
    icon: <IoBrushOutline className="size-5" />,
    description:
      "Web Design is the art and science of creating visually appealing and user-friendly websites that reflect your brand identity and resonate with your target audience.",
    keyFeatures: [
      { title: "Customized Design", description: "We craft bespoke designs tailored to match your brand personality and industry." },
      { title: "Responsive Design", description: "Ensuring your website adapts seamlessly to different devices and screen sizes." },
      { title: "User-Centric Approach", description: "Prioritizing ease of navigation and intuitive user experiences." },
      { title: "Visual Elements", description: "Incorporating engaging visuals, graphics, and animations to enhance the overall appeal." },
    ],
    designProcess: [
      { title: "Research", description: "Understanding your business, goals, and audience." },
      { title: "Wireframing", description: "Creating structure and user flow before visuals." },
      { title: "Prototyping", description: "Developing interactive prototypes for feedback." },
      { title: "Delivery", description: "Delivering a polished, production-ready design." },
    ],
    completedProjects: [
      { name: "GlobalTech Solutions", industry: "E-commerce", website: "www.globaltechsolutions.com" },
      { name: "GreenEarth Eco Store", industry: "Design Agency", website: "www.greenearthecostore.com" },
      { name: "TechGuru Inc.", industry: "Technology", website: "www.techguruinc.com" },
    ],
    projectPreviews: [
      "/assets/images/projects/preview2.png",
      "/assets/images/projects/preview1.png",
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: <IoCodeSlashOutline className="size-5" />,
    description:
      "Web Development brings your designs to life using robust code and modern frameworks for performance, scalability, and security.",
    keyFeatures: [
      { title: "Modern Technologies", description: "Using React, Next.js, and Node.js for speed and maintainability." },
      { title: "Scalable Architecture", description: "Building flexible solutions that grow with your business." },
      { title: "API Integration", description: "Connecting with third-party or custom APIs for dynamic functionality." },
      { title: "Performance Optimization", description: "Ensuring fast load times and smooth UX." },
    ],
    designProcess: [
      { title: "Planning", description: "Define architecture and roadmap." },
      { title: "Development", description: "Write clean, reusable code." },
      { title: "Testing", description: "Ensure stability and speed." },
      { title: "Deployment", description: "Deploy securely with best practices." },
    ],
    completedProjects: [
      { name: "CodeSphere Labs", industry: "SaaS", website: "www.codespherelabs.com" },
      { name: "FinEdge Pro", industry: "Finance", website: "www.finedgepro.com" },
      { name: "DevMatrix", industry: "Technology", website: "www.devmatrix.io" },
    ],
    projectPreviews: [
      "/assets/images/projects/preview1.png",
      "/assets/images/projects/preview2.png",
    ],
  },
];

const CategoriesOfServices = () => {
  const [activeTab, setActiveTab] = useState(serviceCategoriesData[0].id);

  return (
    <SectionWrapper className="bg-black">
      <SectionTItle
        primaryTitle="Categories of"
        secondaryTitle="Services"
        description="At DigitX, we provide top-notch digital services tailored for your business — from web design to development and beyond."
        isNewLine={false}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          <TabsList className="flex lg:flex-col gap-4 bg-transparent justify-start w-full">
            {serviceCategoriesData.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="w-full justify-start gap-3 px-4 py-6! border border-[#1A1A1A] hover:border-[#282828] transition-all rounded-lg text-[#B3B3B3] data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-[#282828]"
              >
                {cat.icon}
                <span className="text-sm font-medium">{cat.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="flex-1">
            {serviceCategoriesData.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <Card className="p-0 border-0 bg-transparent">
                  <CardContent className="space-y-8 p-0">
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{cat.name}</h3>
                      <p className="text-sm text-[#B3B3B3] leading-relaxed">{cat.description}</p>
                    </div>

                    {/* Key Features */}
                    <FeatureSection title="Key Features" features={cat.keyFeatures} />

                    {/* Design Process */}
                    <FeatureSection title="Design Process" features={cat.designProcess} />

                    {/* Projects Preview */}
                    <ProjectsPreviewSection previews={cat.projectPreviews} />

                    {/* Completed Projects */}
                    <CompletedProjectsTable projects={cat.completedProjects} />
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

export default CategoriesOfServices;

/* ======== Sub Components ========= */

const FeatureSection = ({ title, features }: { title: string; features: IKeyFeature[] }) => (
  <Card className="p-6 border rounded-2xl bg-transparent">
    <h4 className="text-xl font-semibold text-white mb-6">{title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.slice(0, 3).map((feature, idx) => (
        <ReasonCard key={idx} {...feature} idxPosition={idx} />
      ))}
    </div>
    <hr className="my-4 border-[#1A1A1A]" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.slice(0, 3).map((feature, idx) => (
        <ReasonCard key={`b-${idx}`} {...feature} idxPosition={idx} />
      ))}
    </div>
  </Card>
);

const ProjectsPreviewSection = ({ previews }: { previews: string[] }) => (
  <Card className="border border-[#1A1A1A] bg-transparent p-6 md:p-8 rounded-2xl mb-10">
    <CardContent className="p-0 space-y-4">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
          Our Web Design Completed Projects
        </h2>
        <p className="text-[#B3B3B3] text-sm">
          At DigitX, we craft transformative projects that empower your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 relative">
        {previews.map((src, i) => (
          <div key={i} className="relative w-full h-65 rounded-xl overflow-hidden">
            <Image src={src} alt={`Project preview ${i + 1}`} fill className="object-cover rounded-xl" />
          </div>
        ))}
        <div className="flex justify-center mt-6 absolute -bottom-4 left-1/2 -translate-x-1/2 w-full">
          <Button variant="outline" className="bg-transparent text-white rounded-full px-6 py-2 text-sm font-medium">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CompletedProjectsTable = ({ projects }: { projects: ICompletedProject[] }) => (
  <Card className="border border-[#1A1A1A] bg-transparent p-6 md:p-8 rounded-2xl">
    <CardContent className="p-0 space-y-4">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Our Completed Projects</h2>
        <p className="text-[#B3B3B3] text-sm">
          We take pride in delivering projects that drive real results.
        </p>
      </div>

      <div className="mt-6 rounded-md overflow-hidden border border-[#1A1A1A]">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow className="bg-[#0e0e0e] border-b border-[#1A1A1A]">
              <TableHead className="text-white p-4 text-sm md:text-base font-medium border-r border-[#1A1A1A]">
                Project Name
              </TableHead>
              <TableHead className="text-white p-4 text-sm md:text-base font-medium border-r border-[#1A1A1A]">
                Industry
              </TableHead>
              <TableHead className="text-white p-4 text-sm md:text-base font-medium">
                Website URL
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projects.map((p, i) => (
              <TableRow key={i} className="border-t border-[#1A1A1A] hover:bg-[#111111]/60 transition-all">
                <TableCell className="text-gray-30 text-sm p-4 border-r border-[#1A1A1A]">{p.name}</TableCell>
                <TableCell className="text-gray-30 text-sm p-4 border-r border-[#1A1A1A]">{p.industry}</TableCell>
                <TableCell className="text-gray-30 underline text-sm p-4">
                  <a href={`https://${p.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {p.website}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

const ReasonCard = ({ idxPosition, title, description }: any) => {
  const isCenterCard = idxPosition === 1;
  return (
    <div
      className={`transition-all duration-300 group flex flex-col items-center text-start ${
        isCenterCard ? "lg:border-l lg:border-r border-[#282828] sm:px-5" : ""
      }`}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#B3B3B3] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
