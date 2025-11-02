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
} from "react-icons/io5";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import SectionTItle from "../base/SectionTItle";
import { Card, CardContent } from "@/components/ui/card";

interface IServicesSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  price: string;
  priceLabel?: string;
}

const servicesData: IServicesSection[] = [
  {
    icon: <IoShareSocialOutline className="size-6" />,
    title: "Web Development",
    description:
      "Unlock your online potential in today's digital age where a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life with cutting-edge technologies like React, Next.js, and modern backend frameworks. We focus on performance optimization, security best practices, and scalable architecture to make your online journey a resounding success.",
    price: "$2,500",
    priceLabel: "Starts at Price",
    link: "#web-development",
  },
  {
    icon: <IoBusinessOutline className="size-6" />,
    title: "Mobile App Development",
    description:
      "Embrace mobility with confidence as mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's native iOS development with Swift, Android development with Kotlin, or cross-platform solutions using React Native and Flutter, we ensure that your app delivers a seamless experience. Our team focuses on user-centric design, smooth animations, offline functionality, and push notifications to leave a lasting impression on your users and drive business growth.",
    price: "$5,000",
    priceLabel: "Starts at Price",
    link: "#mobile-development",
  },
  {
    icon: <IoBulbOutline className="size-6" />,
    title: "UI/UX Design",
    description:
      "Leave a lasting impression on your audience with our comprehensive UI/UX design services. We combine aesthetics with functionality to create interfaces that are not only visually stunning but also intuitive and user-friendly. Our design process begins with in-depth user research and persona development, followed by wireframing and prototyping. We craft pixel-perfect designs that align with your brand identity while ensuring accessibility standards and responsive behavior across all devices. From conducting usability testing to implementing design systems, we ensure every interaction delights your users and drives conversions.",
    price: "$1,800",
    priceLabel: "Starts at Price",
    link: "#design",
  },
  {
    icon: <IoPhonePortraitOutline className="size-6" />,
    title: "Digital Strategy & Consulting",
    description:
      "In today's rapidly evolving digital landscape, having the right strategy is crucial for success. Our digital consulting services help you navigate complex technology decisions and chart a clear path forward. We analyze your current digital presence, identify opportunities for growth, and develop comprehensive roadmaps aligned with your business objectives. From technology stack selection and architecture planning to digital transformation initiatives and process optimization, our expert consultants provide actionable insights. We help you prioritize initiatives, allocate resources effectively, and implement best practices to ensure your digital investments deliver maximum ROI.",
    price: "$1,200",
    priceLabel: "Starts at Price",
    link: "#consulting",
  },
  {
    icon: <IoFlashOutline className="size-6" />,
    title: "Digital Marketing & Growth",
    description:
      "Our data-driven digital marketing strategies allow us to reach your target audience with precision and maximize your marketing ROI. We create comprehensive campaigns that span multiple channels including social media marketing, content marketing, email campaigns, and paid advertising. Our team leverages advanced analytics and A/B testing to continuously optimize campaign performance. From developing compelling brand narratives and creating engaging content to managing influencer partnerships and running performance marketing campaigns, we help you build brand awareness, generate qualified leads, and drive sustainable business growth in the competitive digital marketplace.",
    price: "$2,000",
    priceLabel: "Starts at Price",
    link: "#marketing",
  },
  {
    icon: <IoSearchOutline className="size-6" />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your online visibility and organic traffic with our expert SEO services. Our comprehensive approach combines technical SEO, on-page optimization, and strategic link building to improve your search engine rankings. We conduct thorough keyword research, optimize your website structure and content, improve page load speeds, and ensure mobile-friendliness. Our team stays updated with the latest algorithm changes and implements white-hat SEO techniques that deliver sustainable results. From local SEO to enterprise-level optimization, we help you dominate search results, increase qualified traffic, and establish your brand as an authority in your industry.",
    price: "$1,500",
    priceLabel: "Starts at Price",
    link: "#seo",
  },
];


const ServicesSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="">
        <SectionTItle
          primaryTitle={"Our"}
          secondaryTitle={"Services"}
          description={
            "Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results."
          }
          isNewLine={false}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((reason, index) => (
            <ServicesCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServicesCard = ({
  icon,
  link,
  title,
  description,
  price,
}: IServicesSection) => {

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
          <div className="p-4 border-border rounded-full border">
            <div className="p-4 border-border rounded-full border">
              <div className="p-4 border-border rounded-full border">
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {/* Description - Full on desktop */}
          <p className="hidden md:block text-sm text-[#B3B3B3] leading-relaxed">
            {description}
          </p>

        </div>

        <div className="flex justify-between gap-4 sm:gap-6 w-full items-center">
          {/* Category and Date */}

          <span className="text-[#B3B3B3]">
            Starts at Price: <span className="text-white">{price}</span>
          </span>

          {/* Learn More Button */}
          <Button
            variant="outline"
            className="h-auto text-primary-foreground  bg-black! rounded-full w-fit border-border group/btn"
            asChild
          >
            <Link href={link} className="flex items-center font-light! gap-2">
              Book Call
              <span className="rounded-full px-4 py-2 bg-primary">
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
