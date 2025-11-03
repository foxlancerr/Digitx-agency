"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import SectionTItle from "../base/SectionTItle";
import Link from "next/link";

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
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-6 ">
          {contactCategoriesData.map((category) => (
            <ContactCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {contactCategoriesData.map((category) => (
            <MobileContactCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex flex-col space-y-6 mt-10">
        <h2 className="text-base font-semibold md:text-xl text-white text-center">
          {sectionConfig.phoneTitle}
        </h2>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-6 ">
          {phoneContactsData.map((category) => (
            <ContactCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {phoneContactsData.map((category) => (
            <MobileContactCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

interface ContactCardProps {
  category: IContactCategory;
}

const ContactCard = ({ category }: ContactCardProps) => {
  const method = category.methods[0];

  return (
    <Card className="bg-transparent transition-all duration-300 group p-0 rounded-none border-0">
      <CardContent className="p-0 space-y-3">
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

const MobileContactCard = ({ category }: ContactCardProps) => {
  const method = category.methods[0];

  return (
    <Card className="border border-[#1A1A1A] bg-transparent rounded-lg p-4  transition-all duration-300">
      <CardContent className="p-0 space-y-3">
        {/* Label */}
        <p className="text-xs text-[#808080] uppercase tracking-widest font-semibold">
          {category.title}
        </p>

        {/* Contact Method */}
        <Button
          variant="ghost"
          className="h-auto p-0 w-full justify-start hover:bg-transparent group/btn"
          asChild
        >
          <Link
            href={method.link}
            className="flex items-center gap-2 text-white hover:text-white"
          >
            {method.type === "email" ? (
              <IoMailOutline className="w-4 h-4 flex-shrink-0 text-[#B3B3B3]" />
            ) : (
              <IoCallOutline className="w-4 h-4 flex-shrink-0 text-[#B3B3B3]" />
            )}
            <span className="text-sm font-medium truncate">{method.value}</span>
            <ArrowRight className="w-3 h-3 ml-auto flex-shrink-0 text-[#B3B3B3] group-hover/btn:translate-x-1 transition-all" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TouchTodaySection;
