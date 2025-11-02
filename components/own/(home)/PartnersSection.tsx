"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
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
import Image from "next/image";

interface IPartnersSection {
  clientLogo: string;
  companyName: string;
  partnershipDescription: string;
  link: string;
}

const partnerData: IPartnersSection[] = [
  {
    clientLogo: "/assets/images/partners/partner4.png",
    companyName: "GlobalTech Solutions",
    partnershipDescription:
      "GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.",
    link: "#globaltech",
  },
  {
    clientLogo: "/assets/images/partners/partner3.png",
    companyName: "Innovate Labs",
    partnershipDescription:
      "Innovate Labs worked with DigitX to create a cutting-edge SaaS platform with intuitive UI/UX design that significantly improved user adoption rates.",
    link: "#innovatelabs",
  },
  {
    clientLogo: "/assets/images/partners/partner2.png",
    companyName: "Nexus Digital",
    partnershipDescription:
      "Nexus Digital partnered with DigitX for a complete digital transformation, implementing strategic consulting and modern web solutions to drive business growth.",
    link: "#nexusdigital",
  },
  {
    clientLogo: "/assets/images/partners/partner1.png",
    companyName: "Vertex Marketing",
    partnershipDescription:
      "Vertex Marketing collaborated with DigitX to launch data-driven marketing campaigns that increased their online visibility and generated quality leads.",
    link: "#vertexmarketing",
  },
  {
    clientLogo: "/assets/images/partners/partner5.png",
    companyName: "Quantum Commerce",
    partnershipDescription:
      "Quantum Commerce partnered with DigitX for comprehensive SEO services, resulting in a 300% increase in organic traffic and improved search rankings.",
    link: "#quantumcommerce",
  },
  {
    clientLogo: "/assets/images/partners/partner6.png",
    companyName: "Fusion Enterprises",
    partnershipDescription:
      "Fusion Enterprises worked with DigitX to build a scalable e-commerce platform with seamless payment integration and exceptional user experience.",
    link: "#fusionenterprises",
  },
];

const PartnersSection = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="">
        <SectionTItle
          primaryTitle={"Our"}
          secondaryTitle={"artners and Clients"}
          description={
            "We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm."
          }
          isNewLine={false}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerData.map((reason, index) => (
            <PartnersCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const PartnersCard = ({
  clientLogo,
  companyName,
  partnershipDescription,
  link,
}: IPartnersSection) => {
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
        <div className="mb-6 flex flex-row gap-2 sm:gap-4 items-center">
          <div className="p-3 sm:p-4 border-border rounded-full border shrink-0">
            <div className="p-3 sm:p-4 border-border rounded-full border ">
              <div className="p-3 sm:p-4 border-border rounded-full border ">
                <Image
                  className="shrink-0 size-5 sm:size-6"
                  src={"/assets/images/logo.png"}
                  alt="Main logo"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
          <span className="shrink-0">
            <Plus className="size-6 sm:size-8" />
          </span>
          <div className="p-3 sm:p-4 border-border rounded-full border shrink-0">
            <div className="p-3 sm:p-4 border-border rounded-full border ">
              <div className="p-3 sm:p-4 border-border rounded-full border ">
                <Image
                  className="shrink-0 size-5 sm:size-6"
                  src={clientLogo}
                  alt={companyName}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xl font-semibold text-white">{companyName}</h3>
          {/* Description - Full on desktop */}
          <p className="text-sm text-[#B3B3B3] leading-relaxed">
            {partnershipDescription}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnersSection;
