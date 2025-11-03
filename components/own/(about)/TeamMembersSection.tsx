// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import {
//   IoShareSocialOutline,
//   IoBulbOutline,
//   IoPhonePortraitOutline,
//   IoFlashOutline,
//   IoSearchOutline,
//   IoBusinessOutline,
//   IoLogoLinkedin,
//   IoLogoTwitter,
// } from "react-icons/io5";
// import SectionWrapper from "../base/SectionWrapper";
// import Link from "next/link";
// import SectionTItle from "../base/SectionTItle";
// import { Card, CardContent } from "@/components/ui/card";
// import { FaGoogle, FaSquareInstagram } from "react-icons/fa6";
// import Image from "next/image";

// interface IAward {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   whyUs: string;
//   link: string;
//   badgeIcon?: React.ReactNode;
//   badgeText: string;
//   badgeDate: string;
// }

// interface ISectionConfig {
//   primaryTitle: string;
//   secondaryTitle: string;
//   description: string;
// }

// const sectionConfig: ISectionConfig = {
//   primaryTitle: "Our",
//   secondaryTitle: "Team Members",
//   description:
//     "Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.",
// };

// const awardsData: IAward[] = [
//   {
//     icon: <IoShareSocialOutline className="size-6" />,
//     title: "Web Development",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "Google Award",
//     badgeDate: "October 2017",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
//     link: "#web-development",
//   },
//   {
//     icon: <IoBusinessOutline className="size-6" />,
//     title: "Mobile App Development",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "Best Innovation",
//     badgeDate: "March 2018",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "Embrace mobility with confidence as mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement.",
//     link: "#mobile-development",
//   },
//   {
//     icon: <IoBulbOutline className="size-6" />,
//     title: "UI/UX Design",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "Design Excellence",
//     badgeDate: "June 2019",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "Leave a lasting impression on your audience with our comprehensive UI/UX design services. We combine aesthetics with functionality to create interfaces that are not only visually stunning but also intuitive and user-friendly. Our design process begins with in-depth user research and persona development.",
//     link: "#design",
//   },
//   {
//     icon: <IoPhonePortraitOutline className="size-6" />,
//     title: "Digital Strategy & Consulting",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "Strategic Leader",
//     badgeDate: "September 2019",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "In today's rapidly evolving digital landscape, having the right strategy is crucial for success. Our digital consulting services help you navigate complex technology decisions and chart a clear path forward. We analyze your current digital presence and identify opportunities for growth.",
//     link: "#consulting",
//   },
//   {
//     icon: <IoFlashOutline className="size-6" />,
//     title: "Digital Marketing & Growth",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "Growth Champion",
//     badgeDate: "December 2020",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "Our data-driven digital marketing strategies allow us to reach your target audience with precision and maximize your marketing ROI. We create comprehensive campaigns that span multiple channels including social media marketing, content marketing, and email campaigns.",
//     link: "#marketing",
//   },
//   {
//     icon: <IoSearchOutline className="size-6" />,
//     title: "Search Engine Optimization (SEO)",
//     badgeIcon: <FaGoogle className="size-4" />,
//     badgeText: "SEO Master",
//     badgeDate: "February 2021",
//     whyUs: "Unparalleled app development services and designs.",
//     description:
//       "Boost your online visibility and organic traffic with our expert SEO services. Our comprehensive approach combines technical SEO, on-page optimization, and strategic link building to improve your search engine rankings. We conduct thorough keyword research and optimize your website structure.",
//     link: "#seo",
//   },
// ];

// const TeamMembersSection = () => {
//   return (
//     <SectionWrapper className="bg-black">
//       <div className="">
//         <SectionTItle
//           primaryTitle={sectionConfig.primaryTitle}
//           secondaryTitle={sectionConfig.secondaryTitle}
//           description={sectionConfig.description}
//           isNewLine={false}
//         />

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {awardsData.map((award, index) => (
//             <AwardCard key={index} award={award} index={index} />
//           ))}
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// interface AwardCardProps {
//   award: IAward;
//   index: number;
// }

// const AwardCard = ({ award, index }: AwardCardProps) => {
//   const {
//     icon,
//     link,
//     title,
//     description,
//     whyUs,
//     badgeIcon,
//     badgeText,
//     badgeDate,
//   } = award;

//   return (
//     <Card className="overflow-hidden relative bg-black p-0 transition-all duration-300 group border-0 rounded-2xl">
//       {/* Border with Gradient Fade */}
//       <div
//         className="absolute inset-0 rounded-2xl pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to bottom, #1A1A1A 0%, #1A1A1A 60%, transparent 100%)",
//           padding: "1px",
//           WebkitMask:
//             "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//           WebkitMaskComposite: "xor",
//           maskComposite: "exclude",
//           zIndex: 5,
//         }}
//       />

//       {/* Grid Background Image - Top */}
//       <div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         style={{
//           backgroundImage: "url('/assets/images/grid/hero-grid.png')",
//           backgroundPosition: "left top",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           zIndex: 1,
//         }}
//       />

//       {/* Gradient Overlay - Fades grid to black */}
//       <div
//         className="absolute top-0 left-0 w-full h-full pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.8) 70%, #000000 100%)",
//           zIndex: 2,
//         }}
//       />

//       {/* Content */}
//       <CardContent className="relative z-10 flex flex-col items-center text-center p-8 pt-12">
//         {/* Icon */}
//         <div className="mb-6">
//           <div className="p-4 border border-[#282828] rounded-full">
//             <div className="p-4 border border-[#282828] rounded-full">
//               <div className="border border-[#282828] rounded-full text-white">
//                 <Image
//                   width={40}
//                   height={40}
//                   className="object-cover size-16"
//                   alt={title}
//                   src={"/assets/images/testimonials/member1.png"}
//                 ></Image>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Title and Description */}
//         <div className="space-y-3 mb-6">
//           <h3 className="text-xl text-white">{title}</h3>
//         </div>

//         {/* Badge Button */}
//         <Button
//           variant="outline"
//           className="h-auto mb-6 text-white bg-transparent rounded-full border-[#282828] hover:bg-[#1A1A1A] hover:border-[#404040] group/btn px-6! py-2 transition-all"
//           asChild
//         >
//           <Link href={link} className="flex items-center gap-2">
//             {badgeIcon}
//             <span className="hidden sm:inline">{badgeText}</span>
//             <span className="sm:hidden text-xs">{badgeDate}</span>
//           </Link>
//         </Button>

//         {/* Why Section */}
//         <div className="border-t border-[#1A1A1A] px-6 py-6 w-full flex items-center justify-center flex-col space-y-3">
//           <div className="flex flex-row space-x-2">
//             <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
//               <IoLogoLinkedin className="size-4 sm:size-6" />
//             </div>
//             <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
//               <IoLogoTwitter className="size-4 sm:size-6" />
//             </div>
//             <div className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-linear-to-br from-gray-20 to-gray-10 cursor-pointer">
//               <FaSquareInstagram className="size-4 sm:size-6" />
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default TeamMembersSection;

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
  secondaryTitle: "Team Members",
  description:
    "Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.",
};

const teamMembersData: ITeamMember[] = [
  {
    id: "member-1",
    name: "John Smith",
    role: "Lead Developer",
    image: "/assets/images/testimonials/member1.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
  {
    id: "member-2",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/assets/images/testimonials/member2.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
  {
    id: "member-3",
    name: "Michael Chen",
    role: "Product Manager",
    image: "/assets/images/testimonials/member3.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
  {
    id: "member-4",
    name: "Emily Davis",
    role: "Full Stack Developer",
    image: "/assets/images/testimonials/member1.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
  {
    id: "member-5",
    name: "Alex Rodriguez",
    role: "DevOps Engineer",
    image: "/assets/images/testimonials/member2.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
  {
    id: "member-6",
    name: "Jessica Lee",
    role: "Marketing Specialist",
    image: "/assets/images/testimonials/member3.png",
    socials: [
      {
        icon: <IoLogoLinkedin className="size-4 sm:size-6" />,
        link: "#linkedin",
      },
      {
        icon: <IoLogoTwitter className="size-4 sm:size-6" />,
        link: "#twitter",
      },
      {
        icon: <FaSquareInstagram className="size-4 sm:size-6" />,
        link: "#instagram",
      },
    ],
  },
];

const TeamMembersSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

       
      </div>
    </SectionWrapper>
  );
};

interface TeamMemberCardProps {
  member: ITeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const { name, role, image, socials } = member;

  return (
    <Card className="overflow-hidden relative bg-black p-0 transition-all duration-300 group border-0 rounded-2xl">
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

      {/* Content */}
      <CardContent className="relative z-10 flex flex-col items-center text-center p-8 pt-12">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="p-4 border border-[#282828] rounded-full">
            <div className="p-4 border border-[#282828] rounded-full">
              <div className="border border-[#282828] rounded-full text-white overflow-hidden">
                <Image
                  width={64}
                  height={64}
                  className="object-cover size-24"
                  alt={name}
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <Button
            variant="outline"
            className="h-auto mb-6 text-white bg-transparent rounded-full border-[#282828] hover:bg-[#1A1A1A] hover:border-[#404040] group/btn px-6! py-2 transition-all"
            asChild
          >
            <Link href={"/"} className="flex items-center gap-2">
              {role}
            </Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#1A1A1A] px-6 py-6 w-full flex items-center justify-center flex-col space-y-3">
          <div className="flex flex-row space-x-2">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="flex items-center justify-center rounded-full border-2 h-10 sm:h-14 w-10 sm:w-14 bg-gradient-to-br from-gray-20 to-gray-10 cursor-pointer hover:border-[#404040] transition-all duration-300 text-white hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMembersSection;
