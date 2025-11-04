import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import { BsStars } from "react-icons/bs";

interface IStep {
  stepNumber: string;
  title: string;
  description: string;
  image?: string;
  isOdd?: boolean;
}

interface IProgramPoint {
  text: string;
}

interface IProgram {
  title: string;
  points: IProgramPoint[];
}

const howItWorksData: IStep[] = [
  {
    stepNumber: "01",
    title: "Explore Job Listings",
    description: `Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.`,
    image: "/assets/images/steps/step1.png",
  },
  {
    stepNumber: "02",
    title: "Review Job Description",
    description:
      "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.",
    image: "/assets/images/steps/step2.png",
  },
  {
    stepNumber: "03",
    title: "Complete the Application Form",
    description: `Click the "Apply Now" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.`,
    image: "/assets/images/steps/step3.png",
  },
  {
    stepNumber: "04",
    title: "Upload Your Documents",
    description:
      "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.",
    image: "/assets/images/steps/step4.png",
  },
  {
    stepNumber: "05",
    title: "Submit Your Application",
    description: `Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the "Submit" button to send it to our HR team.`,
    image: "/assets/images/steps/step5.png",
  },
  {
    stepNumber: "06",
    title: "Interview Process",
    description: `If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.`,
    image: "/assets/images/steps/step5.png",
  },
];

const HowToApplySection = () => {
  const isOdd = howItWorksData.length % 2 !== 0;
  return (
    <SectionWrapper className="bg-black">
      {/* header */}
      <div className="max-w-4xl mx-auto ">
        {" "}
        <SectionTItle
          isNewLine={false}
          primaryTitle={"How to  "}
          secondaryTitle={"Apply"}
          description={
            "We are excited that you are interested in joining our team at DigitX! To apply for any of our job listings, please follow the simple steps below"
          }
        />
      </div>
      {/* How It Works Section */}
      <div className="">
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {howItWorksData.map((step, index) => {
            const isLastAndOdd = isOdd && index === howItWorksData.length - 1;
            return <StepCard key={index} {...step} isOdd={isLastAndOdd} />;
          })}
        </div>
      </div>

      <IntrestCard />
    </SectionWrapper>
  );
};

const StepCard = ({ stepNumber, title, description, image, isOdd }: IStep) => {
  return (
    <Card
      className={`bg-transparent p-0 gap-0 border-0 rounded-2xl overflow-hidden hover:border-[#282828] transition-all duration-300 group
      `}
    >
      <div className="border rounded-tl-2xl rounded-tr-2xl p-4 sm:p-6 relative w-full overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-cover"
          style={{
            backgroundImage: "url('/assets/images/grid/work-grid.png')",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Heading */}
        <h2 className="relative z-10 md:text-xl text-white">
          Step {stepNumber}
        </h2>
      </div>

      {/* Content */}
      <CardContent className="p-4 sm:p-6 space-y-3 border">
        <h3 className="text-base  text-white">{title}</h3>
        <p className="text-xs text-[#B3B3B3] leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const IntrestCard = () => {
  return (
    <Card className="relative mt-8 sm:mt-12 bg-transparent border p-6 sm:p-8 rounded-2xl overflow-hidden hover:border-[#282828] transition-all duration-300">
      <CardContent className="relative z-10 p-0">
        <div className="flex  justify-center flex-col space-y-3">
          <div className="flex space-x-3 items-center">
            <span className="flex items-center justify-center rounded-full border-2 h-8 sm:h-12 w-8 sm:w-12 bg-gradient-to-br from-gray-20 to-gray-10 cursor-pointer hover:border-[#404040] transition-all duration-300 text-white hover:text-white">
              <BsStars className="size-4 sm:size-6"></BsStars>
            </span>
            <h4 className="text-base sm:text-xl font-semibold text-white">
              We value your interest in DigitX
            </h4>
          </div>
          <p className="text-xs md:text-sm text-[#B3B3B3] leading-relaxed">
            We value your interest in DigitX and appreciate the time and effort
            you put into your application. Our team looks forward to reviewing
            your application and finding the best talent to join our vibrant and
            innovative team. Apply now and take the next step towards an
            exciting and fulfilling career with DigitX!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowToApplySection;
