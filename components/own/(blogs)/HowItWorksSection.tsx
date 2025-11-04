import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";

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
    title: "Refer Qualified Candidates",
    description:
      "If you know someone who would be a great fit for one of our open positions, refer them to us! Share the job listing with your contacts, friends, or former colleagues who have the relevant skills and experience.",
    image: "/assets/images/steps/step1.png",
  },
  {
    stepNumber: "02",
    title: "Qualified Candidates Apply",
    description:
      "The referred candidates should apply through our official application channels and mention your name as the referrer in their application.",
    image: "/assets/images/steps/step2.png",
  },
  {
    stepNumber: "03",
    title: "Eligibility Check",
    description:
      "Our HR team will review the application to ensure the referred candidate meets the qualifications for the job.",
    image: "/assets/images/steps/step3.png",
  },
  {
    stepNumber: "04",
    title: "Interview and Selection",
    description:
      "If the referred candidate meets the requirements, they will be invited for interviews and evaluations as part of our standard selection process.",
    image: "/assets/images/steps/step4.png",
  },
  {
    stepNumber: "05",
    title: "Successful Hiring",
    description:
      "If the referred candidate successfully joins DigitX and completes the probation period, you will be eligible for the referral reward.",
    image: "/assets/images/steps/step5.png",
  },
];

const programsData: IProgram[] = [
  {
    title: "Rewards and Recognition",
    points: [
      {
        text: "For each successful referral, you will be rewarded with a generous cash bonus or an equivalent value in gift cards.",
      },
      {
        text: "The value of the reward may vary depending on the level and significance of the role being filled.",
      },
      {
        text: "You will be publicly recognized and appreciated for your contribution to the Employee Referral Program during company-wide announcements and events.",
      },
    ],
  },
  {
    title: "Program Guidelines",
    points: [
      {
        text: "The Employee Referral Program is open to all current DigitX employees.",
      },
      {
        text: "Referred candidates must not have previously applied for a position at DigitX within the last six months.",
      },
      {
        text: "The referred candidate must not be an existing or former employee of DigitX.",
      },
      {
        text: "To be eligible for the reward, the referred candidate must successfully complete the probationary period.",
      },
      {
        text: "In the event that multiple employees refer the same candidate, the referral reward will be given to the first referrer mentioned by the candidate during the application process.",
      },
    ],
  },
];

const HowItWorksSection = () => {
  const isOdd = howItWorksData.length % 2 !== 0;
  return (
    <SectionWrapper className="bg-black">
      {/* header */}
      <SectionTItle
        isNewLine={false}
        primaryTitle={"Employee "}
        secondaryTitle={"Referral Program"}
        description={
          "At DigitX, we believe that our employees are our most valuable asset. We recognize the importance of building a strong and talented team, and we encourage our employees to play an active role in shaping our workforce. Introducing our Employee Referral Program – an opportunity for you to help us find exceptional talent and be rewarded for your contributions."
        }
      />
      {/* How It Works Section */}
      <div className="">
        <div className="text-center border rounded-tl-2xl rounded-tr-2xl p-4 sm:p-8 relative w-full overflow-hidden">
          {/* Grid Background Image - Top */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              backgroundImage: "url('/assets/images/grid/hero-grid.png')",
              backgroundPosition: "center",
              backgroundSize: "400px 500px",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Heading */}
          <h2 className="relative z-10 text-sm md:text-xl text-white">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-8 p-4 border rounded-bl-2xl rounded-br-2xl">
          {howItWorksData.map((step, index) => {
            const isLastAndOdd = isOdd && index === howItWorksData.length - 1;
            return <StepCard key={index} {...step} isOdd={isLastAndOdd} />;
          })}
        </div>
      </div>

      {/* Programs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:mt-16 mt-8">
        {programsData.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const StepCard = ({ stepNumber, title, description, image, isOdd }: IStep) => {
  return (
    <Card
      className={`bg-transparent p-0 gap-0 border-0 rounded-2xl overflow-hidden hover:border-[#282828] transition-all duration-300 group
        ${isOdd ? "md:col-span-2" : ""}
      `}
    >
      <div className="border rounded-tl-2xl rounded-tr-2xl p-4 sm:p-8 relative w-full overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-cover sm:bg-contain"
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
      <CardContent className="p-4 sm:p-8 space-y-3 border">
        <h3 className="sm:text-xl text-base  text-white">{title}</h3>
        <p className="sm:text-base text-xs text-[#B3B3B3] leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProgramCard = ({ title, points }: IProgram) => {
  return (
    <Card className="relative bg-transparent border p-0 rounded-2xl overflow-hidden hover:border-[#282828] transition-all duration-300">
      <CardContent className="relative z-10 p-0">
        <div className="border rounded-tl-2xl rounded-tr-2xl p-4 sm:p-8 relative w-full overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              backgroundImage: "url('/assets/images/grid/hero-grid.png')",
              backgroundPosition: "center",
              backgroundSize: "200px 300px",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Heading */}
          <h2 className="relative z-10 text-center text-sm md:text-xl text-white">
            {title}
          </h2>
        </div>

        {/* Points List */}
        <div className="p-4 sm:p-8 m-6 sm:m-8 relative rounded-2xl">
          {" "}
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
          <ul className="space-y-4 list-disc ml-5 sm:mb-10">
            {points.map((point, idx) => (
              <li key={idx} className="sm:text-base text-xs text-[#B3B3B3] leading-relaxed">
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowItWorksSection;
