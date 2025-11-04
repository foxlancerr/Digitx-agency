"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import SectionWrapper from "../base/SectionWrapper";
import Link from "next/link";
import SectionTItle from "../base/SectionTItle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IBlog } from "./BlogDetailsSection";

const BlogCard = ({
  title,
  shortDescription,
  writerName,
  writerImage,
  link,
  coverImage,
  datePosted,
}: IBlog) => {
  return (
    <Card className="overflow-hidden relative bg-black transition-all duration-300 group border-0 rounded-2xl hover:transform hover:scale-[1.02] p-6">
      {/* Border with Gradient Fade */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #1A1A1A 0%, #1A1A1A 50%, transparent 100%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          zIndex: 5,
        }}
      />

      {/* Project Image Section */}
      <Card className="relative sm:h-80 p-5 h-50 border bg-[#0F0F0F] flex items-center justify-center">
        {/* Grid Background */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50"
          style={{
            backgroundImage: "url('/assets/images/grid/hero-grid.png')",
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

        <img src={coverImage} className="cover h-full" alt={title}></img>
      </Card>

      {/* Content Section */}
      <CardContent className="relative z-2 px-0 bg-black space-y-6">
        <div className="flex sm:items-center space-x-3 space-y-3 w-full sm:justify-between flex-col sm:flex-row">
          {/* avator */}
          <div className="flex items-center space-x-3 ">
            <Avatar className="w-12 h-12">
              <AvatarImage src={writerImage} />
              <AvatarFallback>{writerName}</AvatarFallback>
            </Avatar>
            <h4 className="text-sm font-medium">{writerName}</h4>
          </div>

          <div className="flex items-center space-x-1">
            <Badge
              variant="outline"
              className="whitespace-normal py-2 leading-normal px-4 w-fit founded-full  bg-transparent border-[#282828] text-[#B3B3B3] hover:bg-[#1A1A1A] hover:border-[#404040] transition-colors"
            >
              <span>
                {" "}
                <Calendar className="size-4 mr-1" />
              </span>
              {datePosted}
            </Badge>
            <Badge
              variant="outline"
              className="whitespace-normal py-2 leading-normal px-4 w-fit founded-full  bg-transparent border-[#282828] text-[#B3B3B3] hover:bg-[#1A1A1A] hover:border-[#404040] transition-colors"
            >
              <span>
                {" "}
                <Calendar className="size-4 mr-1" />
              </span>
              {datePosted}
            </Badge>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-sm text-[#B3B3B3] leading-relaxed mb-6">
          {shortDescription}
        </p>

        <div className="flex w-full">
          <Button
            variant="outline"
            className=" gap-3 p-5  border border-[#1A1A1A] hover:border-[#282828] transition-all rounded-full text-[#B3B3B3] data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white data-[state=active]:border-[#282828]"
          >
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
