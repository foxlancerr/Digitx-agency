"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  IoMailOutline,
  IoCallOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { totalmem } from "os";
import InquiryFormSection from "./InquiryFormSection";

interface IContactMethod {
  id: string;
  label: string;
  value: string;
  link: string;
  type: "email" | "phone";
}

interface IContactCategory {
  id: string;
  title: string;
  description: string;
  methods: IContactMethod[];
}

interface ISectionConfig {
  mainDescription: string;
  emailTitle: string;
  phoneTitle: string;
}

const sectionConfig: ISectionConfig = {
  mainDescription:
    "Feel free to contact us through any of the following channels",
  emailTitle: "Contact Us Via Email",
  phoneTitle: "Contact Us By Phone",
};

const contactCategoriesData: IContactCategory[] = [
  {
    id: "email-general",
    title: "For General Inquiries",
    description: "General Inquiries",
    methods: [
      {
        id: "email-general-main",
        label: "For General Inquiries",
        value: "info@digitx.com",
        link: "mailto:info@digitx.com",
        type: "email",
      },
    ],
  },
  {
    id: "email-business",
    title: "For Business Collaborations",
    description: "Business Collaborations",
    methods: [
      {
        id: "email-business-main",
        label: "For Business Collaborations",
        value: "partnerships@digitx.com",
        link: "mailto:partnerships@digitx.com",
        type: "email",
      },
    ],
  },
  {
    id: "email-careers",
    title: "For Job Opportunities",
    description: "For Job Opportunities",
    methods: [
      {
        id: "email-careers-main",
        label: "For Job Opportunities",
        value: "careers@digitx.com",
        link: "mailto:careers@digitx.com",
        type: "email",
      },
    ],
  },
];

const phoneContactsData: IContactCategory[] = [
  {
    id: "phone-general",
    title: "General Enquiries",
    description: "General Enquiries",
    methods: [
      {
        id: "phone-general-main",
        label: "General Enquiries",
        value: "+1-XXX-XXX-XXXX",
        link: "tel:+1-XXX-XXX-XXXX",
        type: "phone",
      },
    ],
  },
  {
    id: "phone-business",
    title: "Business Collaborations",
    description: "Business Collaborations",
    methods: [
      {
        id: "phone-business-main",
        label: "Business Collaborations",
        value: "+1-XXX-XXX-XXXX",
        link: "tel:+1-XXX-XXX-XXXX",
        type: "phone",
      },
    ],
  },
  {
    id: "phone-consultation",
    title: "Free Consultation",
    description: "Free Consultation",
    methods: [
      {
        id: "phone-consultation-main",
        label: "Free Consultation",
        value: "+1-XXX-XXX-XXXX",
        link: "tel:+1-XXX-XXX-XXXX",
        type: "phone",
      },
    ],
  },
];

const careerData: ICareerCard[] = [
  {
    icon: "/assets/images/contact/city1.png",
    title: "New York City",

    description: "123 Main Street, Suite 456, New York, NY 10001",
    link: "#web-development",
  },
  {
    icon: "/assets/images/contact/city2.png",

    title: "San Francisco",

    description: "789 Tech Avenue, 10th Floor, San Francisco, CA 94105",
    link: "#web-development",
  },
];

const TouchTodaySection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="relative p-5 border mb-10 min-h-[350px] rounded-2xl flex items-center justify-center">
        <div className="text-center z-2">
          <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-4">
            Get in
            <span className="text-[#666666]">Touch with Us Today! </span>
          </h2>
          <p className="text-sm md:text-base text-[#B3B3B3] mt-4 mx-auto">
            At DigitX, we value your inquiries, feedback, and collaborations.
            Whether you are interested in our digital services, have questions
            about our projects, or want to explore potential partnerships, we
            encourage you to reach out to our dedicated team. Connect with us
            through any of the channels below, and we'll be delighted to assist
            you on your digital journey.
          </p>
        </div>

        <p className="text-sm md:text-base text-[#B3B3B3] absolute -bottom-5 left-[50%] transform -translate-x-[50%] border bg-black rounded-full w-fit px-4 py-2">
          {sectionConfig.mainDescription}
        </p>
      </div>

      {/* Email Section */}
      <div className="flex flex-col space-y-6 mt-20">
        <h2 className="text-base font-semibold md:text-xl text-white text-center">
          {sectionConfig.emailTitle}
        </h2>

        {/* Desktop Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-8 ">
          {contactCategoriesData.map((category, index) => (
            <ContactCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex flex-col space-y-6 mt-10">
        <h2 className="text-base font-semibold md:text-xl text-white text-center">
          {sectionConfig.phoneTitle}
        </h2>

        {/* Desktop Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-8 ">
          {phoneContactsData.map((category, index) => (
            <ContactCard key={category.id} index={index} category={category} />
          ))}
        </div>
      </div>

      {/* office location */}
      <div className="flex flex-col items-center justify-center mt-20 space-y-3">
        <h2 className="text-base font-semibold md:text-xl text-white text-center">
          Office Locations
        </h2>

        <p className="text-sm text-gray-40">
          Visit our offices to have a face-to-face discussion with our team. We
          have locations in
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6 border p-8 rounded-2xl">
          {careerData.map((award, index) => (
            <LocationCard key={index} award={award} index={index} />
          ))}
        </div>
      </div>

      {/* contact us form */}
      <InquiryFormSection></InquiryFormSection>  
    </SectionWrapper>
  );
};

interface ContactCardProps {
  category: IContactCategory;
  index: number;
}

const ContactCard = ({ category, index }: ContactCardProps) => {
  const method = category.methods[0];

  return (
    <Card
      className={cn(
        "bg-transparent transition-all duration-300 group p-0 rounded-none border-0",
        index === 1 && "px-6 border-x border-[#1A1A1A]"
      )}
    >
      <CardContent className="p-0 space-y-4">
        {/* Label */}
        <p className="text-xs text-[#808080] tracking-widest font-semibold">
          {category.title}
        </p>

        {/* Learn More Button */}
        <Button
          variant="outline"
          className="h-auto text-primary-foreground p-2 bg-black! rounded-full w-full border-border group/btn"
          asChild
        >
          <Link
            href={method.link}
            className="flex items-center justify-between! w-auto gap-3 text-white hover:text-white"
          >
            <div className="flex flex-row gap-2  items-center">
              {method.type === "email" ? (
                <IoMailOutline className="size-5 flex-shrink-0 text-[#B3B3B3] group-hover/btn:text-white transition-colors" />
              ) : (
                <IoCallOutline className="size-5 flex-shrink-0 text-[#B3B3B3] group-hover/btn:text-white transition-colors" />
              )}
              <span className="text-xs">{method.value}</span>
            </div>

            <span className="rounded-full px-4 py-2 bg-primary">
              <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

interface ICareerCard {
  icon: string;
  title: string;
  description: string;
  badgeIcon?: React.ReactNode;
  link: string;
}

interface ICareerCardProps {
  award: ICareerCard;
  index: number;
}

const LocationCard = ({ award, index }: ICareerCardProps) => {
  const { icon, link, title, description, badgeIcon } = award;

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
        {/* Icon */}
        <div className="mb-6">
          <div className="p-4 border border-[#282828] rounded-full">
            <div className="p-4 border border-[#282828] rounded-full">
              <div className="p-4 border border-[#282828] rounded-full text-white">
                <Image alt={title} src={icon} width={40} height={40}></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {/* Description - Full on desktop */}
          <p className="hidden md:block text-sm text-[#B3B3B3] leading-relaxed">
            {description}
          </p>
          {/* Description - Short on mobile */}
          <p className="md:hidden text-xs text-[#B3B3B3] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Learn More Button */}
        <Button
          variant="outline"
          className="h-auto text-primary-foreground  bg-black! rounded-full w-fit border-border group/btn"
          asChild
        >
          <Link href={link} className="flex items-center font-light! gap-2">
            Get Direction
            <span className="rounded-full px-4 py-2 bg-primary">
              <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TouchTodaySection;
